import { describe, expect, it } from 'vitest'
import { buildNoteTree } from './noteIndex'

const note = (path: string) => ({ path, name: `${path.split('/').pop()}`, stem: `${path.split('/').pop()?.replace('.md', '')}` })

describe('buildNoteTree', () => {
  it('groups notes by folder, keeping the hierarchy', () => {
    const tree = buildNoteTree('/vault', [
      note('/vault/raiz.md'),
      note('/vault/01 - projetos/ideias.md'),
      note('/vault/01 - projetos/sub/aninhada.md'),
      note('/vault/02 - referencias/livros.md'),
    ])

    expect(tree.notes.map((item) => item.stem)).toEqual(['raiz'])
    expect(tree.folders.map((folder) => folder.name)).toEqual(['01 - projetos', '02 - referencias'])
    const projetos = tree.folders[0]
    expect(projetos.notes.map((item) => item.stem)).toEqual(['ideias'])
    expect(projetos.folders[0].name).toBe('sub')
    expect(projetos.folders[0].notes[0].stem).toBe('aninhada')
  })
})
