# Architecture

A map of the code for anyone, human or agent, about to change it. `WORKFLOW.md` covers the
daily loop and releases, `FORK.md` lists what differs from MarkFlowy and the contracts
that must not break, and `AGENTS.md` sets the UI and validation rules.

## The shape of the app

Zettel Notes is a [Tauri 2](https://v2.tauri.app) desktop app. One Rust process owns the
disk, the encrypted volume and the native integrations. Each window is a WebView running a
React 19 + Vite front end, which talks to Rust through Tauri commands (`invoke`) and
events.

```
apps/desktop/src (React)  ── invoke / events ──>  apps/desktop/src-tauri (Rust)
   source pane: CodeMirror                         file commands, settings, menus
   preview pane: rme renderer                      encrypted repository (gocryptfs)
   explorer, search, settings                      search, local history, PDF export
          │                                                   │
   packages/* (UI, theme, i18n, editor)              crates/* (reusable Rust)
```

There is no server and no network service: the only outbound requests are the manual
update check, the community theme catalogue and remote images in notes.

## Repository layout

| Path | What lives there |
|---|---|
| `apps/desktop/src` | The React front end. `components/` (editor area, explorer, sidebar, status bar), `router/Setting` (every settings page, driven by `settingMap.ts`), `extensions/` (search, quick open, command palette, bookmarks, table of contents), `services/` (thin wrappers over Tauri commands: files, workspace, encryption, history, CLI), `stores/` (Zustand state), `helper/`, `themes/` |
| `apps/desktop/src-tauri/src` | The Rust side. `lib.rs` registers plugins and commands; `fc.rs` file commands; `repo.rs` the unlocked encrypted repository; `app/` settings (`conf.rs`), windows, workspace, themes, recent files, reset; `search.rs`, `local_history.rs`, `pdf_export*`, `pandoc.rs`, `menu.rs`, `reliable_cli.rs` (the `zettel-notes` CLI bridge) |
| `apps/desktop/e2e` | Native WebdriverIO end-to-end tests (run by hand on macOS) |
| `crates/gocryptfs` (`mf_gocryptfs`) | gocryptfs v2 reader/writer compatible with the Android app |
| `crates/local_history` | Transactional local history and draft recovery (SQLite) |
| `crates/file_search` | Workspace file-name and content search (ripgrep libraries) |
| `crates/text_encoding` | Lossless text decoding/encoding at file boundaries |
| `crates/download_npm` | Downloads theme packages for the theme store |
| `crates/utils` | Small shared Rust types |
| `packages/editor` (`rme`) | Markdown parsing and the preview renderer (ProseMirror based); its WYSIWYG editor is library code that Desktop does not mount |
| `packages/zens` | Shared Radix + Tailwind UI primitives, exposed to Desktop through `apps/desktop/src/components/ui` |
| `packages/interface` | Cross-app components such as the file tree |
| `packages/theme` | Built-in themes and theme tokens |
| `packages/i18n`, `locales/` | Translation loading and the four locales (`en`, `es`, `fr-FR`, `pt-BR`) |
| `packages/types` | Shared TypeScript types |
| `skills/` | Agent skills shipped with the app: `zettel-notes` (drive the CLI) and `zettel-notes-dev` (themes and CSS) |
| `scripts/` | Dev launcher, release helpers (`bump-version.mjs`, `macos-universal-dmg.sh`) and their tests |
| `.github/workflows` | Test CI (every push), release on `v*` tags, manual bundle builds |

## How a note is opened and saved

1. The explorer lists folders lazily through Rust (`helper/filesys.ts`); `services/noteIndex.ts`
   walks the whole workspace once to resolve `[[note name]]` links.
2. Opening a file asks Rust for a snapshot (`get_file_snapshot`), which decodes the text and,
   inside an encrypted repository, decrypts it through the volume.
3. The source pane is CodeMirror; the preview pane renders the same text with `rme`. Scroll
   and caret following between the panes are described in `FORK.md`.
4. Saving goes back through Rust (`write_file` and friends). The workspace watcher reports
   external changes, for example from the phone's sync tool, and the editor resolves
   conflicts instead of overwriting unsaved edits.
5. Local history records versions and unsaved drafts in `crates/local_history`.

## Encryption

Two independent schemes, both byte-compatible with Zettel Notes for Android:

- **Encrypted repositories** (gocryptfs v2). `repo.rs` holds at most one unlocked volume per
  process; every file command checks whether a path belongs to it, so the rest of the app
  is unaware of encryption. The password lives in memory only. Plaintext writes inside a
  volume are refused.
- **End-to-end encrypted notes** (single files with a magic prefix). Encryption and
  decryption run in TypeScript (`helper/noteEncryption`, `services/note-encryption.ts`)
  with the passphrase from Settings → Encryption.

The exact formats and the tests that pin them are listed in `FORK.md`. Do not change either
format without proving it against a file produced by the Android app.

## Settings and data

- Settings are the Rust `AppConf` (`app/conf.rs`), stored with `tauri-plugin-store` in the
  app data folder; the front end reads them into `useAppSettingStore`. A new field must be
  added to the struct, `new()` and `merge_conf` (see "Adding a setting" in `WORKFLOW.md`).
- The app's own data root is `~/.zettel-notes`; legacy MarkFlowy and WinZettel names are
  migrated once at startup.

## Build, test and release

- Node 24 (`.node-version`), Yarn 4 workspaces with Turbo, Rust from `rust-toolchain.toml`.
- Test CI runs on Linux for every push: front-end unit tests (Vitest), TypeScript, Rust
  tests and the workflow tests in `scripts/`. macOS (with native E2E) and Windows tests run
  only when started by hand.
- Releases: bump with `node scripts/bump-version.mjs`, merge, then push a `v*` tag. The
  release workflow checks that the tag matches the committed version, builds Windows,
  Linux and both macOS architectures, publishes one universal macOS DMG, signs the updater
  artifacts and deploys `install.json` to GitHub Pages for the in-app updater.
