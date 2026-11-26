import assert from 'node:assert/strict'
import { execFile } from 'node:child_process'
import { copyFile, mkdir, mkdtemp, readFile, rm, utimes, writeFile } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import path from 'node:path'
import test from 'node:test'
import { fileURLToPath } from 'node:url'
import { promisify } from 'node:util'
import glob from 'fast-glob'
import yaml from 'yaml'

const execFileAsync = promisify(execFile)
const workflow = async (name) =>
  yaml.parse(await readFile(new URL(`../.github/workflows/${name}.yml`, import.meta.url), 'utf8'))
const release = await workflow('tauri-release')
const quality = await workflow('test-ci')

// actions/upload-artifact stores each file relative to the deepest folder shared by the
// patterns' non-wildcard parts. One pattern under bundle/macos/ therefore drops "macos/".
export function artifactRoot(patterns) {
  const roots = patterns.map((pattern) => {
    const parts = path.posix.normalize(pattern).split('/')
    const wildcard = parts.findIndex((part) => /[*?[]/.test(part))
    return wildcard < 0 ? parts.slice(0, -1) : parts.slice(0, wildcard)
  })
  const shared = []
  for (let index = 0; roots.every((root) => index < root.length); index++) {
    if (!roots.every((root) => root[index] === roots[0][index])) break
    shared.push(roots[0][index])
  }
  return shared.join('/') || '.'
}

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
  for (const id of ['build', 'macos-universal', 'build-offline-installer', 'release']) {
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
    'yarn workspace @zettel-notes/desktop build:types',
    'yarn workspace @zettel-notes/desktop test:e2e:types',
    'yarn workspace @zettel-notes/desktop test:e2e:runner',
    'yarn test',
    'cargo test --workspace --lib --tests --locked',
    'yarn test:security-dependencies',
    'yarn test:release-workflows',
    'yarn test:dev-desktop',
    'yarn translate:check',
  ]) {
    assert.ok(commands.includes(command), `Missing release gate: ${command}`)
  }
  for (const step of steps) assert.notEqual(step['continue-on-error'], true, step.name)
})

test('the gate runs on Linux; macOS and Windows tests run only by hand', () => {
  assert.equal(quality.jobs.test['runs-on'], 'ubuntu-22.04')
  assert.ok('workflow_dispatch' in quality.on)
  const platforms = quality.jobs.platforms
  assert.equal(platforms.if, "${{ github.event_name == 'workflow_dispatch' }}")
  assert.equal(platforms['runs-on'], '${{ matrix.os }}')
  assert.deepEqual(platforms.strategy.matrix.os, ['macos-26-intel', 'windows-latest'])
  assert.equal(platforms.strategy['fail-fast'], false)
  const commands = platforms.steps.map((step) => step.run).filter(Boolean)
  for (const command of ['yarn test', 'cargo test --workspace --lib --tests --locked']) {
    assert.ok(commands.includes(command), `Missing platform check: ${command}`)
  }
  for (const step of platforms.steps) assert.notEqual(step['continue-on-error'], true, step.name)
})

test('the manual macOS run includes native E2E and always retains diagnostics', () => {
  const steps = quality.jobs.platforms.steps
  const frontend = steps.findIndex((step) => step.run === 'yarn build')
  const native = steps.findIndex(
    (step) => step.run === 'yarn workspace @zettel-notes/desktop tauri:build:e2e',
  )
  const execution = steps.findIndex(
    (step) => step.run === 'yarn workspace @zettel-notes/desktop test:e2e',
  )
  assert.ok(frontend >= 0 && native > frontend && execution > native)
  for (const step of [steps[native], steps[execution]]) {
    assert.equal(step.if, "runner.os == 'macOS'", 'Native E2E must run on every manual Mac run')
    assert.equal(step['continue-on-error'], undefined)
  }
  assert.equal(steps[execution]['timeout-minutes'], 20)
  const artifact = steps.find((step) => step.uses?.startsWith('actions/upload-artifact@'))
  assert.equal(artifact.if, "always() && runner.os == 'macOS'")
  assert.equal(artifact.with.path, 'apps/desktop/e2e/reports/')
  assert.equal(artifact.with['retention-days'], 7)
  assert.ok(steps.indexOf(artifact) > execution)
})

