import { describe, expect, it } from 'vitest'
import { applySelectionLabel } from './noteLink'

describe('applySelectionLabel', () => {
  it('uses the selection as the label of a wiki link', () => {
    expect(applySelectionLabel('[[livros]]', 'leituras')).toBe('[[livros|leituras]]')
  })

  it('replaces an existing wiki label', () => {
    expect(applySelectionLabel('[[livros|Livros]]', 'leituras')).toBe('[[livros|leituras]]')
  })

  it('uses the selection in a markdown link', () => {
    expect(applySelectionLabel('[Livros](livros.md)', 'leituras')).toBe('[leituras](livros.md)')
  })

  it('replaces the title after a date prefix', () => {
    expect(applySelectionLabel('[[20260112]] Reunião de equipa', 'acta')).toBe('[[20260112]] acta')
  })

  it('leaves the markdown alone without a selection', () => {
    expect(applySelectionLabel('[[livros]]', '   ')).toBe('[[livros]]')
  })
})
