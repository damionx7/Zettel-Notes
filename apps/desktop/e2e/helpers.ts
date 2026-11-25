import assert from 'node:assert/strict'
import { execFile } from 'node:child_process'
import { createHash } from 'node:crypto'
import { appendFile, readFile, writeFile } from 'node:fs/promises'
import { basename, join } from 'node:path'
import { promisify } from 'node:util'
import { browser, $ } from '@wdio/globals'
import { Key } from 'webdriverio'
import { parseReceipt } from './protocol'

export const root = process.env.MARKFLOWY_E2E_ROOT!
const binary = process.env.MARKFLOWY_E2E_BINARY!
const report = process.env.MARKFLOWY_E2E_REPORT!
export const editor = '[data-editor-active="true"] [data-mf-editor-mode]'
export const sha256 = (content: string) => createHash('sha256').update(content).digest('hex')

export interface FileState {
  fileId?: string
  open: boolean
  active: boolean
  ready: boolean
  visible: boolean
  mode?: string
  dirty: boolean
  conflict: boolean
  contentSha256?: string
  error?: string
}

export async function cli<T>(...args: string[]): Promise<T> {
  const { stdout, stderr } = await promisify(execFile)(binary,
    [...args, '--window-id', 'main', '--json', '--timeout', '10000'],
    { env: process.env, timeout: 15_000, maxBuffer: 1024 * 1024 }).catch(async (error: unknown) => {
      await appendFile(join(report, 'cli-receipts.jsonl'), JSON.stringify({
        args, error: String(error),
        stdout: error && typeof error === 'object' && 'stdout' in error ? error.stdout : null,
        stderr: error && typeof error === 'object' && 'stderr' in error ? error.stderr : null,
      }) + '\n')
      throw error
    })
  await appendFile(join(report, 'cli-receipts.jsonl'), JSON.stringify({ args, stdout, stderr }) + '\n')
  const receipt = parseReceipt<T>(stdout)
  assert.equal(receipt.ok, true, `${receipt.code}: ${receipt.message}`)
  return receipt.result
}

export const status = (path: string) => cli<FileState>('file', 'status', path)

export async function waitState(path: string, expected: Partial<FileState>): Promise<FileState> {
  let state: FileState | undefined
  await browser.waitUntil(async () => {
    // status only inspects. file wait/open would actively refresh and mask watcher failures.
    state = await status(path)
    if (state.error) throw new Error(state.error)
    return Object.entries(expected).every(([key, value]) => state![key as keyof FileState] === value)
  }, { timeoutMsg: `File never reached ${JSON.stringify(expected)}: ${path}` }).catch((error) => {
    // Name the fields that never matched, so a CI log alone explains the failure.
    throw new Error(`${error instanceof Error ? error.message : String(error)}; last state: ${JSON.stringify(state)}`)
  })
  return state!
}

export async function fixture(name: string, content: string): Promise<string> {
  const path = join(root, 'files', `${name}.md`)
  await writeFile(path, content)
  await writeFile(join(report, `${name}.original.md`), content)
  return path
}

export async function openFile(path: string, content: string): Promise<FileState> {
  await cli('file', 'open', path, '--wait', 'applied', '--sha256', sha256(content))
  const opened = await waitState(path, { open: true, active: true, ready: true,
    dirty: false, contentSha256: sha256(content) })
  // Zettel Notes opens existing notes in the reading pane; the scenarios edit in the source editor.
  if (opened.mode !== 'sourceCode') await switchMode('sourceCode', path)
  const state = await waitState(path, { open: true, active: true, ready: true,
    dirty: false, contentSha256: sha256(content), mode: 'sourceCode' })
  await $(`${editor} .cm-content`).waitForDisplayed()
  await visibleContent(content)
  return state
}

export async function visibleContent(content: string) {
  await browser.waitUntil(async () => (await $(editor).getText()).includes(content),
    { timeoutMsg: `The visible editor did not render ${JSON.stringify(content)}` })
}

export async function shortcut(key: string) {
  await browser.action('key').down(Key.Command).down(key).up(key).up(Key.Command).perform()
}

export async function replaceDocument(path: string, content: string) {
  await writeFile(join(report, `${basename(path)}.expected-draft.md`), content)
  // Actions include mouse down/up and real coordinates, which CodeMirror uses for its caret.
  await $(`${editor} .cm-content`).click({ x: 1, y: 1 })
  await browser.waitUntil(
    () =>
      browser.execute(() => {
        const content = document.querySelector('[data-editor-active="true"] .cm-content')
        return !!content && !!document.activeElement && content.contains(document.activeElement)
      }),
    { timeoutMsg: 'The active source editor did not receive keyboard focus' },
  )
  await shortcut('a')
  await browser.keys(Key.Backspace)
  // The embedded driver's character keystrokes reach keydown handlers but never insert text
  // into WKWebView's contenteditable, so CodeMirror sees nothing. Insert the text through the
  // browser's own editing command instead: CodeMirror reads it from the DOM like typed input.
  await browser.execute((text) => {
    document.execCommand('insertText', false, text)
  }, content)
  await waitState(path, { dirty: true, contentSha256: sha256(content) })
  await visibleContent(content)
}

export async function save(path: string, content: string) {
  await shortcut('s')
  await waitState(path, { dirty: false, contentSha256: sha256(content) })
  assert.equal(await readFile(path, 'utf8'), content)
}

export async function switchMode(mode: 'sourceCode' | 'preview', path: string) {
  // The toolbar's viewer/editor toggle is labelled with the mode it switches to.
  const labels = { sourceCode: 'Source Code', preview: 'Preview' }
  const toggle = $(`button[aria-pressed][aria-label="${labels[mode]}"]`)
  await toggle.waitForClickable()
  await toggle.click()
  await waitState(path, { mode, ready: true, active: true })
}

export async function selectTab(fileId: string) {
  await $(`[data-mf-editor-tab-id="${fileId}"]`).click()
}

export async function persistedDraft(path: string, content: string) {
  await browser.waitUntil(() => browser.execute(async (filePath, expected) => {
    const drafts = await window.__TAURI__.core.invoke<{
      document: { path?: string }; content: string
    }[]>('local_history', { operation: 'drafts', payload: { workspace: '' } })
    return drafts.some((draft) => draft.document.path === filePath && draft.content === expected)
  }, path, content), { timeoutMsg: 'The exact unsaved draft was not persisted in native SQLite' })
}

export function installChecks() {
  before(async () => {
    // Match the CLI target and avoid rediscovering the active native window before
    // every element command. The embedded driver uses Tauri labels as handles.
    await browser.switchToWindow('main')
    await browser.waitUntil(() => browser.execute(() => !!window.__MARKFLOWY_E2E__ && !!window.__TAURI__),
      { timeout: 60_000, timeoutMsg: 'Expected the isolated native E2E binary' })
    await browser.waitUntil(async () => {
      const runtime = await readFile(join(root, 'runtime', 'runtime.json'), 'utf8')
        .then(JSON.parse).catch(() => null)
      return runtime?.windows?.some((window: { id: string }) => window.id === 'main') &&
        runtime?.commands?.length > 0
    }, { timeout: 60_000, timeoutMsg: 'Native app/CLI startup did not complete' })
  })
  afterEach(async () => {
    const errors = await browser.execute(() => window.__MARKFLOWY_E2E__?.errors)
    assert.deepEqual(errors, [], 'Unhandled frontend exceptions')
  })
}
