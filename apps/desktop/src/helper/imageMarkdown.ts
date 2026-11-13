import useAppSettingStore from '@/stores/useAppSettingStore'

/**
 * The two ways an image can be written in a note.
 *
 * Zettel Notes calls this "Use custom image link" and Obsidian uses the same syntax: the file is
 * addressed by name only (`![[photo.png]]`) instead of by path. It changes the Markdown, never
 * where the file is stored — the attachment folders keep being decided by the settings above.
 */
export const wikiImageLinksEnabled = (): boolean =>
  Boolean(useAppSettingStore.getState().settingData.attachment_wiki_image_links)

const fileNameOf = (path: string): string => path.split(/[\\/]/).pop() ?? path

export const imageMarkdown = (src: string, alt: string | undefined, wiki: boolean): string => {
  if (!src) return ''
  if (wiki) return `![[${fileNameOf(src)}]]`
  return `![${alt ?? ''}](${src})`
}

/** Follows the setting without each call site reading it. */
export const currentImageMarkdown = (src: string, alt?: string): string =>
  imageMarkdown(src, alt, wikiImageLinksEnabled())
