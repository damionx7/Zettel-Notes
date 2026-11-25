fn main() {
    // On Windows the app needs the Common Controls v6 manifest. tauri-build embeds it in the
    // executable only, so the unit-test binary loads the old comctl32 and dies with
    // STATUS_ENTRYPOINT_NOT_FOUND before any test runs. Embed the same manifest through the
    // linker instead, which covers the app, its tests and the cdylib alike.
    let msvc = std::env::var("CARGO_CFG_TARGET_OS").as_deref() == Ok("windows")
        && std::env::var("CARGO_CFG_TARGET_ENV").as_deref() == Ok("msvc");
    let attributes = if msvc {
        let manifest = std::path::Path::new(env!("CARGO_MANIFEST_DIR"))
            .join("windows-app-manifest.xml");
        println!("cargo:rerun-if-changed={}", manifest.display());
        println!("cargo:rustc-link-arg=/MANIFEST:EMBED");
        println!("cargo:rustc-link-arg=/MANIFESTINPUT:{}", manifest.display());
        tauri_build::Attributes::new()
            .windows_attributes(tauri_build::WindowsAttributes::new_without_app_manifest())
    } else {
        tauri_build::Attributes::new()
    };
    tauri_build::try_build(attributes).expect("failed to run the Tauri build script");
}
