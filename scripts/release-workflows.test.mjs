import assert from 'node:assert/strict'
import { execFile } from 'node:child_process'
import { copyFile, mkdir, mkdtemp, readFile, rm, writeFile } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import path from 'node:path'
import test from 'node:test'
import { promisify } from 'node:util'
import glob from 'fast-glob'
import yaml from 'yaml'

const execFileAsync = promisify(execFile)
const workflow = async (name) =>
  yaml.parse(await readFile(new URL(`../.github/workflows/${name}.yml`, import.meta.url), 'utf8'))
const release = await workflow('tauri-release')
const quality = await workflow('test-ci')

function prerequisites(jobs, id, visiting = new Set()) {
  assert.ok(jobs[id], `Unknown prerequisite job: ${id}`)
  assert.ok(!visiting.has(id), `Circular job dependency: ${id}`)
  const seen = new Set([...visiting, id])
  const direct = [jobs[id].needs ?? []].flat()
  return new Set(
    direct.flatMap((dependency) => [dependency, ...prerequisites(jobs, dependency, seen)]),
  )
}

test('every release build and publication depends on the shared quality gate', () => {
  assert.equal(release.jobs.quality.uses, './.github/workflows/test-ci.yml')
  for (const id of ['build', 'build-offline-installer', 'release']) {
    assert.ok(prerequisites(release.jobs, id).has('quality'), `${id} bypasses quality checks`)
    assert.notEqual(release.jobs[id]['continue-on-error'], true, id)
    assert.doesNotMatch(release.jobs[id].if ?? '', /always\(\)/, id)
  }
})

test('the shared gate requires real runtime, type, Rust and content validation', () => {
  assert.equal(quality.permissions.contents, 'read')
  const steps = quality.jobs.test.steps
  const commands = steps.filter((step) => step.run).flatMap((step) => step.run.split('\n'))
  for (const command of [
    'yarn workspace @markflowy/desktop build:types',
    'yarn workspace @markflowy/desktop test:e2e:types',
    'yarn workspace @markflowy/desktop test:e2e:runner',
    'yarn workspace @markflowy/desktop tauri:build:e2e',
    'yarn workspace @markflowy/desktop test:e2e',
    'yarn workspace @markflowy/web build:types',
    'yarn test',
    'cargo test --workspace --lib --tests --locked',
    'yarn workspace @markflowy/web test:content',
    'yarn test:security-dependencies',
    'yarn test:release-workflows',
    'yarn test:dev-desktop',
    'yarn translate:check',
  ]) {
    assert.ok(commands.includes(command), `Missing release gate: ${command}`)
  }
  for (const step of steps) assert.notEqual(step['continue-on-error'], true, step.name)
  const generation = steps.findIndex((step) => step.run === 'yarn build')
  const verification = steps.findIndex(
    (step) => step.run === 'yarn workspace @markflowy/web test:content',
  )
  assert.ok(generation >= 0 && verification > generation)
})

test('unit and Rust tests also run on Linux and Windows, except for tag releases', () => {
  const unit = quality.jobs.unit
  assert.equal(unit.if, "${{ !startsWith(github.ref, 'refs/tags/') }}")
  assert.equal(unit['runs-on'], '${{ matrix.os }}')
  assert.deepEqual(unit.strategy.matrix.os, ['ubuntu-22.04', 'windows-latest'])
  assert.equal(unit.strategy['fail-fast'], false)
  const commands = unit.steps.map((step) => step.run).filter(Boolean)
  for (const command of ['yarn test', 'cargo test --workspace --lib --tests --locked']) {
    assert.ok(commands.includes(command), `Missing cross-platform gate: ${command}`)
  }
  for (const step of unit.steps) assert.notEqual(step['continue-on-error'], true, step.name)
})

