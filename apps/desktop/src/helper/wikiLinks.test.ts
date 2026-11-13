import { describe, expect, it } from 'vitest'
import { expandWikiLinks } from './wikiLinks'

const resolve = (target: string) => `/resolved/${target}`

describe('expandWikiLinks', () => {
  it('rewrites a plain wiki link', () => {
    expect(expandWikiLinks('Ver [[livros]].', resolve)).toBe('Ver [livros](/resolved/livros).')
  })

  it('uses the alias as label', () => {
    expect(expandWikiLinks('[[livros|Livros de referência]]', resolve)).toBe(
      '[Livros de referência](/resolved/livros)',
    )
  })

  it('rewrites an image embed without a label', () => {
    expect(expandWikiLinks('![[foto simples.png]]', resolve)).toBe('![](/resolved/foto%20simples.png)')
  })

  it('encodes spaces in the destination so Markdown accepts the link', () => {
    // The first render can fall back to the raw target; a space there used to break the link.
    expect(expandWikiLinks('[[02 - referencias/livros.md]]', (target) => target)).toBe(
      '[livros](02%20-%20referencias/livros.md)',
    )
  })

  it('leaves a target the resolver cannot place untouched', () => {
    expect(expandWikiLinks('[[desconhecida]]', () => null)).toBe('[[desconhecida]]')
  })

  it('keeps fenced and inline code intact', () => {
    const markdown = ['```', '[[dentro de código]]', '```', '', 'Exemplo: `[[inline]]`', '', '[[fora]]'].join(
      '\n',
    )
    const result = expandWikiLinks(markdown, resolve)

    expect(result).toContain('[[dentro de código]]')
    expect(result).toContain('`[[inline]]`')
    expect(result).toContain('[fora](/resolved/fora)')
  })
})
