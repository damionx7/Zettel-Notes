//! The active encrypted repository, if any.
//!
//! The desktop app keeps one unlocked gocryptfs volume per process, mirroring how the window
//! model works: a window opens exactly one workspace. Every file command asks this module
//! whether a path belongs to that volume before touching the disk, so the rest of the app
//! does not need to know that encryption exists.

use std::path::{Path, PathBuf};
use std::sync::Mutex;

use mf_gocryptfs::Volume;
use serde::Serialize;

/// Names that belong to the encryption machinery or to the Android app, never to the user.
const HIDDEN_NAMES: [&str; 5] = [
    ".zettel-notes",
    "gocryptfs.conf",
    "gocryptfs.diriv",
    "gocryptfs.conf.tmp",
    "gocryptfs.longname",
];

pub struct ActiveRepo {
    pub root: PathBuf,
    pub volume: Volume,
}

static ACTIVE: Mutex<Option<ActiveRepo>> = Mutex::new(None);

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct RepoStatus {
    /// The folder carries a gocryptfs configuration, so it is an encrypted repository.
    pub is_repo: bool,
    /// That repository is currently unlocked in this process.
    pub is_unlocked: bool,
    /// The folder that is unlocked, when there is one.
    pub root: Option<String>,
    pub creator: Option<String>,
}

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct RepoEntry {
    pub name: String,
    pub is_dir: bool,
    pub size: u64,
}

fn lock() -> std::sync::MutexGuard<'static, Option<ActiveRepo>> {
    ACTIVE.lock().expect("repository state poisoned")
}

pub fn is_configured_repository(path: &Path) -> bool {
    path.join("gocryptfs.conf").is_file()
}

pub fn status(path: &str) -> RepoStatus {
    let folder = Path::new(path);
    let guard = lock();
    let unlocked_root = guard.as_ref().map(|repo| repo.root.clone());

    RepoStatus {
        is_repo: is_configured_repository(folder),
        is_unlocked: match &unlocked_root {
            Some(root) => same_path(root, folder),
            None => false,
        },
        // Always report the unlocked root: the UI needs it to tell the owner that switching
        // repositories locked the previous one.
        root: unlocked_root.map(|root| root.to_string_lossy().to_string()),
        creator: guard.as_ref().and_then(|repo| {
            if same_path(&repo.root, folder) {
                Some(repo.volume.creator().to_string())
            } else {
                None
            }
        }),
    }
}

/// Unlock a repository, replacing any previously unlocked one.
pub fn unlock(path: &str, password: &str) -> Result<RepoStatus, String> {
    let folder = PathBuf::from(path);
    let volume = Volume::open(&folder, password.as_bytes()).map_err(|error| {
        match error {
            mf_gocryptfs::Error::BadPassword => "bad_password".to_string(),
            other => other.to_string(),
        }
    })?;

    let creator = volume.creator().to_string();
    *lock() = Some(ActiveRepo {
        root: folder.clone(),
        volume,
    });

    Ok(RepoStatus {
        is_repo: true,
        is_unlocked: true,
        root: Some(folder.to_string_lossy().to_string()),
        creator: Some(creator),
    })
}

/// Create a new repository and leave it unlocked, like the Android app's wizard does.
///
/// "auto" is not a cipher on disk: it resolves to XChaCha20-Poly1305, which is what the
/// Android app produced with its defaults, so both apps agree on what a new repository is.
pub fn create(
    path: &str,
    password: &str,
    plaintext_names: bool,
    cipher: &str,
    log_n: u8,
) -> Result<RepoStatus, String> {
    use mf_gocryptfs::{Cipher, CreateOptions};

    if !(14..=18).contains(&log_n) {
        return Err("unsupported key strength".to_string());
    }
    let cipher = match cipher {
        "aes" => Cipher::AesGcm,
        "auto" | "xchacha" => Cipher::XChaCha20Poly1305,
        other => return Err(format!("unknown cipher {other}")),
    };

    let folder = PathBuf::from(path);
    let options = CreateOptions {
        plaintext_names,
        cipher,
        log_n,
        creator: "Zettel Notes".to_string(),
    };
    let volume = mf_gocryptfs::Volume::create(&folder, password.as_bytes(), &options)
        .map_err(|error| error.to_string())?;

    let creator = volume.creator().to_string();
    *lock() = Some(ActiveRepo {
        root: folder.clone(),
        volume,
    });

    Ok(RepoStatus {
        is_repo: true,
        is_unlocked: true,
        root: Some(folder.to_string_lossy().to_string()),
        creator: Some(creator),
    })
}

