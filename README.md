# Zettel Notes for desktop

A Markdown note editor for Windows, macOS and Linux that opens the notes written by the
[Zettel Notes](https://zettelnotes.com) Android app, including encrypted ones.

It is a fork of [MarkFlowy](https://github.com/drl990114/MarkFlowy), by way of
[WinZettel](https://github.com/zekabra/WinZettel). See [FORK.md](https://github.com/damionx7/Zettel-Notes/blob/main/FORK.md) for everything
that differs from MarkFlowy.

## Download

Get the latest version from the [Releases page](https://github.com/damionx7/Zettel-Notes/releases).

| System | File |
| --- | --- |
| Windows (64-bit) | `Zettel-Notes_v<version>_x64-setup.exe` or `.msi`, or the `_portable.zip` that needs no install |
| macOS (Apple Silicon and Intel) | `Zettel-Notes_v<version>_macOS_universal.dmg` |
| Linux | `.deb`, `.rpm` or `.AppImage` |

The macOS app is not signed with an Apple Developer ID yet. The first time you open it,
right-click the app and choose **Open**.

Updates are checked only when you ask: **Settings → Updates → Check for updates**.

## What it does with your Zettel Notes

- **Notes folders.** Open the same folder your phone syncs, and edit notes in a source pane,
  a rendered preview, or both side by side.
- **Encrypted repositories.** A notes folder encrypted by the Android app (gocryptfs) opens
  here with its password, and a repository created here opens on the phone. The password
  is kept in memory only, and closing the folder or the app locks it again.
- **Encrypted notes.** Notes using the Android app's "End-to-end encryption" can be
  encrypted and decrypted from the file menu.
- **Attachments.** Files are linked relative to the notes folder, so the folder stays
  portable between devices.

The Android app's "Password" encryption mode (`.md.aes` files) is not supported. Those
files are left untouched.

## Languages

The app is in English by default. Spanish, French and Brazilian Portuguese are available
under **Settings → General → Language**.

## Building from source

You need Node.js (see `.node-version`), Corepack and the Rust toolchain. On Linux you also
need the WebKitGTK development packages.

```sh
corepack enable
yarn install
yarn build
yarn dev:desktop
```

[WORKFLOW.md](https://github.com/damionx7/Zettel-Notes/blob/main/WORKFLOW.md) explains the tests, checks and release process.

## License

[GNU Affero General Public License v3.0](https://github.com/damionx7/Zettel-Notes/blob/main/LICENSE), like MarkFlowy.
Copyright and upstream credits are in [NOTICE](https://github.com/damionx7/Zettel-Notes/blob/main/NOTICE).
