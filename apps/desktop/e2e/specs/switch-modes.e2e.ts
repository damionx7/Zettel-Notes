import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import { fixture, installChecks, openFile, replaceDocument, save, sha256, switchMode,
  visibleContent, waitState } from '../helpers'

describe('content across editor modes', () => {
  installChecks()
  it('saves the edited content before switching source and preview', async () => {
    const path = await fixture('switch-modes', 'Saved mode baseline')
    const draft = 'Unsaved content survives every mode'
    await openFile(path, 'Saved mode baseline')
    await replaceDocument(path, draft)
    // Leave source first: re-selecting the current mode is a no-op and saves nothing.
    for (const mode of ['preview', 'sourceCode'] as const) {
      await switchMode(mode, path)
      // Markdown mode switches save before replacing the mounted document.
      await waitState(path, { dirty: false, contentSha256: sha256(draft) })
      await visibleContent(draft)
      assert.equal(await readFile(path, 'utf8'), draft)
    }
    await save(path, draft)
  })
})