pub fn lock_volume() {
    *lock() = None;
}

/// Translate an absolute path into a volume-relative path, preserving the caller's casing.
///
/// The comparison ignores case because Windows paths come back in different shapes from the
/// picker, the tree and the search results, but the returned path keeps the original spelling
/// so encrypted names match what is on disk.
pub fn relative_path(path: &str) -> Option<String> {
    {
        let guard = lock();
        if let Some(repo) = guard.as_ref() {
            if let Some(relative) = relative_from_root(&repo.root.to_string_lossy(), path) {
                return Some(relative);
            }
        }
    }
    let (root, relative) = locate_in_repo(path)?;
    let guard = lock();
    match guard.as_ref() {
        Some(repo) if same_path(&repo.root, &root) => Some(relative),
        _ => None,
    }
}

/// Absolute path of the repository root, for building absolute paths in search results.
pub fn active_root() -> Option<String> {
    let guard = ACTIVE.lock().ok()?;
    guard
        .as_ref()
        .map(|repo| repo.root.to_string_lossy().to_string())
}

/// True when this folder is a repository root that is not unlocked right now.
///
/// Listing a locked repository must never fall through to the disk: the owner would see
/// ciphertext names and would have no way to tell what went wrong.
pub fn is_locked_repository(path: &str) -> bool {
    if !is_configured_repository(Path::new(path)) {
        return false;
    }
    let guard = match ACTIVE.lock() {
        Ok(guard) => guard,
        Err(_) => return true,
    };
    match guard.as_ref() {
        Some(repo) => !same_path(&repo.root, Path::new(path)),
        None => true,
    }
}

/// True when the path lives inside a repository folder that is not unlocked. Used to keep
/// reads from falling back to the ciphertext on disk after a lock.
pub fn is_in_locked_repository(path: &str) -> bool {
    if relative_path(path).is_some() {
        return false;
    }
    let target = Path::new(path).to_string_lossy().to_lowercase();
    let mut current = Path::new(path).parent();
    while let Some(folder) = current {
        if is_configured_repository(folder) {
            let folder_text = folder.to_string_lossy().to_lowercase();
            let unlocked = ACTIVE
                .lock()
                .ok()
                .and_then(|guard| {
                    guard
                        .as_ref()
                        .map(|repo| repo.root.to_string_lossy().to_lowercase())
                })
                .map(|root| folder_text.starts_with(&root) || root.starts_with(&folder_text))
                .unwrap_or(false);
            return !unlocked;
        }
        current = folder.parent();
    }
    let _ = target;
    false
}

pub fn list(relative_dir: &str) -> Result<Vec<RepoEntry>, String> {
    let guard = lock();
    let repo = guard.as_ref().ok_or("no repository is unlocked")?;
    let entries = repo
        .volume
        .list(relative_dir)
        .map_err(|error| error.to_string())?;

    Ok(entries
        .into_iter()
        .filter(|entry| !is_hidden(&entry.name))
        .map(|entry| RepoEntry {
            name: entry.name,
            is_dir: entry.is_dir,
            size: entry.size,
        })
        .collect())
}

pub fn read(relative: &str) -> Result<Vec<u8>, String> {
    let guard = lock();
    let repo = guard.as_ref().ok_or("no repository is unlocked")?;
    repo.volume.read(relative).map_err(|error| error.to_string())
}

/// Find the repository that contains `path`, walking its real ancestors.
fn locate_in_repo(path: &str) -> Option<(PathBuf, String)> {
    let mut current = Some(PathBuf::from(path));
    while let Some(candidate) = current {
        if is_configured_repository(&candidate) {
            let root_text = candidate.to_string_lossy().to_string();
            let relative = relative_from_root(&root_text, path).unwrap_or_default();
            return Some((candidate, relative));
        }
        current = candidate.parent().map(Path::to_path_buf);
    }
    None
}

