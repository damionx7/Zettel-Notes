import fs from 'node:fs'
import path from 'node:path'
import { describe, expect, it, vi } from 'vitest'
import type { IFile } from './filesys'

const workspace = { folderData: [] as IFile[] }

vi.mock('@/stores/useEditorStore', () => ({
  default: { getState: () => ({ folderData: workspace.folderData }) },
}))

/**
 * Check every link in a real notes folder against the resolver used by the app.
 *
 * The vault is a folder on disk, so the test builds the same tree the explorer would show and
 * asks the resolver where each link points. It answers the question "do the links work?" without
 * opening the app: a link that cannot be placed fails here.
 *
 * Run it with an explicit folder:
 *   WINZETTEL_VAULT="E:/zettel-linkstyle-vault" yarn workspace @markflowy/desktop test vaultLinks
 */
const vault = process.env.WINZETTEL_VAULT

const buildTree = (dir: string): IFile[] =>
  fs
    .readdirSync(dir, { withFileTypes: true })
    .filter((entry) => !entry.name.startsWith('.'))
    .sort((left, right) => left.name.localeCompare(right.name))
    .map((entry) => {
      const full = path.join(dir, entry.name).replace(/\\/g, '/')
      if (entry.isDirectory()) {
        return {
          id: full,
          name: entry.name,
          kind: 'dir',
          path: full,
          children: buildTree(full),
        } as IFile
      }
      const dot = entry.name.lastIndexOf('.')
      return {
        id: full,
        name: entry.name,
        kind: 'file',
        path: full,
        ext: dot > 0 ? entry.name.slice(dot + 1) : '',
      } as IFile
    })

const stripCode = (source: string): string =>
  source.replace(/```[\s\S]*?```/g, '').replace(/`[^`\n]*`/g, '')

const notes = (root: string): string[] =>
  fs.readdirSync(root, { recursive: true, encoding: 'utf8' })
    .map((entry) => String(entry).replace(/\\/g, '/'))
    .filter((entry) => entry.endsWith('.md'))
    .map((entry) => `${root.replace(/\\/g, '/')}/${entry}`)

/** Links that are broken on purpose and explained in the vault README. */
const EXPECTED_MISSES = new Set([
  '02 - referencias/livros.md -> glossário',
  '20260112 Reunião de equipa.md -> 20260203',
])

describe.skipIf(!vault)('links in a real notes folder', () => {
  it('places every wiki link and every markdown link', { timeout: 30000 }, async () => {
    const root = vault!.replace(/\\/g, '/')
    const tree = buildTree(root)
    workspace.folderData = [{ id: root, name: 'vault', kind: 'dir', path: root, children: tree } as IFile]

    const { createWikiResolver, findWorkspaceFile } = await import('./workspaceLinks')
    const { expandWikiLinks } = await import('./wikiLinks')

    const problems: string[] = []
    let checked = 0

    for (const notePath of notes(root)) {
      const source = stripCode(fs.readFileSync(notePath, 'utf8'))
      const relativeNote = path.relative(root, notePath).replace(/\\/g, '/')

      // 1. Wiki links: expand them exactly as the preview does, then verify the destination.
      const expanded = expandWikiLinks(source, createWikiResolver(notePath))
      for (const match of expanded.matchAll(/!?\[[^\]]*\]\(([^)\s]+)\)/g)) {
        const destination = match[1]
        if (/^(https?|data):/i.test(destination)) continue
        let decoded = destination
        try {
          decoded = decodeURIComponent(destination)
        } catch {
          // keep the raw value
        }
        let resolved = path.resolve(path.dirname(notePath), decoded)
        if (!fs.existsSync(resolved) && !decoded.includes('/')) {
          const known = findWorkspaceFile(decoded, notePath)
          if (known?.path) resolved = known.path
        }
        checked += 1
        if (!fs.existsSync(resolved)) problems.push(`${relativeNote} -> ${destination}`)
      }

      // 2. Wiki links the resolver could not place stay literal; report them too.
      for (const match of expanded.matchAll(/\[\[([^\]|]+)(?:\|[^\]]*)?\]\]/g)) {
        problems.push(`${relativeNote} -> [[${match[1]}]] não resolvida`)
      }
    }

    const unexpected = problems.filter((item) => {
      const [, target] = item.split(' -> ')
      const withoutPrefix = `${item.split(' -> ')[0]} -> ${target?.replace(/\[\[|\]\]/g, '')}`
      return !EXPECTED_MISSES.has(withoutPrefix)
    })

    // eslint-disable-next-line no-console
    console.log(`links verificados: ${checked}`, '\nfalhas inesperadas:', unexpected)
    expect(checked).toBeGreaterThan(20)
    expect(unexpected).toEqual([])
  })
})