test('installers are built only for tag releases or by hand', async () => {
  assert.deepEqual(Object.keys(release.on), ['push'])
  assert.deepEqual(Object.keys(release.on.push), ['tags'])
  for (const name of ['nodejs', 'test-bundle']) {
    const triggers = (await workflow(name)).on
    assert.deepEqual(
      Object.keys(triggers),
      ['workflow_dispatch'],
      `${name} must not build on every commit`,
    )
  }
  assert.deepEqual(quality.on.push.branches, ['**'], 'Test CI must keep checking every commit')
  assert.ok('workflow_call' in quality.on)
})

test('a tag builds only the committed version, checked before anything else runs', () => {
  const steps = release.jobs.version.steps
  assert.equal(release.jobs.version.needs, undefined, 'the version check must run first')
  assert.ok(
    steps.some((step) => step.run === 'node scripts/bump-version.mjs --check "$GITHUB_REF_NAME"'),
  )
  assert.equal(release.jobs.quality.needs, 'version')
  for (const id of ['build', 'macos-universal', 'build-offline-installer', 'release']) {
    assert.ok(prerequisites(release.jobs, id).has('version'), `${id} skips the version check`)
  }
  // Nothing may rewrite the version during a release: what is tagged is what ships.
  for (const [id, job] of Object.entries(release.jobs)) {
    for (const step of job.steps ?? []) {
      assert.doesNotMatch(step.run ?? '', /c\.version\s*=/, `${id}: ${step.name}`)
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
    const retry = steps.findIndex(
      (step) => step.name === 'Retry disk image creation when macOS reports it busy',
    )
    const build = steps.findIndex((step) => step.name === 'Build the app')
    assert.ok(retry >= 0 && retry < build, `${name} ${id} must install the retry before building`)
    assert.equal(steps[retry].if, "runner.os == 'macOS'")
    shim ??= steps[retry].run.match(/<<'SHIM'\n([\s\S]*?)\nSHIM/)[1]
  }

  const directory = await mkdtemp(path.join(tmpdir(), 'zettel-notes-hdiutil-'))
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
      return {
        code: 0,
        ...result,
        calls: (await readFile(counter, 'utf8')).trim().split('\n').length,
      }
    } catch (error) {
      return {
        code: error.code,
        stderr: error.stderr,
        calls: (await readFile(counter, 'utf8')).trim().split('\n').length,
      }
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
  assert.equal(
    attach.stdout.trim(),
    `real attach ${image}`,
    'other subcommands pass through untouched',
  )
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

test('releases publish one macOS disk image that holds both architectures', async (t) => {
  const job = release.jobs['macos-universal']
  assert.deepEqual([job.needs].flat(), ['build'])
  assert.equal(job['runs-on'], 'macos-26-intel')
  assert.ok([release.jobs.release.needs].flat().includes('macos-universal'))
  const names = job.steps.map((step) => step.name)
  const retry = names.indexOf('Retry disk image creation when macOS reports it busy')
  const image = names.indexOf('Build the universal disk image')
  assert.ok(retry >= 0 && retry < image, 'the hdiutil retry must be installed first')
  const download = job.steps.find((step) => step.name === 'Download the macOS apps')
  for (const target of ['x86_64-apple-darwin', 'aarch64-apple-darwin']) {
    const upload = release.jobs.build.steps.find(
      (step) =>
        step.uses?.startsWith('actions/upload-artifact@') &&
        step.if === `matrix.target == '${target}'`,
    )
    const artifact = upload.with.name.replaceAll('${{ matrix.target }}', target)
    assert.ok(path.matchesGlob(artifact, download.with.pattern), `${artifact} is not downloaded`)
    assert.ok(job.steps[image].run.includes(`${download.with.path}/${artifact}/`), artifact)
    assert.doesNotMatch(upload.with.path, /\.dmg/, 'per-architecture images are not published')
  }

  // Run the script with stand-ins for the macOS tools. A fake executable's bytes name its
  // architectures, which the fake lipo reads and joins.
  const directory = await mkdtemp(path.join(tmpdir(), 'zettel-notes-universal-'))
  t.after(() => rm(directory, { recursive: true, force: true }))
  const bin = path.join(directory, 'bin')
  const log = path.join(directory, 'calls')
  await mkdir(bin)
  const tools = {
    lipo: `if [ "$1" = -archs ]; then cat "$2"; echo; exit 0; fi
[ "$1" = -create ] || exit 9
printf '%s %s' "$(cat "$2")" "$(cat "$3")" > "$5"`,
    codesign: 'exit 0',
    hdiutil: 'touch "${@: -1}"',
  }
  for (const [tool, body] of Object.entries(tools)) {
    await writeFile(
      path.join(bin, tool),
      `#!/bin/bash\necho "${tool} $*" >> "${log}"\n${body}\n`,
      { mode: 0o755 },
    )
  }
  const app = async (label, arch) => {
    const root = path.join(directory, label)
    const macos = path.join(root, 'Zettel Notes.app', 'Contents', 'MacOS')
    await mkdir(macos, { recursive: true })
    await writeFile(path.join(macos, 'zettel-notes'), arch)
    await writeFile(path.join(root, 'Zettel Notes.app', 'Contents', 'Info.plist'), 'plist')
    const archive = path.join(directory, `${label}.app.tar.gz`)
    await execFileAsync('tar', ['-czf', archive, '-C', root, 'Zettel Notes.app'])
    return archive
  }
  const script = fileURLToPath(new URL('./macos-universal-dmg.sh', import.meta.url))
  const env = { ...process.env, PATH: `${bin}:${process.env.PATH}` }
  const output = path.join(directory, 'out', 'Zettel Notes_1.2.3_universal.dmg')
  const x64 = await app('x64', 'x86_64')
  const arm64 = await app('arm64', 'arm64')

  await execFileAsync('bash', [script, x64, arm64, output], { env })
  const calls = (await readFile(log, 'utf8')).trim().split('\n')
  assert.ok(calls.some((call) => call.startsWith('lipo -create ')))
  assert.ok(calls.some((call) => /^codesign --force --sign - .*Zettel Notes\.app$/.test(call)))
  const create = calls.find((call) => call.startsWith('hdiutil create '))
  assert.ok(create?.endsWith(output), create)
  await readFile(output)

  // An "Apple Silicon" app that is really an Intel build must stop the release.
  await rm(log)
  const wrong = await app('wrong', 'x86_64')
  await assert.rejects(execFileAsync('bash', [script, x64, wrong, output], { env }), (error) => {
    assert.match(error.stderr, /not arm64/)
    return true
  })
  assert.ok(!(await readFile(log, 'utf8')).includes('hdiutil create'))
})

test('all release packages retain matching signatures through collection and publication', async (t) => {
  const directory = await mkdtemp(path.join(tmpdir(), 'zettel-notes-release-artifacts-'))
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
      // Per-architecture disk images are not published: see the universal one below.
      fixtures: withSignatures([
        ['macos/Zettel Notes.app.tar.gz', `Zettel-Notes_${filenameArch}.app.tar.gz`],
      ]),
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
        [
          'nsis/Zettel Notes_1.2.3_x64-setup.exe',
          'Zettel-Notes_v1.2.3_offline_installer_x64-setup.exe',
        ],
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
      (step) => step.uses?.startsWith('actions/upload-artifact@') && step.if === scenario.uploadIf,
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
    const root = artifactRoot(patterns)
    for (const filename of collected) {
      const destination = path.join(directory, download.with.path, path.relative(root, filename))
      await mkdir(path.dirname(destination), { recursive: true })
      await copyFile(path.join(buildDirectory, filename), destination)
    }
  }
  // The universal disk image comes from its own job, not from a build matrix entry.
  const universal = release.jobs['macos-universal']
  const universalUpload = universal.steps.find((step) =>
    step.uses?.startsWith('actions/upload-artifact@'),
  )
  const universalDownload = steps.find(
    (step) => step.name === 'Download the universal macOS disk image',
  )
  assert.equal(universalDownload.with.name, universalUpload.with.name)
  const universalImage = path.join(
    directory,
    universalDownload.with.path,
    `Zettel Notes_${version}_universal.dmg`,
  )
  await mkdir(path.dirname(universalImage), { recursive: true })
  await writeFile(universalImage, 'fixture:macos-universal')
  const universalAsset = `Zettel-Notes_v${version}_macOS_universal.dmg`

  const rename = steps
    .find((step) => step.name === 'Rename artifacts')
    .run.replaceAll('${{ env.version }}', version)
  await execFileAsync('bash', ['-e', '-c', rename], { cwd: directory })

  const publication = steps.find((step) => step.name === 'Create Release')
  const published = await glob(publication.with.files, { cwd: directory })
  assert.deepEqual(
    published.map((filename) => path.relative('artifacts', filename)).sort(),
    [
      universalAsset,
      ...cases.flatMap(({ fixtures }) => fixtures.map(([, destination]) => destination)),
    ].sort(),
    'Release assets must preserve adjacent package/signature names after renaming',
  )
  assert.equal(
    await readFile(path.join(directory, 'artifacts', universalAsset), 'utf8'),
    'fixture:macos-universal',
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

test('plain version tags publish full releases; suffixed tags publish pre-releases', () => {
  const create = release.jobs.release.steps.find((step) => step.name === 'Create Release')
  assert.equal(create.with.draft, false)
  assert.equal(create.with.prerelease, "${{ contains(github.ref_name, '-') }}")
})

test('workflows use only actions that run on Node 24', async () => {
  // GitHub is retiring the Node 20 runtime for actions. These are the first majors of each
  // action that run on Node 24; anything older, or not listed here, must be checked first.
  const firstNode24Major = {
    'actions/checkout': 5,
    'actions/setup-node': 5,
    'actions/cache': 5,
    'actions/cache/restore': 5,
    'actions/cache/save': 5,
    'actions/upload-artifact': 6,
    'actions/download-artifact': 7,
    'softprops/action-gh-release': 3,
    'peaceiris/actions-gh-pages': 4,
  }
  const pinned = {
    // v2.9.3, the first rust-cache release on Node 24.
    'Swatinem/rust-cache': '2201cc584a476d1b508be977bbe4b7d1c7a52e9c',
  }
  const files = await glob('.github/workflows/*.yml', {
    cwd: fileURLToPath(new URL('..', import.meta.url)),
  })
  assert.ok(files.length > 0)
  for (const file of files) {
    const { jobs } = yaml.parse(await readFile(new URL(`../${file}`, import.meta.url), 'utf8'))
    for (const [id, job] of Object.entries(jobs)) {
      for (const { uses } of job.steps ?? []) {
        if (!uses || uses.startsWith('./') || uses.startsWith('dtolnay/rust-toolchain@')) continue
        const [action, ref] = uses.split('@')
        const label = `${file} ${id}: ${uses}`
        if (pinned[action]) {
          assert.equal(ref, pinned[action], label)
          continue
        }
        assert.ok(action in firstNode24Major, `${label} is not known to run on Node 24`)
        assert.match(ref, /^v\d+/, label)
        assert.ok(Number(ref.slice(1).split('.')[0]) >= firstNode24Major[action], label)
      }
    }
  }
})

test('CI reuses caches that only main saves, and releases never replay Turbo builds', async (t) => {
  const index = (steps, name) => steps.findIndex((step) => step.name === name)
  for (const id of ['test', 'platforms']) {
    const steps = quality.jobs[id].steps
    const install = index(steps, 'Install dependencies')
    for (const name of ['Restore the Yarn package cache', 'Restore the Turbo build cache']) {
      assert.ok(index(steps, name) >= 0 && index(steps, name) < install, `${id}: ${name}`)
    }
    const rust = steps.find((step) => step.uses?.startsWith('Swatinem/rust-cache'))
    if (id === 'platforms') {
      // Manual runs only restore what main saved.
      assert.ok(!steps.some((step) => step.uses?.startsWith('actions/cache/save')), id)
      assert.equal(rust.with['save-if'], false, id)
      continue
    }
    for (const name of [
      'Keep the Turbo cache to recent builds',
      'Save the Turbo build cache',
      'Save the Yarn package cache',
    ]) {
      const step = steps[index(steps, name)]
      assert.ok(step, `${id}: ${name}`)
      assert.equal(step.if, "github.ref == 'refs/heads/main'", `${id}: ${name}`)
      assert.ok(
        index(steps, name) > index(steps, 'Run Test'),
        `${id}: ${name} saves before the tests`,
      )
    }
    assert.equal(rust.with['save-if'], "${{ github.ref == 'refs/heads/main' }}", id)
  }

  // Release builds compile the frontend fresh: they restore only the Yarn cache and never
  // save a cache of their own.
  for (const name of ['tauri-release', 'nodejs', 'test-bundle']) {
    const jobs = Object.entries((await workflow(name)).jobs)
    for (const [id, job] of jobs.filter(([, job]) => job.steps)) {
      const steps = job.steps
      assert.ok(!steps.some((step) => step.with?.path === '.turbo/cache'), `${name}.${id}`)
      assert.ok(!steps.some((step) => step.uses?.startsWith('actions/cache/save')), `${name}.${id}`)
      if (index(steps, 'Install dependencies') >= 0) {
        const yarn = index(steps, 'Restore the Yarn package cache')
        assert.ok(yarn >= 0 && yarn < index(steps, 'Install dependencies'), `${name}.${id}`)
      }
    }
  }

  const trim =
    quality.jobs.test.steps[index(quality.jobs.test.steps, 'Keep the Turbo cache to recent builds')]
      .run
  const directory = await mkdtemp(path.join(tmpdir(), 'turbo-trim-'))
  t.after(() => rm(directory, { recursive: true, force: true }))
  // Set the times from Node: `touch -d @…` is GNU-only and fails on the macOS runner.
  await mkdir(path.join(directory, '.turbo/cache'), { recursive: true })
  for (let i = 1; i <= 700; i++) {
    const entry = path.join(directory, `.turbo/cache/entry-${i}`)
    await writeFile(entry, '')
    await utimes(entry, 1_700_000_000 + i, 1_700_000_000 + i)
  }
  await execFileAsync('bash', ['-e', '-c', trim], { cwd: directory })
  const kept = await glob('.turbo/cache/*', { cwd: directory })
  assert.equal(kept.length, 600)
  assert.ok(kept.includes('.turbo/cache/entry-700') && !kept.includes('.turbo/cache/entry-100'))
  await execFileAsync('bash', ['-e', '-c', trim], {
    cwd: await mkdtemp(path.join(tmpdir(), 'turbo-none-')),
  })
})

test('Test CI cancels superseded branch runs and skips document-only pushes', async () => {
  assert.equal(quality.concurrency.group, 'test-ci-${{ github.event_name }}-${{ github.ref }}')
  const cancel = quality.concurrency['cancel-in-progress']
  assert.match(cancel, /github\.ref != 'refs\/heads\/main'/)
  assert.match(cancel, /!startsWith\(github\.ref, 'refs\/tags\/'\)/)

  const ignored = quality.on.push['paths-ignore']
  const skips = (file) => ignored.some((pattern) => path.matchesGlob(file, pattern))
  for (const file of ['README.md', 'FORK.md', 'LICENSE', '.github/ISSUE_TEMPLATE/bug.md']) {
    assert.ok(skips(file), `${file} should not start Test CI`)
  }
  for (const file of [
    'docs/CLI.md',
    'packages/editor/src/playground/test-md/basic.md',
    'apps/desktop/src/main.tsx',
    '.github/workflows/test-ci.yml',
  ]) {
    assert.ok(!skips(file), `${file} must still start Test CI`)
  }

  // The translation check runs inside the gate job, so it has no workflow of its own.
  const files = await glob('.github/workflows/*.yml', {
    cwd: fileURLToPath(new URL('..', import.meta.url)),
  })
  assert.ok(!files.includes('.github/workflows/translate-check.yml'))
  assert.ok(quality.jobs.test.steps.some((step) => step.run?.includes('yarn translate:check')))
})

test('release notes list the commits since the previous tag, for both the release and the updater', () => {
  const steps = release.jobs.release.steps
  const checkout = steps.findIndex((step) => step.uses?.startsWith('actions/checkout@'))
  const notes = steps.findIndex((step) => step.name?.startsWith('Write release notes'))
  const create = steps.findIndex((step) => step.name === 'Create Release')
  const updater = steps.find((step) => step.name === 'Updater JSON')
  assert.equal(steps[checkout].with['fetch-depth'], 0, 'notes need the full history and tags')
  assert.ok(checkout < notes && notes < create)
  assert.match(steps[notes].run, /git describe --tags --abbrev=0 --match 'v\*'/)
  assert.match(steps[notes].run, /> apps\/desktop\/release-notes\.md/)
  assert.equal(steps[create].with.name, 'Zettel Notes v${{ env.version }}')
  assert.equal(steps[create].with.body_path, 'release.txt')
  assert.match(updater.run, /yarn updater .*--logfile=release-notes\.md/)
})