test('native E2E is a required macOS gate and always retains diagnostics', () => {
  assert.equal(quality.jobs.test['runs-on'], 'macos-latest')
  const steps = quality.jobs.test.steps
  const frontend = steps.findIndex((step) => step.run === 'yarn build')
  const native = steps.findIndex(
    (step) => step.run === 'yarn workspace @markflowy/desktop tauri:build:e2e',
  )
  const execution = steps.findIndex(
    (step) => step.run === 'yarn workspace @markflowy/desktop test:e2e',
  )
  assert.ok(frontend >= 0 && native > frontend && execution > native)
  for (const step of [steps[native], steps[execution]]) {
    assert.equal(step.if, undefined, 'Native E2E must not be optional on a passing CI run')
    assert.equal(step['continue-on-error'], undefined)
  }
  assert.equal(steps[execution]['timeout-minutes'], 20)
  const artifact = steps.find((step) => step.uses === 'actions/upload-artifact@v4')
  assert.equal(artifact.if, 'always()')
  assert.equal(artifact.with.path, 'apps/desktop/e2e/reports/')
  assert.equal(artifact.with['retention-days'], 7)
  assert.ok(steps.indexOf(artifact) > execution)
})

test('installers are built only for tag releases or by hand', async () => {
  assert.deepEqual(Object.keys(release.on), ['push'])
  assert.deepEqual(Object.keys(release.on.push), ['tags'])
  for (const name of ['nodejs', 'test-bundle']) {
    const triggers = (await workflow(name)).on
    assert.deepEqual(Object.keys(triggers), ['workflow_dispatch'], `${name} must not build on every commit`)
  }
  assert.deepEqual(quality.on.push.branches, ['**'], 'Test CI must keep checking every commit')
  assert.ok('workflow_call' in quality.on)
})

test('installers take their version from the release tag', async () => {
  for (const id of ['build', 'build-offline-installer']) {
    const steps = release.jobs[id].steps
    const stamp = steps.findIndex((step) => step.name === "Use the tag's version")
    const build = steps.findIndex((step) => step.name === 'Build the app')
    assert.ok(stamp >= 0 && stamp < build, `${id} must set the version before building`)
    assert.equal(steps[stamp].shell, 'bash', `${id} must run the same shell on Windows`)
    const directory = await mkdtemp(path.join(tmpdir(), 'markflowy-tag-version-'))
    try {
      const config = path.join(directory, 'apps/desktop/src-tauri/tauri.conf.json')
      await mkdir(path.dirname(config), { recursive: true })
      await writeFile(config, JSON.stringify({ productName: 'Zettel Notes', version: '1.0.4' }))
      const script = steps[stamp].run.match(/node -e "(.*)"$/s)[1].replaceAll('\\\\n', '\\n')
      await execFileAsync('node', ['-e', script], {
        cwd: directory,
        env: { ...process.env, GITHUB_REF_NAME: 'v0.0.3' },
      })
      const written = JSON.parse(await readFile(config, 'utf8'))
      assert.deepEqual(written, { productName: 'Zettel Notes', version: '0.0.3' })
    } finally {
      await rm(directory, { recursive: true, force: true })
    }
  }
  assert.equal(
    release.jobs.release.steps.find((step) => step.name === 'Query version number').run,
    'echo "version=${GITHUB_REF:11}" >> $GITHUB_ENV',
  )
})

