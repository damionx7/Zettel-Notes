import { stripNoteExtension } from './noteName'

/**
 * The title a note shows, following Zettel Notes' "Prefer Title From" rule: the `title` of the
 * YAML front matter, then the first heading, then the file name. Link templates use it as
 * `$title$`, so both apps write the same Markdown for the same note.
 */
export const titleFromMarkdown = (content: string, fileName: string): string => {
  const frontMatter = /^---\r?\n([\s\S]*?)\r?\n---/.exec(content)
  if (frontMatter) {
    const title = /^title:\s*(.+)$/m.exec(frontMatter[1])
    if (title) return stripQuotes(title[1].trim())
  }

  const body = frontMatter ? content.slice(frontMatter[0].length) : content
  const heading = /^#{1,6}\s+(.+)$/m.exec(body)
  if (heading) return heading[1].trim()

  return stripNoteExtension(fileName)
}

const stripQuotes = (value: string): string => value.replace(/^['"]|['"]$/g, '')
