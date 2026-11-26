import assert from 'node:assert/strict'
import { execFile } from 'node:child_process'
import { cp, mkdtemp, readFile, readdir, rm, writeFile } from 'node:fs/promises'
import { createRequire } from 'node:module'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import test from 'node:test'
import { promisify } from 'node:util'
import yaml from 'yaml'

const rootRequire = createRequire(new URL('../package.json', import.meta.url))
const editorRequire = createRequire(new URL('../packages/editor/package.json', import.meta.url))
const execFileAsync = promisify(execFile)

test('postinstall patches target locked dependencies and apply with CI failure handling', async (t) => {
  const lockfile = yaml.parse(await readFile(new URL('../yarn.lock', import.meta.url), 'utf8'))
  const lockedPackages = new Map(
    Object.values(lockfile).flatMap(({ resolution }) => {
      if (!resolution?.includes('@npm:')) return []
      const [name, version] = resolution.split('@npm:')
      return [[`${name.replaceAll('/', '+')}+${version}.patch`, name]]
    }),
  )
  const patches = new URL('../patches/', import.meta.url)
  const fixture = await mkdtemp(join(tmpdir(), 'markflowy-postinstall-'))
  t.after(() => rm(fixture, { recursive: true, force: true }))
  await writeFile(join(fixture, 'package.json'), JSON.stringify({ private: true }))
  await cp(patches, join(fixture, 'patches'), { recursive: true })

  for (const patch of (await readdir(patches)).filter((name) => name.endsWith('.patch'))) {
    const name = lockedPackages.get(patch)
    assert.ok(name, `${patch} targets a package/version absent from yarn.lock`)
    await cp(
      new URL(`../node_modules/${name}/`, import.meta.url),
      join(fixture, 'node_modules', name),
      {
        recursive: true,
      },
    )
  }

  await execFileAsync(
    process.execPath,
    [rootRequire.resolve('patch-package/index.js'), '--error-on-fail', '--error-on-warn'],
    { cwd: fixture, env: { ...process.env, CI: 'true' }, timeout: 10_000 },
  )
})

for (const fixture of ['default', 'math', 'readme']) {
  test(`the native text loader preserves the ${fixture} Markdown fixture`, async () => {
    const markdown = await readFile(
      new URL(`../packages/editor/src/playground/test-md/${fixture}.md`, import.meta.url),
      'utf8',
    )
    const { code } = await editorRequire('esbuild').transform(markdown, {
      loader: 'text',
      format: 'esm',
    })
    const result = await import(
      `data:text/javascript;base64,${Buffer.from(code).toString('base64')}`
    )
    assert.equal(result.default, markdown)
  })
}
