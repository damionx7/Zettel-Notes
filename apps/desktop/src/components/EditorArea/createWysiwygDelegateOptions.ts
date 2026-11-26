import { sleep } from '@/helper'
import { clipboardRead } from '@/helper/clipboard'
import { getFileObject } from '@/helper/files'
import { getFolderPathFromPath } from '@/helper/filesys'
import { getImageUrlInTauri } from '@/helper/image'
import { logger } from '@/helper/logger'
import type { RemoteImageResources } from '@/helper/remoteImageResources'
import { useEditorKeybindingStore } from '@/hooks/useKeyboard'
import useAppSettingStore from '@/stores/useAppSettingStore'
import { writeText } from '@tauri-apps/plugin-clipboard-manager'
import type { CreateWysiwygDelegateOptions } from 'rme'
import { handleImagePaste, handleUploadImage } from './imageHandlers'
import { openEditorLink } from './openEditorLink'
import { requestImageInsert } from './requestImageInsert'
import { resolveCodeEditorPreferences } from './codeEditorSettings'

type LivePreviewBlockBehavior = 'auto' | 'always-split'
// rme/dist is generated and ignored, so Desktop can type-check this source option
// before the local rme declaration bundle is refreshed.
type WysiwygDelegateOptions = CreateWysiwygDelegateOptions & {
  livePreviewBlock?: {
    behavior?: LivePreviewBlockBehavior
  }
}

export const normalizeLivePreviewBlockBehavior = (
  value: unknown,
): LivePreviewBlockBehavior => (value === 'always-split' ? 'always-split' : 'auto')

export const getCurrentEditorInsertDateFormat = () => {
  return useAppSettingStore.getState().settingData.editor_insert_date_format as string | undefined
}

export const createWysiwygDelegateOptions = (
  fileId?: string,
  remoteImages?: RemoteImageResources,
): WysiwygDelegateOptions => {
  const settingData = useAppSettingStore.getState().settingData
  return {
    disableAllBuildInShortcuts: true,
    overrideShortcutMap: useEditorKeybindingStore.getState().editorKeybingMap,
    // The package declarations are generated separately; source integration tests
    // verify the expanded options without rebuilding rme/dist in this task.
    codemirrorOptions: resolveCodeEditorPreferences(settingData).rmeEmbedded as
      CreateWysiwygDelegateOptions['codemirrorOptions'],
    livePreviewBlock: {
      behavior: normalizeLivePreviewBlockBehavior(
        settingData.wysiwyg_editor_live_preview_block_behavior,
      ),
    },
    typewriterScroll: {
      enabled: settingData.editor_typewriter_scroll,
    },
    currentDateFormat: getCurrentEditorInsertDateFormat,
    placeholder: {
      enabled: settingData.editor_placeholder,
    },
    clipboardReadFunction: clipboardRead,
    // The shared editor contract can only emit an image node from this handler.
    // Non-image attachments are linked by the source editor, which owns that markup.
    imageInsertHandler: async () => {
      const outcome = await requestImageInsert(fileId)
      if (!outcome) return null
      if (outcome.kind === 'link') {
        logger.warn('Attachment links are inserted by the source editor:', outcome.href)
        return null
      }
      return outcome.attributes
    },
    uploadImageHandler: (files) => handleUploadImage(files, fileId),
    imagePasteHandler: (src) => handleImagePaste(src, fileId),
    handleViewImgSrcUrl: async (url) => {
      await sleep(1)

      try {
        const file = fileId ? getFileObject(fileId) : null
        const fileFolderPath = getFolderPathFromPath(file?.path)

        const src = await getImageUrlInTauri(url, fileFolderPath, remoteImages)
        return src
      } catch (error) {
        logger.error('Failed to get image URL:', error)
      }
      return url
    },
    customCopyFunction: async (text) => {
      try {
        await writeText(text)
        return true
      } catch (error) {
        return false
      }
    },
    handleLinkClick: (href) => {
      void openEditorLink(href, fileId)
      return true
    },
  }
}
