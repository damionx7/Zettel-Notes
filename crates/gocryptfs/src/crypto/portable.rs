//! Portable backend (Linux, macOS and any other non-Windows target): AES-ECB, AES-256-GCM with
//! gocryptfs' 128-bit nonce and ChaCha20-Poly1305 from the RustCrypto crates. The API mirrors
//! the Windows CNG backend in `cng.rs` exactly, so `crypto.rs` cannot tell them apart.

use aes::cipher::{BlockDecrypt, BlockEncrypt, KeyInit};
use aes::Aes256;
use aes_gcm::aead::consts::U16;
use aes_gcm::aead::{Aead, Payload};
use aes_gcm::{AesGcm, Nonce};
use chacha20poly1305::ChaCha20Poly1305;

use crate::error::{Error, Result};

const AES_BLOCK: usize = 16;
const TAG: usize = 16;

/// gocryptfs uses AES-256-GCM with a 128-bit nonce rather than the usual 96 bits.
type Aes256Gcm16 = AesGcm<Aes256, U16>;

/// AES-256 in ECB mode. EME needs single-block transforms.
pub struct EcbCipher {
    cipher: Aes256,
}

impl EcbCipher {
    pub fn new(key: &[u8; 32]) -> Result<Self> {
        Ok(Self {
            cipher: Aes256::new(key.into()),
        })
    }

    fn crypt(&self, data: &[u8], encrypt: bool) -> Result<Vec<u8>> {
        if data.is_empty() || data.len() % AES_BLOCK != 0 {
            return Err(Error::Damaged(format!(
                "ECB input must be a non-zero multiple of {AES_BLOCK} bytes, got {}",
                data.len()
            )));
        }
        let mut out = data.to_vec();
        for block in out.chunks_exact_mut(AES_BLOCK) {
            let block = aes::Block::from_mut_slice(block);
            if encrypt {
                self.cipher.encrypt_block(block);
            } else {
                self.cipher.decrypt_block(block);
            }
        }
        Ok(out)
    }

    pub fn encrypt_blocks(&self, data: &[u8]) -> Result<Vec<u8>> {
        self.crypt(data, true)
    }

    pub fn decrypt_blocks(&self, data: &[u8]) -> Result<Vec<u8>> {
        self.crypt(data, false)
    }
}

fn gcm_nonce(nonce: &[u8]) -> Result<&Nonce<U16>> {
    if nonce.len() != 16 {
        return Err(Error::Damaged(format!(
            "AES-GCM needs a 16-byte nonce, got {}",
            nonce.len()
        )));
    }
    Ok(Nonce::<U16>::from_slice(nonce))
}

pub fn aes_gcm_seal(key: &[u8; 32], nonce: &[u8], aad: &[u8], plaintext: &[u8]) -> Result<Vec<u8>> {
    Aes256Gcm16::new(key.into())
        .encrypt(gcm_nonce(nonce)?, Payload { msg: plaintext, aad })
        .map_err(|_| Error::Damaged("AEAD encryption failed".into()))
}

pub fn aes_gcm_open(key: &[u8; 32], nonce: &[u8], aad: &[u8], body: &[u8]) -> Result<Vec<u8>> {
    if body.len() < TAG {
        return Err(Error::Damaged("the ciphertext is shorter than its tag".into()));
    }
    Aes256Gcm16::new(key.into())
        .decrypt(gcm_nonce(nonce)?, Payload { msg: body, aad })
        .map_err(|_| Error::Damaged("a block failed authentication".to_string()))
}

pub fn chacha20poly1305_seal(
    key: &[u8; 32],
    nonce: &[u8; 12],
    aad: &[u8],
    plaintext: &[u8],
) -> Result<Vec<u8>> {
    ChaCha20Poly1305::new(key.into())
        .encrypt(nonce.into(), Payload { msg: plaintext, aad })
        .map_err(|_| Error::Damaged("AEAD encryption failed".into()))
}

pub fn chacha20poly1305_open(
    key: &[u8; 32],
    nonce: &[u8; 12],
    aad: &[u8],
    body: &[u8],
) -> Result<Vec<u8>> {
    if body.len() < TAG {
        return Err(Error::Damaged("the ciphertext is shorter than its tag".into()));
    }
    ChaCha20Poly1305::new(key.into())
        .decrypt(nonce.into(), Payload { msg: body, aad })
        .map_err(|_| Error::Damaged("a block failed authentication".to_string()))
}
