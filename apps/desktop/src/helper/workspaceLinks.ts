import type { IFile } from '@/helper/filesys'
import { getFolderPathFromPath } from '@/helper/filesys'
import useEditorStore from '@/stores/useEditorStore'

/**
 * Resolve the targets Zettel Notes writes inside wiki links.
 *
 * The app links notes by name (`[[livros]]`), by name with extension (`[[livros.md]]`) or by a
 * path from the repository root (`[[folder/note.md]]`). Only folders that have been opened are
 * present in the tree, which is why an unknown name falls back to the raw target: the link stays
 * clickable and the resolver at click time has another chance.
 */

const toPosix = (value: string) => value.replace(/\\/g, '/')

const collectFiles = (nodes: readonly IFile[] | undefined, output: IFile[]): IFile[] => {
  for (const node of nodes ?? []) {
    if (node.kind === 'dir') collectFiles(node.children, output)
    else output.push(node)
  }
  return output
}

const encodePath = (value: string) => value.replace(/ /g, '%20')

const relativeFromNote = (notePath: string | undefined, targetPath: string): string => {
  if (!notePath) return encodePath(targetPath)

  const from = toPosix(getFolderPathFromPath(notePath) ?? '').split('/').filter(Boolean)
  const to = toPosix(targetPath).split('/').filter(Boolean)

  let common = 0
  while (common < from.length && common < to.length && from[common] === to[common]) common += 1

  const up = new Array(from.length - common).fill('..')
  return encodePath([...up, ...to.slice(common)].join('/'))
}

const baseName = (value: string) => value.split('/').pop() ?? value

const withoutExtension = (value: string) => {
  const dot = value.lastIndexOf('.')
  return dot > 0 ? value.slice(0, dot) : value
}

/** Every file known to the tree, matched by name, then by path. */
export const findWorkspaceFile = (
  target: string,
  notePath?: string,
): IFile | undefined => {
  try {
    return findWorkspaceFileUnsafe(target, notePath)
  } catch {
    return undefined
  }
}

const findWorkspaceFileUnsafe = (target: string, notePath?: string): IFile | undefined => {
  const clean = target.trim().replace(/^\.\//, '')
  if (!clean) return undefined

  const files = collectFiles(useEditorStore.getState().folderData ?? [], [])
  const wanted = clean.toLowerCase()

  if (clean.includes('/')) {
    const pathWanted = toPosix(clean).toLowerCase()
    const byPath = files.find((file) => toPosix(file.path ?? '').toLowerCase().endsWith(`/${pathWanted}`))
    if (byPath) return byPath
  }

  const byName = files.filter((file) => {
    const name = baseName(toPosix(file.path ?? '')).toLowerCase()
    // "livros" and "livros.md" both point at livros.md; names with dots inside ("nome.com.pontos")
    // must not be cut at the first dot.
    const sameNameWithExtension =
      withoutExtension(name) === withoutExtension(wanted) && !wanted.includes('.')

    return name === wanted || withoutExtension(name) === wanted || sameNameWithExtension
  })

  if (byName.length === 1) return byName[0]

  // Several notes share the name: prefer one next to the note being read, like the app does when
  // it needs to break a tie.
  const folder = notePath ? toPosix(getFolderPathFromPath(notePath) ?? '') : ''
  const sameFolder = byName.find(
    (file) => toPosix(getFolderPathFromPath(file.path ?? '') ?? '') === folder,
  )
  return sameFolder
}

/**
 * What the reading pane should show for a wiki target: a path relative to the note, or the raw
 * target when the note is not in the tree yet.
 */
export const resolveWikiTarget = (target: string, notePath?: string): string => {
  const file = findWorkspaceFile(target, notePath)
  if (!file?.path) return target
  return relativeFromNote(notePath, file.path)
}

/** Resolver handed to `expandWikiLinks`, bound to the note that contains the links. */
export const createWikiResolver =
  (notePath?: string) =>
  (target: string): string =>
    resolveWikiTarget(target, notePath)
