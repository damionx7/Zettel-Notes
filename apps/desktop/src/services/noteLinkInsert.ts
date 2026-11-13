import { invoke } from '@tauri-apps/api/core'
import { FileResultCode } from '@/helper/filesys'
import { getFileObject } from '@/helper/files'
import { titleFromMarkdown } from '@/helper/noteTitle'
import {
  applyNoteLinkTemplate,
  applySelectionLabel,
  noteFacts,
  normalizeNoteLinkStyle,
  styleHasLabel,
} from '@/helper/noteLink'
import { toast } from 'zens'
import { t } from '@/i18n'
import type { IndexedNote } from './noteIndex'

/**
 * Read a note's text the way the editor does.
 *
 * `get_file_snapshot` routes through the repository volume, so an encrypted note yields its
 * plaintext; `get_file_content` reads the file from disk and would hand back ciphertext, which
 * would silently fall back to the file name as the title.
 */
const readNoteText = async (path: string): Promise<string> => {
  try {
    const snapshot = await invoke<{ code: string; content?: string }>('get_file_snapshot', {
      filePath: path,
    })
    if (snapshot.code === FileResultCode.Success && typeof snapshot.content === 'string') {
      return snapshot.content
    }
  } catch {
    // fall through to the plain reader
  }

  try {
    const result = await invoke<{ code: string; content: string }>('get_file_content', {
      filePath: path,
    })
    return result.code === FileResultCode.Success ? result.content : ''
  } catch {
    return ''
  }
}

const repoPathOf = (absolutePath: string, rootPath: string): string => {
  const normalizedRoot = rootPath.replace(/\\/g, '/').replace(/\/+$/, '')
  const normalizedPath = absolutePath.replace(/\\/g, '/')
  if (!normalizedRoot) return normalizedPath
  return normalizedPath.startsWith(`${normalizedRoot}/`)
    ? normalizedPath.slice(normalizedRoot.length + 1)
    : normalizedPath
}

/** The Markdown a link to `target` should be, with the owner's style and options. */
export const buildNoteLinkMarkdown = async (
  target: IndexedNote,
  fromFilePath: string | undefined,
): Promise<string> => {
  const [{ default: useAppSettingStore }, { default: useEditorStore }] = await Promise.all([
    import('@/stores/useAppSettingStore'),
    import('@/stores/useEditorStore'),
  ])
  const settingData = useAppSettingStore.getState().settingData
  const style = normalizeNoteLinkStyle(settingData.note_link_style)
  const absolute = Boolean(settingData.absolute_note_links)

  const rootPath = useEditorStore.getState().getRootPath() ?? ''
  const content = await readNoteText(target.path)
  const facts = noteFacts({
    fromRepoPath: fromFilePath ? repoPathOf(fromFilePath, rootPath) : '',
    toRepoPath: repoPathOf(target.path, rootPath),
    title: titleFromMarkdown(content, target.name),
  })

  return applyNoteLinkTemplate(style, facts, { absolute })
}

/**
 * Insert a link to another note at the caret of the source editor.
 *
 * Returns false when the note is open for reading only: there is no editable surface to write
 * into, and silently doing nothing is better than touching the file.
 */
export const insertNoteLink = async (
  fileId: string | undefined,
  target: IndexedNote,
): Promise<boolean> => {
  // Loaded on demand: the editor engine must stay out of the startup import graph.
  const { getSourceCodeEditor } = await import('@/components/EditorArea/sourceCodeEditorRegistry')
  const editor = fileId ? getSourceCodeEditor(fileId) : undefined
  if (!editor) return false

  const fromFilePath = fileId ? getFileObject(fileId)?.path : undefined
  const built = await buildNoteLinkMarkdown(target, fromFilePath)
  if (!built) return false

  const { state } = editor.cm
  const selection = state.selection.main
  const selected = selection.from !== selection.to ? state.sliceDoc(selection.from, selection.to) : ''

  // A style without a label cannot take the selected text without becoming another style, so
  // the action is refused instead of silently rewriting the owner's choice.
  if (selected) {
    const { default: useAppSettingStore } = await import('@/stores/useAppSettingStore')
    const hasLabel = styleHasLabel(useAppSettingStore.getState().settingData.note_link_style)
    if (!hasLabel) {
      toast.error(t('note_link_insert.selection_needs_label'))
      return false
    }
  }

  const markdown = selected ? applySelectionLabel(built, selected) : built
  editor.cm.dispatch({
    changes: { from: selection.from, to: selection.to, insert: markdown },
    selection: { anchor: selection.from + markdown.length },
    scrollIntoView: true,
  })
  editor.cm.focus()
  return true
}
