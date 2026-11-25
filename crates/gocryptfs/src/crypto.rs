//! Crypto primitives for gocryptfs.
//!
//! The block cipher and AEAD primitives (AES-ECB, AES-256-GCM with gocryptfs' 128-bit nonce,
//! ChaCha20-Poly1305) come from a per-platform backend: Windows CNG on Windows, and the audited
//! RustCrypto crates everywhere else (Linux, macOS). `ring` provides HKDF, PBKDF2 and SHA-256
//! on every platform. Nothing here is hand-rolled except Salsa20/8 (scrypt's mixing core) and
//! HChaCha20 (the XChaCha20 key derivation), which are shared by both backends so that the
//! on-disk format is produced by the same code everywhere.

use ring::digest;
use ring::hkdf;
use ring::pbkdf2;
use ring::rand::{SecureRandom, SystemRandom};

#[cfg(windows)]
mod cng;
#[cfg(windows)]
use cng as backend;

#[cfg(not(windows))]
mod portable;
#[cfg(not(windows))]
use portable as backend;

pub use backend::EcbCipher;

/// AES-256-GCM with gocryptfs' 128-bit nonce: the master key envelope and AES-GCM volumes.
pub fn aes_gcm_seal(key: &[u8; 32], nonce: &[u8], aad: &[u8], plaintext: &[u8]) -> Result<Vec<u8>> {
    backend::aes_gcm_seal(key, nonce, aad, plaintext)
}

pub fn aes_gcm_open(key: &[u8; 32], nonce: &[u8], aad: &[u8], body: &[u8]) -> Result<Vec<u8>> {
    backend::aes_gcm_open(key, nonce, aad, body)
}

/// XChaCha20-Poly1305: HChaCha20 derives the subkey, the backend does the AEAD with a 96-bit nonce.
pub fn xchacha20poly1305_seal(
    key: &[u8; 32],
    nonce: &[u8],
    aad: &[u8],
    plaintext: &[u8],
) -> Result<Vec<u8>> {
    let (subkey, short) = xchacha_parts(key, nonce)?;
    backend::chacha20poly1305_seal(&subkey, &short, aad, plaintext)
}

pub fn xchacha20poly1305_open(
    key: &[u8; 32],
    nonce: &[u8],
    aad: &[u8],
    body: &[u8],
) -> Result<Vec<u8>> {
    let (subkey, short) = xchacha_parts(key, nonce)?;
    backend::chacha20poly1305_open(&subkey, &short, aad, body)
}

fn xchacha_parts(key: &[u8; 32], nonce: &[u8]) -> Result<([u8; 32], [u8; 12])> {
    if nonce.len() != 24 {
        return Err(Error::Damaged(format!(
            "XChaCha20-Poly1305 needs a 24-byte nonce, got {}",
            nonce.len()
        )));
    }
    let subkey = hchacha20(key, &nonce[..16]);
    let mut short = [0u8; 12];
    short[4..].copy_from_slice(&nonce[16..24]);
    Ok((subkey, short))
}

/// HKDF-SHA256 with an empty salt, matching `cryptocore.hkdfDerive`.
pub fn hkdf_sha256_32(ikm: &[u8], info: &[u8]) -> [u8; 32] {
    let salt = hkdf::Salt::new(hkdf::HKDF_SHA256, &[]);
    let prk = salt.extract(ikm);
    let okm_info = [info];
    let okm = prk
        .expand(&okm_info, HkdfLen32())
        .expect("32 bytes is a valid HKDF length");
    let mut out = [0u8; 32];
    okm.fill(&mut out).expect("the output length matches");
    out
}

struct HkdfLen32();

impl hkdf::KeyType for HkdfLen32 {
    fn len(&self) -> usize {
        32
    }
}

/// scrypt with gocryptfs' parameters: `ring`'s PBKDF2 plus a Salsa20/8 ROMix.
pub fn scrypt(
    password: &[u8],
    salt: &[u8],
    log_n: u8,
    r: u32,
    p: u32,
    out_len: usize,
) -> Result<Vec<u8>> {
    if log_n == 0 || log_n > 20 {
        return Err(Error::Unsupported(format!("scrypt log2(N) = {log_n}")));
    }
    if r == 0 || p == 0 {
        return Err(Error::Damaged("scrypt needs r and p above zero".into()));
    }

    let n = 1usize << log_n;
    let r = r as usize;
    let p = p as usize;
    let block_len = 128 * r;

    let mut b = vec![0u8; p * block_len];
    pbkdf2::derive(pbkdf2::PBKDF2_HMAC_SHA256, NON_ZERO_ONE, salt, password, &mut b);

    let mut v = vec![0u8; n * block_len];
    let mut xy = vec![0u8; 2 * block_len];
    for chunk in b.chunks_mut(block_len) {
        ro_mix(chunk, n, r, &mut v, &mut xy);
    }

    let mut out = vec![0u8; out_len];
    pbkdf2::derive(pbkdf2::PBKDF2_HMAC_SHA256, NON_ZERO_ONE, &b, password, &mut out);
    Ok(out)
}

