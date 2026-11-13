/**
 * Wiki-link syntax from Zettel Notes, expanded for the reading pane.
 *
 * Zettel Notes writes links as `[[target]]`, `[[target|label]]` and embeds as `![[image.png]]`.
 * The preview renderer only understands Markdown, so those forms are rewritten to
 * `[label](destination)` on the way in. The note file is never touched: this happens on the
 * string handed to the renderer, the same place that already closes raw HTML blocks.
 */

export type WikiTargetResolver = (target: string) => string | null

const FENCED_CODE = /(^|\n)(```|~~~)[\s\S]*?\n\2[^\n]*/g
const INLINE_CODE = /`[^`\n]*`/g

/** A destination with a space is not valid Markdown unless the space is encoded. */
const encodeDestination = (value: string): string => value.replace(/ /g, '%20')

const linkLabel = (target: string): string => {
  const name = target.split('/').pop() ?? target
  const dot = name.lastIndexOf('.')
  return dot > 0 ? name.slice(0, dot) : name
}

const isImageTarget = (target: string): boolean =>
  /\.(png|jpe?g|gif|webp|svg|bmp|avif|tiff?|pdf)$/i.test(target)

/**
 * Rewrite every wiki link in `markdown`. A target the resolver cannot place is left exactly as
 * written, so the reader still sees the author's text instead of a broken link.
 */
export const expandWikiLinks = (markdown: string, resolve: WikiTargetResolver): string => {
  if (!markdown.includes('[[')) return markdown

  // Keep code intact: hints and examples must not become links.
  const protectedParts: string[] = []
  const protect = (value: string) => {
    protectedParts.push(value)
    return `\u0000${protectedParts.length - 1}\u0000`
  }

  let working = markdown.replace(FENCED_CODE, (match) => protect(match))
  working = working.replace(INLINE_CODE, (match) => protect(match))

  working = working.replace(/!\[\[([^\]]+)\]\]/g, (match, inner: string) => {
    const [rawTarget] = inner.split('|')
    const target = rawTarget.trim()
    const destination = resolve(target)
    if (!destination) return match
    return `![](${encodeDestination(destination)})`
  })

  working = working.replace(/\[\[([^\]]+)\]\]/g, (match, inner: string) => {
    const [rawTarget, rawLabel] = inner.split('|')
    const target = rawTarget.trim()
    if (!target) return match
    const destination = resolve(target)
    if (!destination) return match
    const label = (rawLabel ?? '').trim() || (isImageTarget(target) ? target : linkLabel(target))
    return `[${label}](${encodeDestination(destination)})`
  })

  return working.replace(/\u0000(\d+)\u0000/g, (_match, index: string) => protectedParts[Number(index)] ?? '')
}
