import { afterEach, describe, expect, test } from 'vitest'
import {
  applyPreviewFolds,
  installPreviewFolding,
  PREVIEW_FOLD_HIDDEN_CLASS,
  PREVIEW_FOLD_TOGGLE_CLASS,
  PREVIEW_REVEAL_EVENT,
  revealInPreviewFolds,
} from './preview-folding'

const labels = { fold: 'Fold', unfold: 'Unfold' }

function render(html: string): HTMLElement {
  const container = document.createElement('div')
  container.className = 'mf-preview-content'
  container.innerHTML = html
  document.body.append(container)
  return container
}

const toggleOf = (owner: Element | null) =>
  owner?.querySelector<HTMLButtonElement>(`:scope > .${PREVIEW_FOLD_TOGGLE_CLASS}`) ?? null

const isHidden = (element: Element | null) =>
  Boolean(element?.closest(`.${PREVIEW_FOLD_HIDDEN_CLASS}`))

afterEach(() => {
  document.body.innerHTML = ''
})

describe('preview folding', () => {
  test('a heading hides its section up to the next heading of the same level', () => {
    const container = render(
      [
        '<h1 id="a">A</h1>',
        '<p id="a-text">a</p>',
        '<h2 id="b">B</h2>',
        '<p id="b-text">b</p>',
        '<h1 id="c">C</h1>',
        '<p id="c-text">c</p>',
      ].join(''),
    )
    installPreviewFolding(container, labels)

    const toggle = toggleOf(container.querySelector('#a'))!
    expect(toggle.getAttribute('aria-expanded')).toBe('true')
    expect(toggle.getAttribute('aria-label')).toBe('Fold')

    toggle.click()

    expect(toggle.getAttribute('aria-expanded')).toBe('false')
    expect(toggle.getAttribute('aria-label')).toBe('Unfold')
    expect(isHidden(container.querySelector('#a-text'))).toBe(true)
    expect(isHidden(container.querySelector('#b'))).toBe(true)
    expect(isHidden(container.querySelector('#b-text'))).toBe(true)
    expect(isHidden(container.querySelector('#c'))).toBe(false)
    expect(isHidden(container.querySelector('#c-text'))).toBe(false)

    toggle.click()
    expect(container.querySelectorAll(`.${PREVIEW_FOLD_HIDDEN_CLASS}`)).toHaveLength(0)
  })

  test('a nested folded heading stays folded when its parent is unfolded', () => {
    const container = render(
      '<h1 id="a">A</h1><h2 id="b">B</h2><p id="b-text">b</p><h2 id="c">C</h2><p id="c-text">c</p>',
    )
    installPreviewFolding(container, labels)

    toggleOf(container.querySelector('#b'))!.click()
    toggleOf(container.querySelector('#a'))!.click()
    toggleOf(container.querySelector('#a'))!.click()

    expect(isHidden(container.querySelector('#b'))).toBe(false)
    expect(isHidden(container.querySelector('#b-text'))).toBe(true)
    expect(isHidden(container.querySelector('#c-text'))).toBe(false)
  })

  test('headings without content and list items without children get no toggle', () => {
    const container = render(
      '<h2 id="a">A</h2><h1 id="b">B</h1><ul><li id="leaf"><p>x</p></li></ul><h1 id="c">C</h1>',
    )
    installPreviewFolding(container, labels)

    expect(toggleOf(container.querySelector('#a'))).toBeNull()
    expect(toggleOf(container.querySelector('#b'))).not.toBeNull()
    expect(toggleOf(container.querySelector('#leaf'))).toBeNull()
    expect(toggleOf(container.querySelector('#c'))).toBeNull()
  })

  test('a list item hides only its nested lists', () => {
    const container = render(
      '<ul><li id="parent"><p id="parent-text">parent</p><ul id="nested"><li><p>child</p></li></ul></li><li id="sibling"><p>sibling</p></li></ul>',
    )
    installPreviewFolding(container, labels)

    toggleOf(container.querySelector('#parent'))!.click()

    expect(isHidden(container.querySelector('#nested'))).toBe(true)
    expect(isHidden(container.querySelector('#parent-text'))).toBe(false)
    expect(isHidden(container.querySelector('#sibling'))).toBe(false)
  })

  test('toggles add no text, so find and copied text are unchanged', () => {
    const container = render(
      '<h1>Title</h1><p>Body</p><ul><li><p>a</p><ul><li><p>b</p></li></ul></li></ul>',
    )
    const before = container.textContent
    installPreviewFolding(container, labels)

    expect(container.querySelectorAll(`.${PREVIEW_FOLD_TOGGLE_CLASS}`)).toHaveLength(2)
    expect(container.textContent).toBe(before)
  })

  test('cleanup restores the rendered HTML', () => {
    const html = '<h1>A</h1><p>a</p><ul><li><p>x</p><ol><li><p>y</p></li></ol></li></ul>'
    const container = render(html)
    const cleanup = installPreviewFolding(container, labels)
    container
      .querySelectorAll<HTMLButtonElement>(`.${PREVIEW_FOLD_TOGGLE_CLASS}`)
      .forEach((t) => t.click())

    cleanup()

    expect(container.innerHTML).toBe(render(html).innerHTML)
  })

  test('revealing a hidden match unfolds every fold above it', () => {
    const container = render(
      '<h1 id="a">A</h1><h2 id="b">B</h2><ul><li id="item"><p>x</p><ul><li><p id="target">needle</p></li></ul></li></ul><h1 id="c">C</h1><p id="c-text">c</p>',
    )
    installPreviewFolding(container, labels)
    toggleOf(container.querySelector('#item'))!.click()
    toggleOf(container.querySelector('#b'))!.click()
    toggleOf(container.querySelector('#a'))!.click()
    toggleOf(container.querySelector('#c'))!.click()

    const target = container.querySelector('#target')!
    expect(isHidden(target)).toBe(true)

    revealInPreviewFolds(target.firstChild)

    expect(isHidden(target)).toBe(false)
    expect(toggleOf(container.querySelector('#a'))!.getAttribute('aria-expanded')).toBe('true')
    expect(toggleOf(container.querySelector('#item'))!.getAttribute('aria-label')).toBe('Fold')
    // Unrelated folds stay as they were.
    expect(isHidden(container.querySelector('#c-text'))).toBe(true)
  })

  test('the reveal event from inside the preview unfolds the target', () => {
    const container = render('<h1 id="a">A</h1><p id="target">needle</p>')
    installPreviewFolding(container, labels)
    toggleOf(container.querySelector('#a'))!.click()

    const target = container.querySelector('#target')!
    target.dispatchEvent(new Event(PREVIEW_REVEAL_EVENT, { bubbles: true }))

    expect(isHidden(target)).toBe(false)
  })

  test('applying folds with nothing folded hides nothing', () => {
    const container = render('<h1>A</h1><p>a</p>')
    applyPreviewFolds(container)
    expect(container.querySelectorAll(`.${PREVIEW_FOLD_HIDDEN_CLASS}`)).toHaveLength(0)
  })
})
