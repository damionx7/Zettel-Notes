import { desktopLightTheme } from '@zettel-notes/theme'
import { act, cleanup, fireEvent, render, screen } from '@testing-library/react'
import { useState, type ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { toast } from 'zens'
import type * as Zens from 'zens'
import {
  getFileTreeActionNodes,
  getFileTreeClickIntent,
} from '../../../../../packages/interface/src/components/FileTree/selection'
import FileTree, {
  fileTreeHandler,
  type FileTreeProps,
} from '../../../../../packages/interface/src/components/FileTree/FileTree'
import { SimpleTree } from '../../../../../packages/interface/src/components/FileTree/types'
import {
  FileSystemContext,
  type FileSystemContextValue,
} from '../../../../../packages/interface/src/contexts/FileSystemContext'
import { FileTreeContext } from '../../../../../packages/interface/src/contexts/FileTreeContext'
import type { IFile } from '../../../../../packages/interface/src/types/file'

vi.mock('@zettel-notes/i18n', () => ({ useTranslation: () => ({ t: (key: string) => key }) }))
vi.mock('zens', async (importOriginal) => ({
  ...(await importOriginal<typeof Zens>()),
  Input: (await import('../../../../../packages/zens/src/Input')).default,
  toast: { success: vi.fn(), error: vi.fn() },
}))

const protectFileIds = vi.fn()
const protectPaths = vi.fn()
const fileSystem: FileSystemContextValue = {
  runFileMutation: vi.fn((operation) => operation({ protectFileIds, protectPaths })),
  readDirectory: vi.fn(),
  readSubdirectory: vi.fn(),
  writeFile: vi.fn(),
  deleteFile: vi.fn(),
  deleteFolder: vi.fn(),
  trashFile: vi.fn(),
  isDir: vi.fn(),
  fileExists: vi.fn(),
  pathsReferToSameDirectoryEntry: vi.fn(),
  moveFilesToTargetFolder: vi.fn(),
  pathJoin: vi.fn(),
  getPathName: vi.fn(),
  getFileContent: vi.fn(),
  getMdRelativePath: vi.fn(),
  createFolder: vi.fn(),
  renameFile: vi.fn(),
  copyFile: vi.fn(),
}
const onShowConfirm = vi.fn<FileTreeProps['onShowConfirm']>()
const onOpen = vi.fn<NonNullable<FileTreeProps['onOpen']>>()
const onRequestDelete = vi.fn<NonNullable<FileTreeProps['onRequestDelete']>>()
const onShowContextMenu = vi.fn<FileTreeProps['onShowContextMenu']>()
const deleteNode = vi.fn<(file: IFile) => Promise<void>>()
const trashNode = vi.fn<(file: IFile) => Promise<void>>()
const files = new Map<string, IFile>()
const deleteCache = vi.fn((path: string) => {
  for (const [id, entry] of files) {
    if (entry.path === path || entry.path?.startsWith(`${path}/`)) files.delete(id)
  }
})
let data: IFile[]
let replaceData: (next: IFile[]) => void

function indexFiles(nodes: IFile[]) {
  for (const entry of nodes) {
    files.set(entry.id, entry)
    if (entry.children) indexFiles(entry.children)
  }
}

function file(id = 'source', parent = '/workspace'): IFile {
  return { id, name: `${id}.md`, path: `${parent}/${id}.md`, kind: 'file', ext: 'md' }
}

function FillFlexParent({ children }: {
  children: (dimensions: { width: number; height: number }) => ReactNode
}) {
  return children({ width: 340, height: 400 })
}

function Harness({ initial, legacy = false, stickyRoot = false, activeId }: {
  initial: IFile[]
  legacy?: boolean
  stickyRoot?: boolean
  activeId?: string
}) {
  const [state, setState] = useState(initial)
  data = state
  replaceData = (next) => {
    indexFiles(next)
    setState(next)
  }
  return (
    <ThemeProvider theme={desktopLightTheme}>
      <FileSystemContext.Provider value={fileSystem}>
        <FileTreeContext.Provider value={{
          activeId,
          folderData: state,
          setFolderData: replaceData,
          setFolderDataPure: replaceData,
          deleteNode,
          trashNode,
          getRootPath: () => state[0]?.path,
          refreshFolder: vi.fn(),
        }}>
          <FileTree
            data={state}
            fillFlexParentComponent={FillFlexParent}
            getFileObject={(id) => files.get(id)}
            getFileObjectByPath={(path) => [...files.values()].find((entry) => entry.path === path)}
            getFileIdsByPathPrefix={(path) => [...files.values()]
              .filter((entry) => entry.path === path || entry.path?.startsWith(`${path}/`))
              .map((entry) => entry.id)}
            deleteFileObjectsByPathPrefix={deleteCache}
            onSelect={vi.fn()}
            onShowConfirm={onShowConfirm}
            onRequestDelete={legacy ? undefined : onRequestDelete}
            onShowContextMenu={onShowContextMenu}
            stickyRoot={stickyRoot}
            onOpen={onOpen}
          />
        </FileTreeContext.Provider>
      </FileSystemContext.Provider>
    </ThemeProvider>
  )
}

function mount(
  children: IFile[],
  options: { legacy?: boolean; stickyRoot?: boolean; activeId?: string } = {},
) {
  const initial: IFile[] = [{
    id: 'root', name: 'Workspace', path: '/workspace', kind: 'dir', children,
  }]
  indexFiles(initial)
  return render(<Harness initial={initial} {...options} />)
}


function folder(id: string, children: IFile[] = []): IFile {
  return { id, name: id, path: `/workspace/${id}`, kind: 'dir', children }
}

function highlightedNames() {
  return [...document.querySelectorAll('[data-mf-file-tree-selected]')]
    .map((element) => element.textContent)
}

function selectedNames() {
  return [...document.querySelectorAll('[role="treeitem"][aria-selected="true"]')]
    .map((element) => element.textContent)
}

beforeEach(() => {
  vi.clearAllMocks()
  files.clear()
  deleteNode.mockReset().mockResolvedValue(undefined)
  trashNode.mockReset().mockResolvedValue(undefined)
  vi.mocked(fileSystem.runFileMutation).mockReset().mockImplementation((operation) =>
    operation({ protectFileIds, protectPaths }),
  )
  vi.mocked(fileSystem.readSubdirectory).mockResolvedValue([])
  vi.mocked(fileSystem.fileExists).mockResolvedValue(false)
  vi.mocked(fileSystem.pathJoin).mockImplementation(async (parent, name) => `${parent}/${name}`)
  vi.mocked(fileSystem.moveFilesToTargetFolder).mockImplementation(async ({ files: paths, targetFolder }) =>
    paths.map((oldPath) => ({
      old_path: oldPath,
      new_path: `${targetFolder}/${oldPath.split('/').pop()}`,
      is_folder: false,
      children: null,
    })),
  )
})

afterEach(() => {
  cleanup()
  vi.restoreAllMocks()
})

describe('file tree click intent', () => {
  it('uses Cmd on macOS and Ctrl elsewhere to toggle, and Shift for a range', () => {
    const none = { shiftKey: false, ctrlKey: false, metaKey: false }
    expect(getFileTreeClickIntent(none, true)).toBe('single')
    expect(getFileTreeClickIntent({ ...none, metaKey: true }, true)).toBe('toggle')
    // Ctrl+click is the context menu on macOS.
    expect(getFileTreeClickIntent({ ...none, ctrlKey: true }, true)).toBe('single')
    expect(getFileTreeClickIntent({ ...none, ctrlKey: true }, false)).toBe('toggle')
    expect(getFileTreeClickIntent({ ...none, shiftKey: true }, false)).toBe('range')
    expect(getFileTreeClickIntent({ ...none, shiftKey: true, ctrlKey: true }, false)).toBe('range')
  })
})

describe('FileTree multi-selection', () => {
  it('toggles rows with Ctrl and highlights the selection without opening notes', async () => {
    mount([file('a'), file('b'), file('c')], { activeId: 'a' })
    await screen.findByText('a.md')
    expect(selectedNames()).toEqual(['a.md'])

    fireEvent.click(screen.getByText('c.md'), { ctrlKey: true })
    expect(selectedNames()).toEqual(['a.md', 'c.md'])
    expect(highlightedNames()).toEqual(['a.md', 'c.md'])
    expect(onOpen).not.toHaveBeenCalled()

    // Ctrl+click on a selected row removes it, but never empties the selection.
    fireEvent.click(screen.getByText('a.md'), { ctrlKey: true })
    expect(selectedNames()).toEqual(['c.md'])
    fireEvent.click(screen.getByText('c.md'), { ctrlKey: true })
    expect(selectedNames()).toEqual(['c.md'])

    expect(highlightedNames()).toEqual(['c.md'])

    // A plain click goes back to one selected, opened note.
    fireEvent.click(screen.getByText('b.md'))
    expect(selectedNames()).toEqual(['b.md'])
    expect(onOpen).toHaveBeenCalledExactlyOnceWith(expect.objectContaining({ id: 'b' }), { mode: 'permanent' })
  })

  it('extends a range from the open note with Shift', async () => {
    mount([file('a'), file('b'), file('c'), file('d')], { activeId: 'b' })
    await screen.findByText('a.md')

    fireEvent.click(screen.getByText('d.md'), { shiftKey: true })
    expect(selectedNames()).toEqual(['b.md', 'c.md', 'd.md'])
    // A second Shift+click moves the end of the range, keeping the anchor.
    fireEvent.click(screen.getByText('a.md'), { shiftKey: true })
    expect(selectedNames()).toEqual(['a.md', 'b.md'])
    expect(onOpen).not.toHaveBeenCalled()
  })

  it('selects a folder with a modified click instead of opening it', async () => {
    mount([folder('docs', [file('inner', '/workspace/docs')]), file('a')], { activeId: 'a' })
    await screen.findByText('docs')

    fireEvent.click(screen.getByText('docs'), { ctrlKey: true })
    expect(selectedNames()).toEqual(['docs', 'a.md'])
    expect(screen.queryByText('inner.md')).toBeNull()
  })

  it.each(['permanent', 'trash'] as const)('offers %s for the whole selection and removes every entry', async (mode) => {
    mount([file('a'), file('b'), file('c')], { activeId: 'a' })
    await screen.findByText('a.md')
    fireEvent.click(screen.getByText('c.md'), { ctrlKey: true })

    fireEvent.contextMenu(screen.getByText('c.md'), { clientX: 40, clientY: 20 })
    const items = onShowContextMenu.mock.lastCall![0].items
    expect(items.map((item) => item.value)).toEqual(['delete_selected', 'trash_selected'])
    act(() => items[mode === 'permanent' ? 0 : 1].handler!())

    const request = onRequestDelete.mock.lastCall![0]
    expect(request.mode).toBe(mode)
    expect(request.files?.map((entry) => entry.name)).toEqual(['a.md', 'c.md'])
    expect(request.file.name).toBe('a.md')

    await act(async () => request.onConfirm())
    const operation = mode === 'permanent' ? deleteNode : trashNode
    expect(operation.mock.calls.map(([entry]) => entry.id)).toEqual(['a', 'c'])
    expect(protectFileIds).toHaveBeenCalledWith(['a', 'c'])
    expect(new SimpleTree(data).find('a')).toBeNull()
    expect(new SimpleTree(data).find('c')).toBeNull()
    expect(new SimpleTree(data).find('b')).toBeTruthy()
  })

  it('keeps entries the backend failed to remove and reports the error', async () => {
    mount([file('a'), file('b'), file('c')], { activeId: 'a' })
    await screen.findByText('a.md')
    fireEvent.click(screen.getByText('c.md'), { shiftKey: true })
    trashNode.mockResolvedValueOnce(undefined).mockRejectedValueOnce(new Error('locked'))

    fireEvent.contextMenu(screen.getByText('b.md'), { clientX: 40, clientY: 20 })
    act(() => onShowContextMenu.mock.lastCall![0].items[1].handler!())
    await act(async () => onRequestDelete.mock.lastCall![0].onConfirm())

    expect(trashNode).toHaveBeenCalledTimes(2)
    expect(new SimpleTree(data).find('a')).toBeNull()
    expect(new SimpleTree(data).find('b')).toBeTruthy()
    expect(new SimpleTree(data).find('c')).toBeTruthy()
    expect(toast.error).toHaveBeenCalledWith('locked')
  })

  it('shows the single-entry menu when right-clicking outside the selection', async () => {
    mount([file('a'), file('b'), file('c')], { activeId: 'a' })
    await screen.findByText('a.md')
    fireEvent.click(screen.getByText('b.md'), { ctrlKey: true })

    fireEvent.contextMenu(screen.getByText('c.md'), { clientX: 40, clientY: 20 })
    const values = onShowContextMenu.mock.lastCall![0].items.map((item) => item.value)
    expect(values).toContain('delete_file')
    expect(values).not.toContain('delete_selected')
  })

  it('leaves the workspace root and entries inside selected folders out of bulk actions', async () => {
    const inner = file('inner', '/workspace/docs')
    mount([folder('docs', [inner]), file('a')])
    await screen.findByText('docs')
    const api = fileTreeHandler.rootTree!
    act(() => api.open('docs'))
    await screen.findByText('inner.md')

    const nodes = ['root', 'docs', 'inner', 'a'].map((id) => api.get(id)!)
    expect(getFileTreeActionNodes(nodes, 'root').map((node) => node.id)).toEqual(['docs', 'a'])
  })

  it('moves every dragged entry in one confirmed move', async () => {
    mount([folder('target'), file('a'), file('b')])
    await screen.findByText('a.md')
    const api = fileTreeHandler.rootTree!

    await act(async () => {
      await api.props.onMove?.({
        dragIds: ['a', 'b'],
        dragNodes: [api.get('a')!, api.get('b')!],
        parentId: 'target',
        parentNode: api.get('target'),
        index: 0,
      })
    })
    expect(onShowConfirm.mock.lastCall![0].title).toBe('Move 2 items?')
    await act(async () => onShowConfirm.mock.lastCall![0].onConfirm())
    await act(async () => {
      await vi.mocked(fileSystem.runFileMutation).mock.results.at(-1)?.value
    })

    expect(fileSystem.moveFilesToTargetFolder).toHaveBeenCalledWith({
      files: ['/workspace/a.md', '/workspace/b.md'],
      targetFolder: '/workspace/target',
      replaceExist: false,
    })
    expect(new SimpleTree(data).find('target')?.data.children?.map((child) => child.id)).toEqual(['a', 'b'])
  })
})
