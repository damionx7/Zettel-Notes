import assert from 'node:assert/strict'
import { execFile } from 'node:child_process'
import { mkdir, mkdtemp, readFile, rm, writeFile } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import path from 'node:path'
import test from 'node:test'
import { fileURLToPath } from 'node:url'
import { promisify } from 'node:util'
import {
  VERSION_FILES,
  checkVersions,
  nextVersion,
  readVersions,
  writeVersion,
} from './bump-version.mjs'

const execFileAsync = promisify(execFile)
const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const script = path.join(repoRoot, 'scripts/bump-version.mjs')

const fixtureFiles = (version, packageVersion = version) => ({
  [VERSION_FILES.tauriConf]:
    `{\n  "productName": "Zettel Notes",\n  "version": "${version}",\n  "plugins": {\n    "x": {\n      "version": {\n        "short": "V"\n      }\n    }\n  }\n}\n`,
  [VERSION_FILES.cargoToml]:
    `[package]\nname = "zettel-notes"\n# keep this comment\nversion = "${version}"\nedition = "2021"\n\n[dependencies.tauri]\nversion = "2.7.0"\n`,
  [VERSION_FILES.cargoLock]:
    `[[package]]\nname = "zettel-notes"\nversion = "${version}"\ndependencies = [\n "tauri",\n]\n\n[[package]]\nname = "zettel-notes-other"\nversion = "9.9.9"\n`,
  [VERSION_FILES.packageJson]:
    `{\n  "name": "@zettel-notes/desktop",\n  "version": "${packageVersion}",\n  "dependencies": {\n    "a": "1.0.0"\n  }\n}\n`,
})

async function fixture(t, files) {
  const root = await mkdtemp(path.join(tmpdir(), 'zettel-notes-version-'))
  t.after(() => rm(root, { recursive: true, force: true }))
  for (const [file, text] of Object.entries(files)) {
    await mkdir(path.dirname(path.join(root, file)), { recursive: true })
    await writeFile(path.join(root, file), text)
  }
  return root
}

test('the committed version is the same in every file', () => {
  assert.deepEqual(checkVersions(repoRoot), [])
})

test('the app metadata no longer advertises the removed AI features', async () => {
  const conf = await readFile(path.join(repoRoot, VERSION_FILES.tauriConf), 'utf8')
  assert.doesNotMatch(conf, /\bAI\b/)
})

test('next versions follow semver, or take an explicit version', () => {
  assert.equal(nextVersion('0.0.9', 'patch'), '0.0.10')
  assert.equal(nextVersion('0.0.9', 'minor'), '0.1.0')
  assert.equal(nextVersion('0.4.2', 'major'), '1.0.0')
  assert.equal(nextVersion('0.0.9', '0.2.0'), '0.2.0')
  assert.throws(() => nextVersion('0.0.9', 'v0.1'), /patch, minor, major/)
})

test('a bump rewrites only the version lines', async (t) => {
  const root = await fixture(t, fixtureFiles('0.0.9'))
  writeVersion(root, '0.0.10')
  const expected = fixtureFiles('0.0.10')
  for (const [file, text] of Object.entries(expected)) {
    assert.equal(await readFile(path.join(root, file), 'utf8'), text, file)
  }
  assert.deepEqual(new Set(Object.values(readVersions(root))), new Set(['0.0.10']))
})

test('the check reports files that disagree and tags that do not match', async (t) => {
  const root = await fixture(t, fixtureFiles('0.0.9', '1.0.0'))
  assert.match(checkVersions(root)[0], /apps\/desktop\/package\.json=1\.0\.0/)
  writeVersion(root, '0.0.9')
  assert.deepEqual(checkVersions(root, 'v0.0.9'), [])
  assert.deepEqual(checkVersions(root, 'refs/tags/v0.0.9'), [])
  assert.match(checkVersions(root, 'v0.0.10')[0], /bump-version\.mjs 0\.0\.10/)
})

test('the command line fails a mismatched tag and never touches git', async (t) => {
  const root = await fixture(t, fixtureFiles('0.0.9'))
  const env = { ...process.env, ZETTEL_NOTES_ROOT: root }
  const ok = await execFileAsync('node', [script, '--check', 'v0.0.9'], { env })
  assert.match(ok.stdout, /0\.0\.9 is consistent with v0\.0\.9/)
  await assert.rejects(
    execFileAsync('node', [script, '--check', 'v0.1.0'], { env }),
    (error) => error.code === 1 && /does not match/.test(error.stderr),
  )
  const bumped = await execFileAsync('node', [script, 'patch'], { env, cwd: root })
  assert.match(bumped.stdout, /0\.0\.9 -> 0\.0\.10/)
  assert.deepEqual(checkVersions(root, 'v0.0.10'), [])
})
