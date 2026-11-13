import { describe, expect, it } from 'vitest'
import { titleFromMarkdown } from './noteTitle'

describe('note title', () => {
  it('prefers the YAML title', () => {
    const note = ['---', 'title: Reunião de equipa', 'tags: [a]', '---', '', '# Outro título', ''].join(
      '\n',
    )
    expect(titleFromMarkdown(note, '20260112 Reunião.md')).toBe('Reunião de equipa')
  })

  it('removes quotes around the YAML title', () => {
    expect(titleFromMarkdown('---\ntitle: "Aviso"\n---\n', 'x.md')).toBe('Aviso')
  })

  it('falls back to the first heading', () => {
    expect(titleFromMarkdown('# Título da nota\n\ntexto', 'nota.md')).toBe('Título da nota')
    expect(titleFromMarkdown('texto\n\n## Segundo nível', 'nota.md')).toBe('Segundo nível')
  })

  it('falls back to the file name without the extension', () => {
    expect(titleFromMarkdown('só texto', 'nome.com.pontos.md')).toBe('nome.com.pontos')
  })
})
