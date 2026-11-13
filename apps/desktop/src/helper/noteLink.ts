/**
 * Note-link templates, byte-compatible with Zettel Notes on Android.
 *
 * The Android app stores the chosen style as a literal template and replaces placeholders when
 * a link is inserted. Keeping the same literal strings here means a repository shared between
 * the phone and the desktop produces the same Markdown, and that the setting needs no mapping
 * table. Values come from the app's `res/values/arrays.xml` (`note_link_values`).
 */

export interface NoteLinkStyle {
  /** Stored value, exactly as Zettel Notes stores it. */
  value: string
  /** Menu label, exactly as Zettel Notes shows it (syntax, so it is not translated). */
  label: string
}

export const NOTE_LINK_STYLES: readonly NoteLinkStyle[] = [
  { value: '[[$filename$]]', label: '[[Filename]]' },
  { value: '[[$filename$.$extension$]]', label: '[[Filename.md]]' },
  { value: '[[$filename$|$title$]]', label: '[[Filename|Title]]' },
  { value: '[[$filename$.$extension$|$title$]]', label: '[[Filename.md|Title]]' },
  { value: '[[$relative$]]', label: '[[../Filename.md]]' },
  { value: '[[$date$]]', label: '[[Date]]' },
  { value: '[[$date$]] $title$', label: '[[Date]] Title' },
  { value: '[$title$]($filename$)', label: '[Title](Filename)' },
  { value: '[$title$]($filename$.$extension$)', label: '[Title](Filename.md)' },
  { value: '[$title$]($relative$)', label: '[Title](../Filename.md)' },
]

/** Android's default: `[[$filename$]]`. */
export const DEFAULT_NOTE_LINK_STYLE = NOTE_LINK_STYLES[0].value

/** A template is only used when it opens a link; anything else falls back to the default. */
export const normalizeNoteLinkStyle = (value: string | undefined | null): string => {
  const candidate = (value ?? '').trim()
  if (!candidate.startsWith('[') || !NOTE_LINK_STYLES.some((style) => style.value === candidate)) {
    return DEFAULT_NOTE_LINK_STYLE
  }
  return candidate
}

export interface NoteFacts {
  /** File name without its extension, as it appears on disk. */
  filename: string
  /** Extension without the dot (`md`). */
  extension: string
  /** Display title, resolved by "Prefer Title From" on the Android side. */
  title: string
  /** Path from the repository root, without a leading slash. */
  repoPath: string
  /** Path from the folder holding the linking note, with `../` when needed. */
  relativePath: string
}

const DATE_PREFIX = /^(\d{6,})\s/

/**
 * `$date$`: the leading 6-or-more digits in the file name (Zettel Notes extracts up to the first
 * space); when the name carries no date, the whole file name is used, exactly as the app does.
 */
export const dateForTemplate = (filename: string): string => {
  const match = DATE_PREFIX.exec(`${filename} `)
  return match ? match[1] : filename
}

const splitPath = (value: string): string[] => value.split('/').filter(Boolean)

/** Join two path fragments with a single `/`. */
const joinPath = (left: string, right: string): string => {
  if (!left) return right
  if (!right) return left
  return `${left.replace(/\/+$/, '')}/${right.replace(/^\/+/, '')}`
}

/**
 * Path from the folder of `fromRepoPath` to `toRepoPath`, with `../` for every level that has to
 * be climbed. Both paths are relative to the repository root and use `/`.
 */
export const relativeNotePath = (fromRepoPath: string, toRepoPath: string): string => {
  const from = splitPath(fromRepoPath)
  const to = splitPath(toRepoPath)
  // The last segment of `from` is the note itself; only its folder counts.
  from.pop()

  let common = 0
  while (common < from.length && common < to.length && from[common] === to[common]) {
    common += 1
  }

  const up = new Array(from.length - common).fill('..')
  return [...up, ...to.slice(common)].join('/') || to[to.length - 1] || ''
}

/** Zettel Notes writes spaces in `[text](target)` destinations as `%20`. */
const encodeDestination = (value: string): string => value.replace(/ /g, '%20')

const MARKDOWN_LINK = /\[([^\]]*)\]\(([^)]*)\)/

/**
 * Apply a template. When the destination is a Markdown link, spaces in it are percent-encoded,
 * matching the Android behaviour; wiki-style results are left verbatim.
 */