const NON_ZERO_ONE: std::num::NonZeroU32 = match std::num::NonZeroU32::new(1) {
    Some(value) => value,
    None => unreachable!(),
};

fn ro_mix(block: &mut [u8], n: usize, r: usize, v: &mut [u8], xy: &mut [u8]) {
    let block_len = 128 * r;
    for index in 0..n {
        v[index * block_len..(index + 1) * block_len].copy_from_slice(block);
        block_mix(block, r, xy);
    }
    for _ in 0..n {
        let index = (integerify(block, r) & (n as u64 - 1)) as usize;
        for offset in 0..block_len {
            block[offset] ^= v[index * block_len + offset];
        }
        block_mix(block, r, xy);
    }
}

fn integerify(block: &[u8], r: usize) -> u64 {
    let start = (2 * r - 1) * 64;
    let mut bytes = [0u8; 8];
    bytes.copy_from_slice(&block[start..start + 8]);
    // RFC 7914 reads Integerify as a little-endian integer.
    u64::from_le_bytes(bytes)
}

fn block_mix(block: &mut [u8], r: usize, xy: &mut [u8]) {
    // RFC 7914: X starts as the last 64-byte block, then every block is mixed into it.
    let mut x = [0u8; 64];
    x.copy_from_slice(&block[(2 * r - 1) * 64..(2 * r) * 64]);
    for index in 0..(2 * r) {
        let mut mixed = [0u8; 64];
        for offset in 0..64 {
            mixed[offset] = x[offset] ^ block[index * 64 + offset];
        }
        salsa20_8(&mut mixed);
        x = mixed;
        xy[index * 64..(index + 1) * 64].copy_from_slice(&x);
    }
    // Output order: all even blocks, then all odd blocks.
    for index in 0..r {
        block[index * 64..(index + 1) * 64].copy_from_slice(&xy[(2 * index) * 64..(2 * index + 1) * 64]);
        let target = (r + index) * 64;
        block[target..target + 64].copy_from_slice(&xy[(2 * index + 1) * 64..(2 * index + 2) * 64]);
    }
}

fn salsa20_8(block: &mut [u8]) {
    let mut input = [0u32; 16];
    for (index, word) in input.iter_mut().enumerate() {
        *word = u32::from_le_bytes([
            block[index * 4],
            block[index * 4 + 1],
            block[index * 4 + 2],
            block[index * 4 + 3],
        ]);
    }
    let mut x = input;

    macro_rules! quarter {
        ($a:expr, $b:expr, $c:expr, $d:expr) => {
            x[$b] ^= x[$a].wrapping_add(x[$d]).rotate_left(7);
            x[$c] ^= x[$b].wrapping_add(x[$a]).rotate_left(9);
            x[$d] ^= x[$c].wrapping_add(x[$b]).rotate_left(13);
            x[$a] ^= x[$d].wrapping_add(x[$c]).rotate_left(18);
        };
    }

    for _ in 0..4 {
        quarter!(0, 4, 8, 12);
        quarter!(5, 9, 13, 1);
        quarter!(10, 14, 2, 6);
        quarter!(15, 3, 7, 11);
        quarter!(0, 1, 2, 3);
        quarter!(5, 6, 7, 4);
        quarter!(10, 11, 8, 9);
        quarter!(15, 12, 13, 14);
    }

    for index in 0..16 {
        let value = x[index].wrapping_add(input[index]);
        block[index * 4..index * 4 + 4].copy_from_slice(&value.to_le_bytes());
    }
}

/// HChaCha20, turning a 24-byte XChaCha20 nonce into a 12-byte ChaCha20 one.
fn hchacha20(key: &[u8; 32], nonce: &[u8]) -> [u8; 32] {
    let mut state = [0u32; 16];
    state[0] = 0x6170_7865;
    state[1] = 0x3320_646e;
    state[2] = 0x7962_2d32;
    state[3] = 0x6b20_6574;
    for index in 0..8 {
        state[4 + index] = u32::from_le_bytes([
            key[index * 4],
            key[index * 4 + 1],
            key[index * 4 + 2],
            key[index * 4 + 3],
        ]);
    }
    for index in 0..4 {
        state[12 + index] = u32::from_le_bytes([
            nonce[index * 4],
            nonce[index * 4 + 1],
            nonce[index * 4 + 2],
            nonce[index * 4 + 3],
        ]);
    }

    let mut x = state;
    macro_rules! quarter {
        ($a:expr, $b:expr, $c:expr, $d:expr) => {
            x[$a] = x[$a].wrapping_add(x[$b]);
            x[$d] = (x[$d] ^ x[$a]).rotate_left(16);
            x[$c] = x[$c].wrapping_add(x[$d]);
            x[$b] = (x[$b] ^ x[$c]).rotate_left(12);
            x[$a] = x[$a].wrapping_add(x[$b]);
            x[$d] = (x[$d] ^ x[$a]).rotate_left(8);
            x[$c] = x[$c].wrapping_add(x[$d]);
            x[$b] = (x[$b] ^ x[$c]).rotate_left(7);
        };
    }
    for _ in 0..10 {
        quarter!(0, 4, 8, 12);
        quarter!(1, 5, 9, 13);
        quarter!(2, 6, 10, 14);
        quarter!(3, 7, 11, 15);
        quarter!(0, 5, 10, 15);
        quarter!(1, 6, 11, 12);
        quarter!(2, 7, 8, 13);
        quarter!(3, 4, 9, 14);
    }

    let mut out = [0u8; 32];
    for (slot, index) in [0usize, 1, 2, 3, 12, 13, 14, 15].iter().enumerate() {
        out[slot * 4..slot * 4 + 4].copy_from_slice(&x[*index].to_le_bytes());
    }
    out
}

