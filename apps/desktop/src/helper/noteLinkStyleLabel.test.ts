import { describe, expect, it } from 'vitest'
import { NOTE_LINK_STYLES, styleHasLabel } from './noteLink'

describe('styleHasLabel', () => {
  it('is true only for the styles that write a visible label', () => {
    const withLabel = NOTE_LINK_STYLES.filter((style) => styleHasLabel(style.value)).map(
      (style) => style.label,
    )

    expect(withLabel).toEqual([
      '[[Filename|Title]]',
      '[[Filename.md|Title]]',
      '[[Date]] Title',
      '[Title](Filename)',
      '[Title](Filename.md)',
      '[Title](../Filename.md)',
    ])
  })

  it('falls back to the default style for unknown values', () => {
    expect(styleHasLabel('lixo')).toBe(styleHasLabel('[[$filename$]]'))
  })
})
