import { readSubdirectory } from '@/helper/filesys'
import type { IFile } from '@/helper/filesys'

/**
 * Every note in the workspace, kept in a small index.
 *
 * The explorer loads folders lazily, so a note linked by name (`[[livros]]`) is often not in the
 * tree yet. Zettel Notes resolves those names anywhere in the repository, so the app walks the
 * folders once per workspace and answers from the index.
 */

export interface IndexedNote {
  /** Absolute path on disk. */
  path: string
  /** File name with its extension. */
  name: string
  /** File name without the extension, which is what templates call `$filename$`. */
  stem: string
}

const NOTE_EXTENSIONS = ['md', 'markdown', 'mdx', 'txt', 'text', 'org', 'mkd', 'mdwn', 'mdown']

const isNoteName = (name: string): boolean => {
  const dot = name.lastIndexOf('.')
  if (dot <= 0) return false
  return NOTE_EXTENSIONS.includes(name.slice(dot + 1).toLowerCase())
}

let cache: { root: string; notes: IndexedNote[] } | null = null
let inflight: Promise<IndexedNote[]> | null = null

export const resetNoteIndex = (): void => {
  cache = null
  inflight = null
}

const buildIndex = async (root: string): Promise<IndexedNote[]> => {
  const notes: IndexedNote[] = []
  const queue: string[] = [root]
  const visited = new Set<string>([root.toLowerCase()])

  while (queue.length > 0) {
    const folder = queue.shift()!
    let children: IFile[] = []
    try {
      children = await readSubdirectory(folder)
    } catch {
      continue
    }

    for (const child of children) {
      const childPath = child.path
      if (!childPath) continue
      if (child.kind === 'dir') {
        if (!visited.has(childPath.toLowerCase())) {
          visited.add(childPath.toLowerCase())
          queue.push(childPath)
        }
        continue
      }
      if (!isNoteName(child.name)) continue
      const dot = child.name.lastIndexOf('.')
      notes.push({
        path: childPath,
        name: child.name,
        stem: dot > 0 ? child.name.slice(0, dot) : child.name,
      })
    }
  }

  return notes
}

/** Notes of the open workspace. Resolves from the cache after the first pass. */
const workspaceRoot = async (): Promise<string | undefined> => {
  // Loaded on demand: importing the editor store at module scope subscribes it during startup.
  const { default: useEditorStore } = await import('@/stores/useEditorStore')
  return useEditorStore.getState().getRootPath()
}

export const loadWorkspaceNotes = async (): Promise<IndexedNote[]> => {
  const root = await workspaceRoot()
  if (!root) return []
  if (cache && cache.root === root) return cache.notes
  if (inflight) return inflight

  inflight = buildIndex(root)
    .then((notes) => {
      cache = { root, notes }
      return notes
    })
    .finally(() => {
      inflight = null
    })

  return inflight
}

const folderOf = (path: string): string => path.replace(/[\\/][^\\/]*$/, '')

/**
 * Find a note by the ways Zettel Notes links them: name with or without extension, id (leading
 * digits), or a path from the repository root. Ambiguous names prefer the note's own folder.
 */
export const findIndexedNote = (
  target: string,
  notes: readonly IndexedNote[],
  fromPath?: string,
): IndexedNote | undefined => {
  const clean = target.trim().replace(/^\.\//, '')
  if (!clean) return undefined

  if (clean.includes('/')) {
    const wanted = clean.toLowerCase().replace(/^\/+/, '')
    const byPath = notes.find((note) =>
      note.path.replace(/\\/g, '/').toLowerCase().endsWith(`/${wanted}`),
    )
    if (byPath) return byPath
  }

  const wanted = clean.toLowerCase()
  const byName = notes.filter((note) => {
    const name = note.name.toLowerCase()
    return name === wanted || note.stem.toLowerCase() === wanted
  })
  if (byName.length === 1) return byName[0]

  // Zettel Notes derives an id from the file name (default `^\d{6,}`); `[[20260112]]` reaches
  // `20260112 Reunião.md`.
  if (/^\d{6,}$/.test(wanted)) {
    const byId = notes.filter((note) => note.stem.toLowerCase().startsWith(wanted))
    if (byId.length >= 1) return byId[0]
  }

  if (byName.length > 1) {
    const folder = fromPath ? folderOf(fromPath) : ''
    return byName.find((note) => folderOf(note.path) === folder)
  }

  return undefined
}

export interface NoteFolderNode {
  name: string
  /** Absolute path of the folder. */
  path: string
  folders: NoteFolderNode[]
  notes: IndexedNote[]
}

/**
 * Turn the flat index into the folder tree the note picker shows, mirroring the explorer.
 *
 * A flat list of every note was hard to read: the same file name appears in several folders and
 * the structure is lost. Grouping by folder keeps the picker honest about where a link points.
 */
export const buildNoteTree = (root: string, notes: readonly IndexedNote[]): NoteFolderNode => {
  const normalizedRoot = root.replace(/\\/g, '/').replace(/\/+$/, '')
  const tree: NoteFolderNode = { name: '', path: normalizedRoot, folders: [], notes: [] }
  const folders = new Map<string, NoteFolderNode>([[normalizedRoot.toLowerCase(), tree]])

  const ensureFolder = (absolutePath: string): NoteFolderNode => {
    const key = absolutePath.toLowerCase()
    const existing = folders.get(key)
    if (existing) return existing

    const parentPath = absolutePath.replace(/\/[^/]+$/, '')
    const parent = ensureFolder(parentPath)
    const node: NoteFolderNode = {
      name: absolutePath.split('/').pop() ?? absolutePath,
      path: absolutePath,
      folders: [],
      notes: [],
    }
    parent.folders.push(node)
    folders.set(key, node)
    return node
  }

  for (const note of notes) {
    const normalizedPath = note.path.replace(/\\/g, '/')
    const folderPath = normalizedPath.replace(/\/[^/]+$/, '')
    ensureFolder(folderPath).notes.push(note)
  }

  const sortNode = (node: NoteFolderNode): void => {
    node.folders.sort((left, right) => left.name.localeCompare(right.name))
    node.notes.sort((left, right) => left.stem.localeCompare(right.stem))
    node.folders.forEach(sortNode)
  }
  sortNode(tree)

  return tree
}