/// SHA-256, used for the long-name hash.
pub fn sha256(data: &[u8]) -> [u8; 32] {
    let digest = digest::digest(&digest::SHA256, data);
    let mut out = [0u8; 32];
    out.copy_from_slice(digest.as_ref());
    out
}

pub fn fill_random(buffer: &mut [u8]) -> Result<()> {
    SystemRandom::new()
        .fill(buffer)
        .map_err(|_| Error::Damaged("the system random generator failed".into()))
}

use crate::error::{Error, Result};

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn hchacha20_matches_the_rfc_draft_vector() {
        let mut key = [0u8; 32];
        for (index, byte) in key.iter_mut().enumerate() {
            *byte = index as u8;
        }
        let nonce = [
            0x00, 0x00, 0x00, 0x09, 0x00, 0x00, 0x00, 0x4a, 0x00, 0x00, 0x00, 0x00, 0x31, 0x41,
            0x59, 0x27,
        ];
        let expected = [
            0x82, 0x41, 0x3b, 0x42, 0x27, 0xb2, 0x7b, 0xfe, 0xd3, 0x0e, 0x42, 0x50, 0x8a, 0x87,
            0x7d, 0x73, 0xa0, 0xf9, 0xe4, 0xd5, 0x8a, 0x74, 0xa8, 0x53, 0xc1, 0x2e, 0xc4, 0x13,
            0x26, 0xd3, 0xec, 0xdc,
        ];
        assert_eq!(hchacha20(&key, &nonce), expected);
    }

    #[test]
    fn aes_gcm_round_trips_with_a_128_bit_nonce() {
        let key = [9u8; 32];
        let nonce = [4u8; 16];
        let sealed = aes_gcm_seal(&key, &nonce, &[0u8; 8], b"teste").unwrap();
        assert_eq!(aes_gcm_open(&key, &nonce, &[0u8; 8], &sealed).unwrap(), b"teste");
    }

    #[test]
    fn xchacha20poly1305_round_trips() {
        let key = [3u8; 32];
        let nonce = [7u8; 24];
        let sealed = xchacha20poly1305_seal(&key, &nonce, &[0u8; 24], b"teste").unwrap();
        assert_eq!(
            xchacha20poly1305_open(&key, &nonce, &[0u8; 24], &sealed).unwrap(),
            b"teste"
        );
    }

    #[test]
    fn ecb_encrypts_and_decrypts_a_block() {
        let cipher = EcbCipher::new(&[1u8; 32]).unwrap();
        let plain = [0u8; 16];
        let ciphertext = cipher.encrypt_blocks(&plain).unwrap();
        assert_ne!(ciphertext, plain);
        assert_eq!(cipher.decrypt_blocks(&ciphertext).unwrap(), plain);
    }

    #[test]
    fn scrypt_is_deterministic_and_salt_dependent() {
        let first = scrypt(b"teste1000", b"salt", 10, 8, 1, 32).unwrap();
        let again = scrypt(b"teste1000", b"salt", 10, 8, 1, 32).unwrap();
        let other = scrypt(b"teste1000", b"outro", 10, 8, 1, 32).unwrap();
        assert_eq!(first, again);
        assert_ne!(first, other);
    }
    #[test]
    fn scrypt_matches_rfc_7914_vector_one() {
        let out = scrypt(b"", b"", 4, 1, 1, 64).unwrap();
        let expected = "77d6576238657b203b19ca42c18a0497f16b4844e3074ae8dfdffa3fede21442\
fcd0069ded0948f8326a753a0fc81f17e8d3e0fb2e0d3628cf35e20c38d18906";
        let actual: String = out.iter().map(|byte| format!("{byte:02x}")).collect();
        assert_eq!(actual, expected.replace('\n', ""));
    }
}



