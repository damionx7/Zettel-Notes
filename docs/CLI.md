# Command line and agent skill

The app installs a `zettel-notes` command-line tool. It lets scripts and AI agents open,
save and export notes in the running app, and get a receipt that confirms the result. The
repository also ships an agent [skill](../skills/zettel-notes/SKILL.md) for it: copy the whole
`skills/zettel-notes` folder into your agent's skills folder. The skill works through the local
CLI only; it needs no model service and opens no network port.

Run `zettel-notes status` first and check that it reports `cliProtocolVersion: 1`. The protocol
needs a desktop version that includes it; changes in this repository don't update an installed
app.

```sh
zettel-notes window list
zettel-notes file open "/path/report.md" --preview --window-id main --wait applied
zettel-notes file status "/path/report.md" --window-id main
zettel-notes file wait "/path/report.md" --window-id main --sha256 <content-sha256>
zettel-notes file export "/path/report.md" --window-id main --format html --output "/path/report.html"
```

Replace the paths and window ID with the real ones. `file open` can start the app; every other
command needs it running. A window ID that doesn't exist is an error: the CLI never quietly
uses another window.

`file open` waits for `applied` by default: it reads the file on disk when you call it, goes
through the app's external-change handling, compares the SHA-256 of the editor's content, and
checks again after one render. Unsaved edits are protected against conflicts. Use
`--wait visible` when you only need the file to be on screen; that doesn't prove a particular
version was applied. `file wait` doesn't switch tabs, so reopen a hidden file first.

Export takes an explicit source and destination and supports HTML, Markdown, text, JSON and
JPG. The output folder must exist, and existing files are not replaced unless you pass
`--overwrite`. The output is written to a temporary file, flushed and committed, then read back
and verified; the receipt gives the real path, size and SHA-256. The source file is never
overwritten. PDF still goes through the system print dialog, so the CLI can't choose or confirm
a PDF destination.

Each receipt has `requestId`, `ok`, `code`, `message` and `result`, and failures exit with a
non-zero status. To confirm a file is displayed, check `ready`, `visible` and `applied`; to
confirm an export, check `code: "export_completed"` and `result.output`. `command execute` only
confirms that a GUI command was dispatched, not that an asynchronous save or export finished.

The default timeout is 30 seconds; `--timeout` accepts 1 to 300000 milliseconds. A timeout means
the outcome is unknown, not that the operation was undone: check the file and the output before
writing again. The [CLI protocol reference](../skills/zettel-notes/references/cli.md) lists every
command, how digests are computed, the receipt fields and the error codes.