export const applyNoteLinkTemplate = (
  style: string,
  facts: NoteFacts,
  options: { absolute?: boolean } = {},
): string => {
  const template = normalizeNoteLinkStyle(style)

  // With absolute links (or a duplicated name, decided by the caller) the reference becomes the
  // path from the repository root instead of the bare file name.
  const reference = options.absolute ? facts.repoPath.replace(/\.([^./]+)$/, '') : facts.filename

  const substituted = template
    .replace(/\$filename\$/g, reference)
    .replace(/\$extension\$/g, facts.extension)
    .replace(/\$title\$/g, facts.title)
    .replace(/\$date\$/g, dateForTemplate(facts.filename))
    .replace(/\$relative\$/g, facts.relativePath)

  const link = MARKDOWN_LINK.exec(substituted)
  if (!link) return substituted

  return `[${link[1]}](${encodeDestination(link[2])})`
}

/** Facts for one note, given its repository path and the note that will link to it. */
export const noteFacts = (input: {
  fromRepoPath: string
  toRepoPath: string
  title: string
}): NoteFacts => {
  const segments = splitPath(input.toRepoPath)
  const name = segments[segments.length - 1] ?? ''
  const dot = name.lastIndexOf('.')
  const filename = dot > 0 ? name.slice(0, dot) : name
  const extension = dot > 0 ? name.slice(dot + 1) : ''

  return {
    filename,
    extension,
    title: input.title || filename,
    repoPath: input.toRepoPath,
    relativePath: input.fromRepoPath
      ? relativeNotePath(input.fromRepoPath, input.toRepoPath)
      : joinPath('', input.toRepoPath),
  }
}

/** One plain-language explanation per style, keyed by the stored template. */
export const NOTE_LINK_STYLE_HELP: Record<string, string> = {
  '[[$filename$]]': 'settings.image.note_links.style_help.filename',
  '[[$filename$.$extension$]]': 'settings.image.note_links.style_help.filename_extension',
  '[[$filename$|$title$]]': 'settings.image.note_links.style_help.filename_title',
  '[[$filename$.$extension$|$title$]]': 'settings.image.note_links.style_help.filename_extension_title',
  '[[$relative$]]': 'settings.image.note_links.style_help.relative',
  '[[$date$]]': 'settings.image.note_links.style_help.date',
  '[[$date$]] $title$': 'settings.image.note_links.style_help.date_title',
  '[$title$]($filename$)': 'settings.image.note_links.style_help.markdown_filename',
  '[$title$]($filename$.$extension$)': 'settings.image.note_links.style_help.markdown_filename_extension',
  '[$title$]($relative$)': 'settings.image.note_links.style_help.markdown_relative',
}

/** Facts for the example line shown under the style menu. */
export const NOTE_LINK_STYLE_SAMPLE = noteFacts({
  fromRepoPath: 'projetos/ideias.md',
  toRepoPath: 'referencias/20260112 Reunião de equipa.md',
  title: 'Reunião de equipa',
})

/**
 * Replace the visible label of a generated link with the text the user selected.
 *
 * Zettel Notes has no such feature — it always writes the template's label — so this is a
 * deliberate extra: selecting a word and choosing a note turns the word into the link text,
 * which is what a writer expects. With no selection the template stays untouched.
 */
export const applySelectionLabel = (markdown: string, selection: string): string => {
  const label = selection.trim().replace(/\s+/g, ' ')
  if (!label || !markdown) return markdown

  // [Title](destination) → [selected text](destination)
  const markdownLink = /^\[([^\]]*)\]\(([^)]*)\)$/.exec(markdown)
  if (markdownLink) return `[${label}](${markdownLink[2]})`

  // [[target|Title]] → [[target|selected text]]
  const wikiWithLabel = /^\[\[([^\]|]+)\|([^\]]*)\]\]$/.exec(markdown)
  if (wikiWithLabel) return `[[${wikiWithLabel[1]}|${label}]]`

  // [[target]] → [[target|selected text]]
  const wiki = /^\[\[([^\]]+)\]\]$/.exec(markdown)
  if (wiki) return `[[${wiki[1]}|${label}]]`

  // "[[date]] Title" → "[[date]] selected text"
  const dateTitle = /^(\[\[[^\]]+\]\])\s+.*$/.exec(markdown)
  if (dateTitle) return `${dateTitle[1]} ${label}`

  return markdown
}

/**
 * Whether a style writes a visible label (it uses `$title$`).
 *
 * Styles without a label put the destination in the text itself, so turning a selected word into
 * the label would silently change the chosen style. Those actions are offered only when nothing
 * is selected.
 */
export const styleHasLabel = (style: string | undefined): boolean =>
  normalizeNoteLinkStyle(style).includes('$title$')