/// Where a write must go, decided once so no command can bypass the volume.
pub enum WriteTarget {
    /// Plain folder: the caller writes with the filesystem.
    Disk,
    /// Inside the unlocked repository: write through the volume.
    Volume(String),
    /// Inside a repository that is locked: refuse, never write plaintext.
    Locked,
}

pub fn classify_write(path: &str) -> WriteTarget {
    let Some((root, relative)) = locate_in_repo(path) else {
        return WriteTarget::Disk;
    };
    let guard = match ACTIVE.lock() {
        Ok(guard) => guard,
        Err(_) => return WriteTarget::Locked,
    };
    match guard.as_ref() {
        Some(repo) if same_path(&repo.root, &root) => WriteTarget::Volume(relative),
        _ => WriteTarget::Locked,
    }
}

pub fn write(relative: &str, contents: &[u8]) -> Result<(), String> {
    let guard = lock();
    let repo = guard.as_ref().ok_or("no repository is unlocked")?;
    repo.volume
        .write(relative, contents)
        .map_err(|error| error.to_string())
}

pub fn create_dir(relative: &str) -> Result<(), String> {
    let guard = lock();
    let repo = guard.as_ref().ok_or("no repository is unlocked")?;
    repo.volume
        .create_dir(relative)
        .map_err(|error| error.to_string())
}

pub fn remove_file(relative: &str) -> Result<(), String> {
    let guard = lock();
    let repo = guard.as_ref().ok_or("no repository is unlocked")?;
    repo.volume
        .remove_file(relative)
        .map_err(|error| error.to_string())
}

pub fn remove_dir(relative: &str) -> Result<(), String> {
    let guard = lock();
    let repo = guard.as_ref().ok_or("no repository is unlocked")?;
    repo.volume
        .remove_dir(relative)
        .map_err(|error| error.to_string())
}

/// Rename a note or folder inside the volume.
pub fn rename(from: &str, to: &str) -> Result<(), String> {
    let guard = lock();
    let repo = guard.as_ref().ok_or("no repository is unlocked")?;
    repo.volume
        .rename(from, to)
        .map_err(|error| error.to_string())
}

pub fn exists(relative: &str) -> bool {
    let guard = match ACTIVE.lock() {
        Ok(guard) => guard,
        Err(_) => return false,
    };
    let Some(repo) = guard.as_ref() else {
        return false;
    };
    if relative.is_empty() {
        return true;
    }
    let (parent, name) = match relative.rsplit_once('/') {
        Some((parent, name)) => (parent, name),
        None => ("", relative),
    };
    repo.volume
        .list(parent)
        .map(|entries| entries.iter().any(|entry| entry.name == name))
        .unwrap_or(false)
}

pub fn is_dir(relative: &str) -> bool {
    let guard = match ACTIVE.lock() {
        Ok(guard) => guard,
        Err(_) => return false,
    };
    let Some(repo) = guard.as_ref() else {
        return false;
    };
    if relative.is_empty() {
        return true;
    }
    let (parent, name) = match relative.rsplit_once('/') {
        Some((parent, name)) => (parent, name),
        None => ("", relative),
    };
    repo.volume
        .list(parent)
        .map(|entries| {
            entries
                .iter()
                .any(|entry| entry.name == name && entry.is_dir)
        })
        .unwrap_or(false)
}

/// Revision of an encrypted note, used for conflict detection by the editor.
///
/// It hashes the plaintext, because the ciphertext changes on every save even when the note
/// does not.
pub fn write_revision(relative: &str) -> Result<String, String> {
    let bytes = read(relative)?;
    Ok(plaintext_revision(&bytes))
}

pub fn plaintext_revision(bytes: &[u8]) -> String {
    use sha2::{Digest, Sha256};
    let mut hasher = Sha256::new();
    hasher.update(bytes);
    format!("enc:{:x}", hasher.finalize())
}

fn is_hidden(name: &str) -> bool {
    HIDDEN_NAMES.iter().any(|hidden| {
        if *hidden == "gocryptfs.longname" {
            name.starts_with("gocryptfs.longname.")
        } else {
            name == *hidden
        }
    })
}

