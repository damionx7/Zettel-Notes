/**
 * Folding for the read-only preview.
 *
 * Source mode gets folding from CodeMirror's fold gutter. The preview is static
 * HTML, so this adds the equivalent for the two structures people fold most:
 * a heading hides everything up to the next heading of the same or a higher
 * level, and a list item hides its nested lists.
 *
 * Fold state lives only in the DOM (`data-mf-fold` on the heading or list item),
 * so it never reaches the file and resets whenever the preview is rebuilt.
 */

export const PREVIEW_FOLD_TOGGLE_CLASS = 'mf-preview-fold-toggle'
export const PREVIEW_FOLD_HIDDEN_CLASS = 'mf-preview-fold-hidden'
const FOLD_ATTR = 'data-mf-fold'
const CONTENT_SELECTOR = '.mf-preview-content'

export interface PreviewFoldLabels {
  fold: string
  unfold: string
}

const headingLevel = (element: Element): number => {
  const match = /^H([1-6])$/.exec(element.tagName)
  return match ? Number(match[1]) : 0
}

const nestedLists = (item: Element): Element[] =>
  Array.from(item.children).filter((child) => child.tagName === 'UL' || child.tagName === 'OL')

const isClosed = (owner: Element) => owner.getAttribute(FOLD_ATTR) === 'closed'

/** Toggles the hidden class without leaving an empty `class` attribute behind. */
const setHidden = (element: Element, hidden: boolean): void => {
  if (hidden) {
    element.classList.add(PREVIEW_FOLD_HIDDEN_CLASS)
    return
  }
  if (!element.classList.contains(PREVIEW_FOLD_HIDDEN_CLASS)) return
  element.classList.remove(PREVIEW_FOLD_HIDDEN_CLASS)
  if (element.classList.length === 0) element.removeAttribute('class')
}

/** True when the heading has content of its own before the next heading at its level or above. */
const headingHasSection = (heading: Element): boolean => {
  const level = headingLevel(heading)
  const next = heading.nextElementSibling
  if (!next) return false
  const nextLevel = headingLevel(next)
  return nextLevel === 0 || nextLevel > level
}

/** Re-applies visibility from the fold state stored on each heading and list item. */
export function applyPreviewFolds(container: HTMLElement): void {
  // Headings fold the top-level blocks that follow them.
  let foldedLevel = Infinity
  for (const child of Array.from(container.children)) {
    const level = headingLevel(child)
    if (level > 0 && level <= foldedLevel) {
      foldedLevel = Infinity
    }
    setHidden(child, foldedLevel !== Infinity)
    if (level > 0 && foldedLevel === Infinity && isClosed(child)) {
      foldedLevel = level
    }
  }

  container.querySelectorAll(`li[${FOLD_ATTR}]`).forEach((item) => {
    const closed = isClosed(item)
    nestedLists(item).forEach((list) => setHidden(list, closed))
  })
}

function syncToggle(owner: Element): void {
  const toggle = owner.querySelector<HTMLButtonElement>(`:scope > .${PREVIEW_FOLD_TOGGLE_CLASS}`)
  if (!toggle) return
  const closed = isClosed(owner)
  const label = (closed ? toggle.dataset.unfoldLabel : toggle.dataset.foldLabel) ?? ''
  toggle.setAttribute('aria-expanded', closed ? 'false' : 'true')
  toggle.setAttribute('aria-label', label)
  toggle.title = label
}

function addToggle(owner: Element, labels: PreviewFoldLabels): void {
  const toggle = owner.ownerDocument.createElement('button')
  toggle.type = 'button'
  toggle.className = PREVIEW_FOLD_TOGGLE_CLASS
  toggle.contentEditable = 'false'
  toggle.dataset.foldLabel = labels.fold
  toggle.dataset.unfoldLabel = labels.unfold
  owner.setAttribute(FOLD_ATTR, 'open')
  owner.prepend(toggle)
  syncToggle(owner)
}

/**
 * Adds fold toggles to the rendered preview. Returns a cleanup that removes
 * every toggle and unhides everything, leaving the rendered HTML as it was.
 */
export function installPreviewFolding(
  container: HTMLElement,
  labels: PreviewFoldLabels,
): () => void {
  for (const child of Array.from(container.children)) {
    if (headingLevel(child) > 0 && headingHasSection(child)) {
      addToggle(child, labels)
    }
  }
  container.querySelectorAll('li').forEach((item) => {
    if (nestedLists(item).length > 0) {
      addToggle(item, labels)
    }
  })

  const handleClick = (event: MouseEvent) => {
    const toggle = (event.target as Element | null)?.closest?.(`.${PREVIEW_FOLD_TOGGLE_CLASS}`)
    const owner = toggle?.parentElement
    if (!toggle || !owner || !container.contains(toggle)) return

    event.preventDefault()
    event.stopPropagation()
    owner.setAttribute(FOLD_ATTR, isClosed(owner) ? 'open' : 'closed')
    syncToggle(owner)
    applyPreviewFolds(container)
  }
  container.addEventListener('click', handleClick)

  return () => {
    container.removeEventListener('click', handleClick)
    container.querySelectorAll(`.${PREVIEW_FOLD_TOGGLE_CLASS}`).forEach((toggle) => toggle.remove())
    container
      .querySelectorAll(`[${FOLD_ATTR}]`)
      .forEach((owner) => owner.removeAttribute(FOLD_ATTR))
    container
      .querySelectorAll(`.${PREVIEW_FOLD_HIDDEN_CLASS}`)
      .forEach((element) => setHidden(element, false))
  }
}

/**
 * Unfolds whatever hides `node`, so find and other navigation can scroll to it.
 * Does nothing when the node is visible or outside a preview.
 */
export function revealInPreviewFolds(node: Node | null | undefined): void {
  const element = node instanceof Element ? node : node?.parentElement
  const container = element?.closest<HTMLElement>(CONTENT_SELECTOR)
  if (!element || !container) return

  let hidden = element.closest(`.${PREVIEW_FOLD_HIDDEN_CLASS}`)
  while (hidden && container.contains(hidden)) {
    const parent = hidden.parentElement
    if (parent && parent !== container && parent.tagName === 'LI') {
      parent.setAttribute(FOLD_ATTR, 'open')
    } else {
      // A top-level block hidden by a folded heading: open the nearest folded
      // heading above it until the block shows again.
      let sibling = hidden.previousElementSibling
      while (sibling && hidden.classList.contains(PREVIEW_FOLD_HIDDEN_CLASS)) {
        if (headingLevel(sibling) > 0 && isClosed(sibling)) {
          sibling.setAttribute(FOLD_ATTR, 'open')
          applyPreviewFolds(container)
        }
        sibling = sibling.previousElementSibling
      }
    }
    applyPreviewFolds(container)
    const next = element.closest(`.${PREVIEW_FOLD_HIDDEN_CLASS}`)
    if (next === hidden) break
    hidden = next
  }

  container.querySelectorAll(`[${FOLD_ATTR}]`).forEach(syncToggle)
}
