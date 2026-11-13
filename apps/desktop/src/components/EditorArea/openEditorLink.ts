import { getFileObject, getFileObjectByPath } from '@/helper/files'
import { createFile, getFileNameFromPath } from '@/helper/filesys'
import { logger } from '@/helper/logger'
import { localResourcePath } from '@/helper/localResourcePath'
import {
  beginLinkNavigation,
  isCurrentLinkNavigation,
} from './linkNavigation'
import useEditorStore from '@/stores/useEditorStore'
import { findWorkspaceFile } from '@/helper/workspaceLinks'
import { findIndexedNote, loadWorkspaceNotes } from '@/services/noteIndex'
import { invoke } from '@tauri-apps/api/core'
import { dirname, isAbsolute, resolve } from '@tauri-apps/api/path'
import { openUrl } from '@tauri-apps/plugin-opener'

const PROTOCOL_PATTERN = /^[a-z][a-z\d+.-]*:/i
const WINDOWS_ABSOLUTE_PATH_PATTERN = /^[a-z]:[\\/]/i

export function isLocalFileLink(href: string): boolean {
  const target = href.trim()
  if (!target || target.startsWith('#') || target.startsWith('?') || target.startsWith('//')) {
    return false
  }

  if (WINDOWS_ABSOLUTE_PATH_PATTERN.test(target) || target.startsWith('\\\\')) {
    return true
  }

  return target.toLowerCase().startsWith('file:') || !PROTOCOL_PATTERN.test(target)
}

async function fileExists(path: string): Promise<boolean> {
  try {
    return await invoke<boolean>('file_exists', { filePath: path })
  } catch (error) {
    logger.warn('Failed to inspect a local file link:', { error, path })
    return false
  }
}

export async function resolveLocalFileLinkPath(
  href: string,
  sourceFilePath?: string,
  workspaceRootPath?: string,
): Promise<string | undefined> {
  if (!isLocalFileLink(href)) return undefined

  const linkPath = localResourcePath(href)
  if (!linkPath) return undefined

  try {
    // Workspace-relative attachment links start with a slash ("/.assets/guide.pdf")
    // so they stay valid wherever the document sits. They are rooted, so the
    // isAbsolute branch below would resolve them against the drive instead of the
    // workspace; try the workspace root first and keep the old fallback.
    if (workspaceRootPath && linkPath.startsWith('/') && !linkPath.startsWith('//')) {
      const workspaceCandidate = await resolve(workspaceRootPath, linkPath.replace(/^\/+/, ''))
      if (await fileExists(workspaceCandidate)) return workspaceCandidate
    }

    if (await isAbsolute(linkPath)) {
      return await resolve(linkPath)
    }

    const basePath = sourceFilePath ? await dirname(sourceFilePath) : workspaceRootPath
    if (!basePath) return undefined

    const relativeCandidate = await resolve(basePath, linkPath)

    // A name without a path ("livros", "livros.md") is a note linked by name, which Zettel Notes
    // resolves anywhere in the repository. Paths keep the old behaviour untouched.
    if (!linkPath.includes('/')) {
      const known = findWorkspaceFile(linkPath, sourceFilePath)
      if (known?.path) return known.path

      // The tree only holds folders that were opened; the workspace index knows the rest, and
      // name links are how Zettel Notes writes them by default.
      try {
        const notes = await loadWorkspaceNotes()
        const indexed = findIndexedNote(linkPath, notes, sourceFilePath)
        if (indexed?.path) return indexed.path
      } catch (error) {
        logger.warn('Could not resolve the note link through the workspace index:', error)
      }
    }

    return relativeCandidate
  } catch (error) {
    logger.warn('Failed to resolve local file link:', { error, href })
    return undefined
  }
}

export async function openEditorLink(href: string, sourceFileId?: string): Promise<boolean> {
  const target = href.trim()
  if (!target) return false
  const navigation = beginLinkNavigation()
  // In-document heading anchors are not addressable outside a rich editor.
  if (target.startsWith('#')) return false

  if (!isLocalFileLink(target)) {
    if (target.startsWith('#') || target.startsWith('?')) return false

    try {
      await openUrl(target)
      return true
    } catch (error) {
      logger.warn('Failed to open external link:', { error, href: target })
      return false
    }
  }

  const editor = useEditorStore.getState()
  const sourceFilePath = sourceFileId ? getFileObject(sourceFileId)?.path : undefined
  const targetPath = await resolveLocalFileLinkPath(target, sourceFilePath, editor.getRootPath())
  if (!isCurrentLinkNavigation(navigation)) return true
  if (!targetPath) return false

  let targetFile = getFileObjectByPath(targetPath) ?? editor.getFileNodeByPath(targetPath)
  if (targetFile?.kind === 'dir') return false

  if (!targetFile) {
    try {
      const [exists, isDirectory] = await Promise.all([
        invoke<boolean>('file_exists', { filePath: targetPath }),
        invoke<boolean>('is_dir', { path: targetPath }),
      ])
      if (!isCurrentLinkNavigation(navigation)) return true
      if (!exists || isDirectory) return false
    } catch (error) {
      logger.warn('Failed to inspect local file link:', { error, href, targetPath })
      return false
    }

    const fileName = getFileNameFromPath(targetPath)
    targetFile = createFile({
      name: fileName,
      ext: getFileExtension(fileName),
      path: targetPath,
    })
  }

  if (!isCurrentLinkNavigation(navigation)) return true
  const group = useEditorStore.getState().getActiveGroup()
  if (!group || !editor.openFileInGroup(group.id, targetFile.id, { mode: 'permanent' })) return false
  return true
}

function getFileExtension(fileName: string): string {
  const dotIndex = fileName.lastIndexOf('.')
  return dotIndex > -1 ? fileName.slice(dotIndex + 1) : ''
}
