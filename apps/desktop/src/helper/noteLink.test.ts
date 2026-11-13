import { describe, expect, it } from 'vitest'
import {
  DEFAULT_NOTE_LINK_STYLE,
  applyNoteLinkTemplate,
  dateForTemplate,
  noteFacts,
  normalizeNoteLinkStyle,
  relativeNotePath,
} from './noteLink'

const facts = noteFacts({
  fromRepoPath: 'projetos/ideias.md',
  toRepoPath: 'referencias/20260112 Reunião de equipa.md',
  title: 'Reunião de equipa',
})

describe('note link templates', () => {
  it('keeps the Android style list and default', () => {
    expect(DEFAULT_NOTE_LINK_STYLE).toBe('[[$filename$]]')
  })

  it('rejects templates that do not open a link', () => {
    expect(normalizeNoteLinkStyle('sem parênteses')).toBe(DEFAULT_NOTE_LINK_STYLE)
    expect(normalizeNoteLinkStyle(undefined)).toBe(DEFAULT_NOTE_LINK_STYLE)
    expect(normalizeNoteLinkStyle('[[$filename$]]')).toBe('[[$filename$]]')
  })

  it('computes the relative path with one level up', () => {
    expect(relativeNotePath('projetos/ideias.md', 'referencias/nota.md')).toBe('../referencias/nota.md')
    expect(relativeNotePath('projetos/ideias.md', 'projetos/nota.md')).toBe('nota.md')
    expect(relativeNotePath('a/b/c.md', 'a/d/e.md')).toBe('../d/e.md')
    expect(relativeNotePath('a/b/c.md', 'x.md')).toBe('../../x.md')
  })

  it('takes the date from the file name, falling back to the whole name', () => {
    expect(dateForTemplate('20260112 Reunião')).toBe('20260112')
    expect(dateForTemplate('Reunião de equipa')).toBe('Reunião de equipa')
    expect(dateForTemplate('12345 not-enough-digits')).toBe('12345 not-enough-digits')
  })
})

describe('the ten Android styles', () => {
  const cases: Array<[string, string]> = [
    ['[[$filename$]]', '[[20260112 Reunião de equipa]]'],
    ['[[$filename$.$extension$]]', '[[20260112 Reunião de equipa.md]]'],
    ['[[$filename$|$title$]]', '[[20260112 Reunião de equipa|Reunião de equipa]]'],
    ['[[$filename$.$extension$|$title$]]', '[[20260112 Reunião de equipa.md|Reunião de equipa]]'],
    ['[[$relative$]]', '[[../referencias/20260112 Reunião de equipa.md]]'],
    ['[[$date$]]', '[[20260112]]'],
    ['[[$date$]] $title$', '[[20260112]] Reunião de equipa'],
    ['[$title$]($filename$)', '[Reunião de equipa](20260112%20Reunião%20de%20equipa)'],
    ['[$title$]($filename$.$extension$)', '[Reunião de equipa](20260112%20Reunião%20de%20equipa.md)'],
    [
      '[$title$]($relative$)',
      '[Reunião de equipa](../referencias/20260112%20Reunião%20de%20equipa.md)',
    ],
  ]

  it.each(cases)('%s', (style, expected) => {
    expect(applyNoteLinkTemplate(style, facts)).toBe(expected)
  })

  it('uses the repository path when absolute links are enabled', () => {
    expect(applyNoteLinkTemplate('[[$filename$]]', facts, { absolute: true })).toBe(
      '[[referencias/20260112 Reunião de equipa]]',
    )
  })

  it('leaves the relative styles untouched by the absolute option', () => {
    expect(applyNoteLinkTemplate('[[$relative$]]', facts, { absolute: true })).toBe(
      '[[../referencias/20260112 Reunião de equipa.md]]',
    )
  })
})
