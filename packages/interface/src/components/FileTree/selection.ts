import type { NodeApi } from 'react-arborist'
import type { IFile } from '../../types/file'

export type FileTreeClickIntent = 'single' | 'toggle' | 'range'

type ModifierEvent = Pick<MouseEvent, 'shiftKey' | 'ctrlKey' | 'metaKey'>

export function isApplePlatform(
  nav: { platform?: string; userAgent?: string } | undefined =
    typeof navigator === 'undefined' ? undefined : navigator,
) {
  const value = `${nav?.platform ?? ''} ${nav?.userAgent ?? ''}`
  return /Mac|iPhone|iPad|iPod/i.test(value)
}

/**
 * Maps a row click to the file-manager convention: Shift extends a range from the anchor,
 * and Cmd on macOS (Ctrl elsewhere) adds or removes one row. On macOS Ctrl+click opens the
 * context menu, so it never toggles.
 */
export function getFileTreeClickIntent(
  event: ModifierEvent,
  apple: boolean = isApplePlatform(),
): FileTreeClickIntent {
  if (event.shiftKey) return 'range'
  if (apple ? event.metaKey : event.ctrlKey || event.metaKey) return 'toggle'
  return 'single'
}

const PENDING_KINDS = new Set([
  'pending_new_file',
  'pending_new_folder',
  'pending_edit_folder',
  'pending_edit_file',
])

/**
 * Applies a modified click to the tree selection. Returns false for a plain click so the
 * caller keeps its usual select-and-open behavior.
 */
export function applyFileTreeClickSelection(
  node: NodeApi<IFile>,
  intent: FileTreeClickIntent,
): boolean {
  if (intent === 'single') return false
  const tree = node.tree
  // A range needs a visible anchor; without one (nothing selected yet, or the anchor sits in
  // a collapsed folder) the click starts a new selection at this row instead.
  if (intent === 'range' && tree.get(tree.state.nodes.selection.anchor)) {
    node.selectContiguous()
    return true
  }
  // A toggle never empties the selection: the last selected row stays selected.
  if (!node.isSelected) node.selectMulti()
  else if (!tree.hasOneSelection) node.deselect()
  return true
}

/**
 * The entries a bulk action should touch: selected rows other than the workspace root and
 * inline drafts, with any row whose ancestor is also selected left out, since acting on the
 * folder already covers it. Keeps the tree's visual order.
 */
export function getFileTreeActionNodes(
  nodes: readonly NodeApi<IFile>[],
  rootId: string | undefined,
): NodeApi<IFile>[] {
  const candidates = nodes.filter(
    (node) => node.id !== rootId && !!node.data.path && !PENDING_KINDS.has(node.data.kind),
  )
  const ids = new Set(candidates.map((node) => node.id))
  return candidates
    .filter((node) => {
      for (let parent = node.parent; parent; parent = parent.parent) {
        if (ids.has(parent.id)) return false
      }
      return true
    })
    .sort((left, right) => (left.rowIndex ?? 0) - (right.rowIndex ?? 0))
}