test('DMG creation retries hdiutil when macOS reports the image busy', async (t) => {
  const builds = [
    ['tauri-release', 'build'],
    ['tauri-release', 'build-offline-installer'],
    ['nodejs', 'build'],
    ['test-bundle', 'build'],
  ]
  let shim
  for (const [name, id] of builds) {
    const steps = (await workflow(name)).jobs[id].steps
    const retry = steps.findIndex((step) => step.name === 'Retry disk image creation when macOS reports it busy')
    const build = steps.findIndex((step) => step.name === 'Build the app')
    assert.ok(retry >= 0 && retry < build, `${name} ${id} must install the retry before building`)
    assert.equal(steps[retry].if, "runner.os == 'macOS'")
    shim ??= steps[retry].run.match(/<<'SHIM'\n([\s\S]*?)\nSHIM/)[1]
  }

  const directory = await mkdtemp(path.join(tmpdir(), 'markflowy-hdiutil-'))
  t.after(() => rm(directory, { recursive: true, force: true }))
  const fake = path.join(directory, 'real-hdiutil')
  const counter = path.join(directory, 'calls')
  await writeFile(
    fake,
    `#!/bin/bash
echo "$*" >> "${counter}"
calls=$(wc -l < "${counter}")
case "$FAKE_MODE" in
  busy-twice) if [ "$calls" -le 2 ]; then echo 'hdiutil: create failed - Resource busy' >&2; exit 1; fi; touch "\${@: -1}"; exit 0 ;;
  other) echo 'hdiutil: create failed - No space left' >&2; exit 3 ;;
  *) echo "real $*"; exit 0 ;;
esac
`,
    { mode: 0o755 },
  )
  const script = path.join(directory, 'hdiutil')
  await writeFile(
    script,
    shim.replaceAll('/usr/bin/hdiutil', fake).replace(/sleep \$\(\(attempt \* 10\)\)/, 'sleep 0'),
    { mode: 0o755 },
  )
  const run = async (mode, args) => {
    await rm(counter, { force: true })
    try {
      const result = await execFileAsync(script, args, { env: { ...process.env, FAKE_MODE: mode } })
      return { code: 0, ...result, calls: (await readFile(counter, 'utf8')).trim().split('\n').length }
    } catch (error) {
      return { code: error.code, stderr: error.stderr, calls: (await readFile(counter, 'utf8')).trim().split('\n').length }
    }
  }
  const image = path.join(directory, 'rw.Zettel Notes.dmg')
  const busy = await run('busy-twice', ['create', '-srcfolder', directory, image])
  assert.equal(busy.code, 0)
  assert.equal(busy.calls, 3)
  assert.match(busy.stderr, /retrying \(2\/5\)/)
  const other = await run('other', ['create', image])
  assert.equal(other.code, 3, 'other failures must not be retried')
  assert.equal(other.calls, 1)
  const attach = await run('pass', ['attach', image])
  assert.equal(attach.stdout.trim(), `real attach ${image}`, 'other subcommands pass through untouched')
})

test('both macOS packages build on Intel runners', async () => {
  // Apple Silicon is cross-compiled: hosted arm64 runners were repeatedly not available.
  for (const name of ['tauri-release', 'test-bundle', 'nodejs']) {
    const { build } = (await workflow(name)).jobs
    assert.equal(build['runs-on'], '${{ matrix.os }}', name)
    for (const target of ['x86_64-apple-darwin', 'aarch64-apple-darwin']) {
      const entry = build.strategy.matrix.include.find((item) => item.target === target)
      assert.equal(entry?.os, 'macos-26-intel', `${name} ${target}`)
    }
  }
})

