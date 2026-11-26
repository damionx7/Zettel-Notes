# Security Policy

## Supported versions

Only the latest release on the [Releases page](https://github.com/damionx7/Zettel-Notes/releases)
gets security fixes. Update through **Settings → Updates** or by downloading it again.

## Reporting a vulnerability

Report it privately through GitHub's
[security advisory form](https://github.com/damionx7/Zettel-Notes/security/advisories/new).
Please don't open a public issue for anything that could expose someone's notes or
passwords. Include the version, the operating system and the steps to reproduce.

## What the encryption protects

- **Encrypted repositories** (gocryptfs v2) protect file contents and file names. They don't
  hide the number of files, their approximate sizes, the folder structure or modification
  times. The password is kept in memory only, while the repository is open.
- **End-to-end encrypted notes** protect the content of each note. File names stay readable.
  The passphrase for automatic encryption is currently saved in the app's settings file in
  plain text, so anyone who can read your user profile or a backup of it can read it.
- Neither scheme protects notes while they are open in the app, or against software running
  as your user.

## Dependency maintenance

Keep dependency overrides (`resolutions` in `package.json`) and `patches/` scoped to their
existing callers, and reassess them when upgrading the parent packages. Run
`yarn test:security-dependencies` after changing overrides or patches; it also runs in CI.

A known follow-up is the Linux GTK stack's dependency on glib 0.18.5, which comes in through
Tauri's WebKitGTK bindings. Review it through compatible Tauri upgrades rather than forcing
major versions across GTK types. This note is not a current vulnerability audit.