/// Windows hands paths back in three shapes: as the picker gave them, with a trailing
/// separator from the tree, and canonicalised with an extended-length prefix.
fn strip_windows_prefix(path: &str) -> &str {
    path.strip_prefix(r"\\?\UNC\")
        .or_else(|| path.strip_prefix(r"\\?\"))
        .unwrap_or(path)
}

/// Canonical text form used for every path comparison inside the repository layer.
///
/// Case is folded only where the file system is case-insensitive by default (Windows and
/// macOS); on Linux `Notes` and `notes` are different folders and must stay distinct.
fn normalize_identity(path: &str) -> String {
    let value = strip_windows_prefix(path).replace('/', "\\");
    let mut value = if cfg!(any(windows, target_os = "macos")) {
        value.to_lowercase()
    } else {
        value
    };
    while value.len() > 3 && value.ends_with('\\') {
        value.pop();
    }
    value
}

/// Volume-relative path of `path` under `root`, preserving the caller's casing.
fn relative_from_root(root: &str, path: &str) -> Option<String> {
    let root_text = strip_windows_prefix(root).trim_end_matches(['\\', '/']);
    let path_text = strip_windows_prefix(path);
    let root_identity = normalize_identity(root_text);
    let path_identity = normalize_identity(path_text);

    if path_identity == root_identity {
        return Some(String::new());
    }
    let prefix = format!("{root_identity}\\");
    if !path_identity.starts_with(&prefix) {
        return None;
    }
    let tail = &path_text[root_text.len()..];
    Some(tail.trim_start_matches(['\\', '/']).replace('\\', "/"))
}

fn same_path(left: &Path, right: &Path) -> bool {
    if normalize_identity(&left.to_string_lossy()) == normalize_identity(&right.to_string_lossy()) {
        return true;
    }
    // Different spellings of the same folder (junctions, extended prefixes) still converge here.
    match (std::fs::canonicalize(left), std::fs::canonicalize(right)) {
        (Ok(left), Ok(right)) => {
            normalize_identity(&left.to_string_lossy()) == normalize_identity(&right.to_string_lossy())
        }
        _ => false,
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn path_identity_ignores_case_separators_and_trailing_slash() {
        assert!(same_path(
            Path::new("E:\\TesteNotas"),
            Path::new("E:/TesteNotas/")
        ));
        // Case only folds where the file system does.
        assert_eq!(
            same_path(Path::new("E:\\TesteNotas"), Path::new("e:/testenotas/")),
            cfg!(any(windows, target_os = "macos"))
        );
        assert!(same_path(
            Path::new("/home/user/Notes"),
            Path::new("/home/user/Notes/")
        ));
        assert!(!same_path(
            Path::new("E:\\TesteNotas"),
            Path::new("E:\\TesteNotas2")
        ));
    }

    #[test]
    fn relative_paths_keep_casing_and_nesting() {
        #[cfg(any(windows, target_os = "macos"))]
        assert_eq!(
            relative_from_root("E:\\Repo", "E:\\repo\\teste\\Nota.md"),
            Some("teste/Nota.md".to_string())
        );
        assert_eq!(
            relative_from_root("E:\\Repo", "E:\\Repo\\teste\\Nota.md"),
            Some("teste/Nota.md".to_string())
        );
        assert_eq!(
            relative_from_root("/home/user/Repo", "/home/user/Repo/teste/Nota.md"),
            Some("teste/Nota.md".to_string())
        );
        assert_eq!(
            relative_from_root("E:\\Repo\\", "E:\\Repo\\a.md"),
            Some("a.md".to_string())
        );
        assert_eq!(relative_from_root("E:\\Repo", "E:\\Repo"), Some(String::new()));
        assert_eq!(relative_from_root("E:\\Repo", "E:\\Other\\a.md"), None);
    }

    #[test]
    fn hidden_names_are_the_android_state_and_the_configuration() {
        assert!(is_hidden(".zettel-notes"));
        assert!(is_hidden("gocryptfs.conf"));
        assert!(is_hidden("gocryptfs.diriv"));
        assert!(is_hidden("gocryptfs.longname.abc.name"));
        assert!(!is_hidden("teste.md"));
        assert!(!is_hidden("notas"));
    }
}

/// The whole life of an encrypted repository as the app drives it: create, write, read,
/// rename, delete, lock and unlock again. Each test reopens the volume from disk at the end,
/// so what it checks is what the Android app would find.
#[cfg(test)]
mod lifecycle_tests {
    use super::*;
    use std::sync::MutexGuard;

    const PASSWORD: &str = "teste1000";

    /// Only one repository can be unlocked per process, so these tests take turns.
    static SERIAL: Mutex<()> = Mutex::new(());

    struct Repository {
        _serial: MutexGuard<'static, ()>,
        folder: tempfile::TempDir,
    }

    impl Repository {
        fn create(plaintext_names: bool, cipher: &str) -> Self {
            let serial = SERIAL.lock().unwrap_or_else(|poisoned| poisoned.into_inner());
            lock_volume();
            let folder = tempfile::tempdir().unwrap();
            create(&folder.path().to_string_lossy(), PASSWORD, plaintext_names, cipher, 14)
                .expect("the repository must be created");
            Self { _serial: serial, folder }
        }

        fn root(&self) -> String {
            self.folder.path().to_string_lossy().to_string()
        }

        fn absolute(&self, relative: &str) -> String {
            self.folder.path().join(relative).to_string_lossy().to_string()
        }

        /// A fresh volume straight from disk, with none of this process' caches.
        fn reopened(&self) -> Volume {
            Volume::open(self.folder.path(), PASSWORD.as_bytes()).expect("must reopen")
        }
    }

    impl Drop for Repository {
        fn drop(&mut self) {
            lock_volume();
        }
    }

    fn names(relative_dir: &str) -> Vec<String> {
        list(relative_dir).unwrap().into_iter().map(|entry| entry.name).collect()
    }

    #[test]
    fn a_new_repository_is_unlocked_and_written_encrypted() {
        for (plaintext_names, cipher) in [(false, "auto"), (false, "aes"), (true, "xchacha")] {
            let repo = Repository::create(plaintext_names, cipher);
            let state = status(&repo.root());
            assert!(state.is_repo && state.is_unlocked);
            assert_eq!(state.creator.as_deref(), Some("Zettel Notes"));

            write("notas/teste.md", b"# teste").unwrap();
            assert_eq!(read("notas/teste.md").unwrap(), b"# teste");
            assert_eq!(names(""), vec!["notas"]);
            assert_eq!(names("notas"), vec!["teste.md"]);
            assert!(exists("notas/teste.md") && is_dir("notas") && !is_dir("notas/teste.md"));

            let on_disk = std::fs::read_dir(repo.folder.path())
                .unwrap()
                .map(|entry| entry.unwrap().file_name().to_string_lossy().to_string())
                .collect::<Vec<_>>();
            assert_eq!(on_disk.contains(&"notas".to_string()), plaintext_names, "{cipher}");
            assert_eq!(repo.reopened().read("notas/teste.md").unwrap(), b"# teste");
        }
    }

    #[test]
    fn writes_route_through_the_volume_only_while_unlocked() {
        let repo = Repository::create(false, "auto");
        let note = repo.absolute("teste.md");
        assert!(matches!(classify_write(&note), WriteTarget::Volume(ref path) if path == "teste.md"));
        assert_eq!(relative_path(&note).as_deref(), Some("teste.md"));

        lock_volume();
        assert!(matches!(classify_write(&note), WriteTarget::Locked));
        assert!(is_locked_repository(&repo.root()));
        assert!(is_in_locked_repository(&note));
        assert!(read("teste.md").is_err() && write("teste.md", b"x").is_err());

        let outside = tempfile::tempdir().unwrap();
        let plain = outside.path().join("a.md").to_string_lossy().to_string();
        assert!(matches!(classify_write(&plain), WriteTarget::Disk));
    }

    #[test]
    fn unlocking_needs_the_right_password() {
        let repo = Repository::create(false, "auto");
        write("teste.md", b"teste").unwrap();
        lock_volume();

        assert_eq!(unlock(&repo.root(), "errada").unwrap_err(), "bad_password");
        assert!(!status(&repo.root()).is_unlocked);

        let state = unlock(&repo.root(), PASSWORD).unwrap();
        assert!(state.is_unlocked);
        assert_eq!(read("teste.md").unwrap(), b"teste");
    }

    #[test]
    fn the_android_state_and_configuration_stay_hidden() {
        let _repo = Repository::create(false, "auto");
        write(".zettel-notes/config.toml", b"").unwrap();
        write("teste.md", b"teste").unwrap();
        assert_eq!(names(""), vec!["teste.md"]);
    }

    #[test]
    fn renaming_a_note_keeps_its_text_and_drops_the_old_name() {
        let repo = Repository::create(false, "auto");
        write("teste.md", b"teste").unwrap();
        rename("teste.md", "notas/novo.md").unwrap();
        assert!(!exists("teste.md"));
        assert_eq!(read("notas/novo.md").unwrap(), b"teste");
        assert_eq!(repo.reopened().read("notas/novo.md").unwrap(), b"teste");
    }

    #[test]
    fn renaming_a_folder_moves_everything_inside_it() {
        let repo = Repository::create(false, "auto");
        write("notas/a.md", b"a").unwrap();
        write("notas/sub/b.md", b"b").unwrap();
        rename("notas", "arquivo").unwrap();

        assert_eq!(names(""), vec!["arquivo"]);
        assert_eq!(read("arquivo/a.md").unwrap(), b"a");
        assert_eq!(read("arquivo/sub/b.md").unwrap(), b"b");
        let volume = repo.reopened();
        assert_eq!(volume.read("arquivo/sub/b.md").unwrap(), b"b");
    }

    #[test]
    fn a_folder_deleted_and_made_again_gets_names_the_phone_can_read() {
        let repo = Repository::create(false, "auto");
        create_dir("notas").unwrap();
        write("notas/a.md", b"a").unwrap();
        remove_file("notas/a.md").unwrap();
        remove_dir("notas").unwrap();

        create_dir("notas").unwrap();
        write("notas/b.md", b"b").unwrap();
        assert_eq!(names("notas"), vec!["b.md"]);
        let volume = repo.reopened();
        let reopened: Vec<String> =
            volume.list("notas").unwrap().into_iter().map(|entry| entry.name).collect();
        assert_eq!(reopened, vec!["b.md"]);
        assert_eq!(volume.read("notas/b.md").unwrap(), b"b");
    }

    #[test]
    fn locking_a_root_only_locks_that_repository() {
        let repo = Repository::create(false, "auto");
        cmd::lock_if_root(&repo.absolute("notas"));
        assert!(status(&repo.root()).is_unlocked);
        cmd::lock_if_root(&repo.root());
        assert!(!status(&repo.root()).is_unlocked);
    }
}

pub mod cmd {
    use super::{RepoStatus, ACTIVE};
    use std::fs;
    use std::path::Path;

    #[tauri::command]
    pub async fn repo_status(path: String) -> Result<RepoStatus, String> {
        Ok(super::status(&path))
    }

    /// Unlock a repository: `bad_password` is returned as such so the UI can retry.
    #[tauri::command]
    pub async fn repo_unlock(path: String, password: String) -> Result<RepoStatus, String> {
        super::unlock(&path, &password)
    }

    /// Create a repository: the wizard collects the folder, the password and the options.
    #[tauri::command]
    pub async fn repo_create(
        path: String,
        password: String,
        plaintext_names: bool,
        cipher: String,
        log_n: u8,
    ) -> Result<RepoStatus, String> {
        super::create(&path, &password, plaintext_names, &cipher, log_n)
    }

    #[tauri::command]
    pub async fn repo_lock() -> Result<bool, String> {
        super::lock_volume();
        Ok(true)
    }

    /// Best-effort lock used when the window is closing or the workspace changes.
    pub fn lock_if_root(path: &str) {
        let mut guard = match ACTIVE.lock() {
            Ok(guard) => guard,
            Err(_) => return,
        };
        let matches = guard
            .as_ref()
            .map(|repo| repo.root.to_string_lossy().to_lowercase() == path.to_lowercase())
            .unwrap_or(false);
        if matches {
            *guard = None;
        }
    }

    /// Create the folder on disk before unlocking it, so the picker can hand us a new path.
    pub fn ensure_folder(path: &str) -> Result<(), String> {
        if Path::new(path).is_dir() {
            return Ok(());
        }
        fs::create_dir_all(path).map_err(|error| error.to_string())
    }
}