test('all release packages retain matching signatures through collection and publication', async (t) => {
  const directory = await mkdtemp(path.join(tmpdir(), 'markflowy-release-artifacts-'))
  t.after(() => rm(directory, { recursive: true, force: true }))
  const version = '1.2.3'
  const withSignatures = (assets) =>
    assets.flatMap(([source, destination]) => [
      [source, destination],
      [`${source}.sig`, `${destination}.sig`],
    ])
  const cases = [
    {
      build: 'linux',
      arch: 'x86_64',
      job: 'build',
      uploadIf: "matrix.os == 'ubuntu-22.04'",
      download: 'Download x86_64 artifacts',
      fixtures: withSignatures([
        ['deb/Zettel Notes_1.2.3_amd64.deb', 'Zettel-Notes_v1.2.3_amd64.deb'],
        ['rpm/Zettel Notes-1.2.3-1.x86_64.rpm', 'Zettel-Notes-1.2.3-1.x86_64.rpm'],
        ['appimage/Zettel Notes_1.2.3_amd64.AppImage', 'Zettel-Notes_v1.2.3_amd64.AppImage'],
      ]),
    },
    ...[
      ['x86_64', 'x64', 'Download x86_64 artifacts'],
      ['aarch64', 'aarch64', 'Download aarch64 artifacts'],
    ].map(([arch, filenameArch, download]) => ({
      build: 'macos',
      arch,
      job: 'build',
      uploadIf: `matrix.target == '${arch}-apple-darwin'`,
      download,
      fixtures: [
        [`dmg/Zettel Notes_1.2.3_${filenameArch}.dmg`, `Zettel-Notes_v1.2.3_${filenameArch}.dmg`],
        ...withSignatures([['macos/Zettel Notes.app.tar.gz', `Zettel-Notes_${filenameArch}.app.tar.gz`]]),
      ],
    })),
    {
      build: 'windows',
      arch: 'x86_64',
      job: 'build',
      uploadIf: "matrix.os == 'windows-latest'",
      download: 'Download x86_64 artifacts',
      fixtures: [
        ...withSignatures([
          ['msi/Zettel Notes_1.2.3_x64_en-US.msi', 'Zettel-Notes_v1.2.3_x64.msi'],
          ['nsis/Zettel Notes_1.2.3_x64-setup.exe', 'Zettel-Notes_v1.2.3_x64-setup.exe'],
        ]),
        ['portable/Zettel-Notes_1.2.3_x64_portable.zip', 'Zettel-Notes_v1.2.3_x64_portable.zip'],
      ],
    },
    {
      build: 'windows-offline-installer',
      arch: 'x86_64',
      job: 'build-offline-installer',
      uploadIf: "matrix.os == 'windows-latest'",
      download: 'Download offline installer artifacts',
      fixtures: withSignatures([
        ['msi/Zettel Notes_1.2.3_x64_en-US.msi', 'Zettel-Notes_v1.2.3_offline_installer_x64.msi'],
        ['nsis/Zettel Notes_1.2.3_x64-setup.exe', 'Zettel-Notes_v1.2.3_offline_installer_x64-setup.exe'],
      ]),
    },
  ]

  const steps = release.jobs.release.steps
  for (const scenario of cases) {
    const label = `${scenario.build}-${scenario.arch}`
    const buildDirectory = path.join(directory, label)
    const job = release.jobs[scenario.job]
    const matrix = job.strategy.matrix.include.find(
      (entry) => entry.build === scenario.build && entry.arch === scenario.arch,
    )
    assert.ok(matrix, `Missing build matrix entry: ${label}`)
    const bundle = `target/${matrix.target}/release/bundle`
    for (const [source] of scenario.fixtures) {
      const filename = path.join(buildDirectory, bundle, source)
      await mkdir(path.dirname(filename), { recursive: true })
      await writeFile(filename, `fixture:${label}:${source}`)
    }

    const upload = job.steps.find(
      (step) => step.uses === 'actions/upload-artifact@v4' && step.if === scenario.uploadIf,
    )
    assert.ok(upload, `Missing artifact upload: ${label}`)
    const patterns = upload.with.path
      .trim()
      .split('\n')
      .map((pattern) => pattern.replaceAll('${{ matrix.target }}', matrix.target))
    const collected = await glob(patterns, { cwd: buildDirectory })
    assert.deepEqual(
      collected.map((filename) => path.relative(bundle, filename)).sort(),
      scenario.fixtures.map(([source]) => source).sort(),
      `${label} upload must include every package and its updater signature`,
    )

    const download = steps.find((step) => step.name === scenario.download)
    const artifactName = upload.with.name.replaceAll('${{ matrix.target }}', matrix.target)
    assert.ok(path.matchesGlob(artifactName, download.with.pattern), `${label} is not downloaded`)
    for (const filename of collected) {
      const destination = path.join(directory, download.with.path, path.relative(bundle, filename))
      await mkdir(path.dirname(destination), { recursive: true })
      await copyFile(path.join(buildDirectory, filename), destination)
    }
  }
  const rename = steps
    .find((step) => step.name === 'Rename artifacts')
    .run.replaceAll('${{ env.version }}', version)
  await execFileAsync('bash', ['-e', '-c', rename], { cwd: directory })

  const publication = steps.find((step) => step.name === 'Create Release')
  const published = await glob(publication.with.files, { cwd: directory })
  assert.deepEqual(
    published.map((filename) => path.relative('artifacts', filename)).sort(),
    cases.flatMap(({ fixtures }) => fixtures.map(([, destination]) => destination)).sort(),
    'Release assets must preserve adjacent package/signature names after renaming',
  )
  for (const { build, arch, fixtures } of cases) {
    for (const [source, destination] of fixtures) {
      assert.equal(
        await readFile(path.join(directory, 'artifacts', destination), 'utf8'),
        `fixture:${build}-${arch}:${source}`,
        `Published bytes changed for ${destination}`,
      )
    }
  }
})
