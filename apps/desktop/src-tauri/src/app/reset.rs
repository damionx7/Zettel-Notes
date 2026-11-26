use std::path::{Path, PathBuf};
use tauri::Manager;

/// The WebView profile is locked while the app runs, so a reset is finished on the next
/// start: the command records the intent outside the folders it will delete.
fn flag_path(app: &tauri::AppHandle) -> Option<PathBuf> {
    app.path().temp_dir().ok().map(|dir| dir.join("zettel-notes-reset.flag"))
}

fn reset_targets(app: &tauri::AppHandle) -> Vec<PathBuf> {
    let mut targets = Vec::new();

    // The app's own data root is `~/.zettel-notes`, and `~/.winzettel` before the rename.
    if let Ok(home) = app.path().home_dir() {
        targets.push(home.join(crate::DATA_ROOT_DIR));
        targets.push(home.join(crate::LEGACY_DATA_ROOT_DIR));
    }

    // Identifier-derived folders, which follow `org.eu.thedoc.zettelnotes.desktop`.
    if let Ok(local) = app.path().app_local_data_dir() {
        targets.push(local);
    }
    if let Ok(config) = app.path().app_config_dir() {
        targets.push(config);
    }

    // The runtime folder holds the single-instance state and lives beside the webview profile.
    if let Some(runtime) = crate::runtime_dir() {
        targets.push(runtime);
    }

    // On Linux without `~/.zettel-notes`, settings live in the XDG config folder
    // (`~/.config/zettel-notes`, see `app_root_default`).
    #[cfg(target_os = "linux")]
    if let Ok(home) = app.path().home_dir() {
        let config_home = std::env::var_os("XDG_CONFIG_HOME")
            .map(PathBuf::from)
            .filter(|path| path.is_absolute())
            .unwrap_or_else(|| home.join(".config"));
        targets.push(config_home.join("zettel-notes"));
    }

    // Folders that belong to upstream MarkFlowy (`~/.markflowy`, `com.drl990114.markflowy`)
    // are deliberately left alone: they are another app's data, not ours.

    targets.sort();
    targets.dedup();
    targets
}

fn delete_all(targets: &[PathBuf]) -> Vec<String> {
    let mut failed = Vec::new();
    for path in targets {
        if !path.exists() {
            continue;
        }
        if let Err(error) = std::fs::remove_dir_all(path) {
            failed.push(format!("{}: {error}", path.display()));
        }
    }
    failed
}

/// Finishes a pending reset. Called once at startup, before the window opens the WebView
/// profile, which is the only moment those files are not in use.
pub fn apply_pending_reset(app: &tauri::AppHandle) {
    let Some(flag) = flag_path(app) else { return };
    if !flag.exists() {
        return;
    }
    let _ = delete_all(&reset_targets(app));
    let _ = std::fs::remove_file(Path::new(&flag));
}

/// Deletes the application's settings and interface state.
///
/// When `restart` is set the reset completes on the next start, because the WebView profile
/// cannot be removed while the app is using it. Returns the paths still pending removal.
#[tauri::command]
pub async fn reset_app_data(app: tauri::AppHandle, restart: bool) -> Result<Vec<String>, String> {
    let targets = reset_targets(&app);

    // Anything outside the WebView profile can go right away.
    let pending: Vec<String> = Vec::new();
    delete_all(&targets);

    let locked = targets.iter().any(|path| path.exists());
    let flag = flag_path(&app).ok_or_else(|| "no temp directory".to_string())?;

    if locked {
        std::fs::write(&flag, b"pending").map_err(|error| error.to_string())?;
    }

    if restart {
        app.restart();
    }

    Ok(pending)
}
