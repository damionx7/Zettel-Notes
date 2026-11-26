# Working on Zettel Notes

How a change travels from "I want X" to a tested release. Written for whoever picks this up
next, human or agent. `FORK.md` lists what differs from upstream MarkFlowy; this file is
about the day-to-day loop.

## The loop

1. **Branch** from `main`. `main` is the default branch and holds the released code.
2. **Change** the code in `apps/desktop`, `packages/*` or `apps/desktop/src-tauri`.
3. **Validate** locally with the checks in `AGENTS.md`: TypeScript
   (`yarn workspace @zettel-notes/desktop build:types`), the relevant unit tests
   (`yarn workspace @zettel-notes/desktop test`, `cargo test -p zettel-notes --lib`) and
   ESLint on the changed files only.
4. **Open a pull request** against `main`. Test CI runs on every push and pull request.
5. **Release** by pushing a `v*` tag: `tauri-release.yml` builds the installers for
   Windows, macOS and Linux, publishes a prerelease and updates `install.json` on GitHub
   Pages for the in-app updater.

Full installer builds run only on tags, or by hand (`nodejs.yml` and `test-bundle.yml` are
`workflow_dispatch`). Never generate an installer during ordinary iteration.

## Rules

| Rule | Reason |
|---|---|
| `tsc` + tests + lint are the validation | Builds are slow and prove nothing the tests do not |
| ESLint only on changed files, never `--fix` | Root `yarn lint` rewrites unrelated code |
| English identifiers, comments and UI source strings | The repo is English; translations live in `locales/` |
| Four locales: `en`, `es`, `fr-FR`, `pt-BR` | Key sets must match exactly or `yarn translate:check` fails |
| No new dependency for something the repo already has | Radix, Tailwind, CVA and Lucide are all present |
| Do not edit `dist/`, `lib/`, `esm/` | Generated output |
| Node 24 | Node 26 shadows `localStorage` in happy-dom and breaks ~130 tests |

## Synchronising with upstream

Upstream is [MarkFlowy](https://github.com/drl990114/MarkFlowy). Changes are brought over
by hand, as ordinary pull requests: cherry-pick or port the upstream commit, then use
`FORK.md` as the tie-breaker for anything it lists as removed or added.

## Environment notes

- `git config core.autocrlf false`, or CRLF checkouts break `gray-matter` parsing in the
  documentation tests.
- On Windows, `TMP`, `TEMP` and `TMPDIR` must point to a folder the build can write to;
  otherwise turbo/vitest fail with `EPERM` while creating directories.
- On Windows, Rust unit tests that start a WebView need the WebView2 runtime
  (`STATUS_ENTRYPOINT_NOT_FOUND` otherwise). Validate by compiling:
  `cargo test --lib --no-run`.
- The app keeps its settings in `~/.zettel-notes` (Windows and Linux) or the app data folder
  of `org.eu.thedoc.zettelnotes.desktop` (macOS), and its Tauri stores in that app data
  folder.
- `tauri-plugin-http` is configured **without** the `cookies` feature on purpose: the cookie
  jar opened under `%LOCALAPPDATA%` at startup and a failure there killed the app.

## Adding a setting

1. Declare the field on `AppConf` in `apps/desktop/src-tauri/src/app/conf.rs` — in the
   struct, in `new()`, **and in `merge_conf`**. Missing from `merge_conf` means the value
   is written and then silently discarded on the next read.
2. Add the item to `apps/desktop/src/router/Setting/settingMap.ts`.
3. If it needs custom UI, add a new item type under `SettingItems/` and a guard in
   `SettingItems/types.ts`.
4. Add the key to all four locale files.

## Known gaps

- **i18n loader coverage**: the tests for lazy locale loading were written against the
  removed locales and were deleted with them. They should be rewritten for the four that
  remain.
- **Encryption formats beyond Zettel Notes' end-to-end mode** are not implemented. The
  Android "password" mode (`.md.aes`) is skipped by decision: its salt is read from the
  app's settings with Android's tolerant base64 decode, which silently drops invalid
  characters (an `@` vanishes), so the same typed salt can produce different key bytes.
  `.md.aes` files are left untouched; OpenPGP is not implemented.
