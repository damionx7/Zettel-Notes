#!/usr/bin/env node
// Sets or checks the app version in every file that carries it.
//
//   node scripts/bump-version.mjs patch|minor|major|X.Y.Z   write the next version
//   node scripts/bump-version.mjs --check [vX.Y.Z]          all files agree (and match the tag)
//
// The release workflow runs `--check "$GITHUB_REF_NAME"`, so a tag only builds when the
// committed version is the tag's version. Bump, merge, then tag. This script never commits,
// tags or pushes. Edits are targeted line replacements, so the files keep their formatting.

import { readFileSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const CRATE = 'zettel-notes'
const SEMVER = /^\d+\.\d+\.\d+$/

export const VERSION_FILES = {
  tauriConf: 'apps/desktop/src-tauri/tauri.conf.json',
  cargoToml: 'apps/desktop/src-tauri/Cargo.toml',
  cargoLock: 'Cargo.lock',
  packageJson: 'apps/desktop/package.json',
}

// Each file: how to find the version line, and how to rewrite it.
const PATTERNS = {
  // The first top-level "version" key (two-space indent) of a JSON file.
  tauriConf: /^( {2}"version": ")([^"]*)(",?)$/m,
  packageJson: /^( {2}"version": ")([^"]*)(",?)$/m,
  // `version` inside the [package] table, before any other table starts.
  cargoToml: /^(\[package\][^[]*?\nversion = ")([^"]*)(")/m,
  // The lock entry of the app crate itself.
  cargoLock: new RegExp(`^(\\[\\[package\\]\\]\\nname = "${CRATE}"\\nversion = ")([^"]*)(")`, 'm'),
}

const read = (root, key) => readFileSync(path.join(root, VERSION_FILES[key]), 'utf8')

export function readVersions(root) {
  const versions = {}
  for (const key of Object.keys(VERSION_FILES)) {
    const match = read(root, key).match(PATTERNS[key])
    if (!match) throw new Error(`No version found in ${VERSION_FILES[key]}`)
    versions[key] = match[2]
  }
  return versions
}

export function nextVersion(current, how) {
  if (SEMVER.test(how)) return how
  if (!SEMVER.test(current)) throw new Error(`Current version "${current}" is not X.Y.Z`)
  const [major, minor, patch] = current.split('.').map(Number)
  if (how === 'major') return `${major + 1}.0.0`
  if (how === 'minor') return `${major}.${minor + 1}.0`
  if (how === 'patch') return `${major}.${minor}.${patch + 1}`
  throw new Error(`Expected patch, minor, major or X.Y.Z, got "${how}"`)
}

export function writeVersion(root, version) {
  if (!SEMVER.test(version)) throw new Error(`"${version}" is not X.Y.Z`)
  for (const key of Object.keys(VERSION_FILES)) {
    const file = path.join(root, VERSION_FILES[key])
    const text = readFileSync(file, 'utf8')
    if (!PATTERNS[key].test(text)) throw new Error(`No version found in ${VERSION_FILES[key]}`)
    writeFileSync(file, text.replace(PATTERNS[key], `$1${version}$3`))
  }
}

/** Returns the problems; an empty list means everything agrees. */
export function checkVersions(root, tag) {
  const versions = readVersions(root)
  const problems = []
  const distinct = new Set(Object.values(versions))
  if (distinct.size !== 1) {
    problems.push(
      'Version files disagree: ' +
        Object.entries(versions)
          .map(([key, value]) => `${VERSION_FILES[key]}=${value}`)
          .join(', '),
    )
  }
  if (tag !== undefined) {
    const wanted = tag.replace(/^refs\/tags\//, '').replace(/^v/, '')
    if (versions.tauriConf !== wanted) {
      problems.push(
        `Tag ${tag} does not match the committed version ${versions.tauriConf}. ` +
          `Run "node scripts/bump-version.mjs ${SEMVER.test(wanted) ? wanted : 'patch'}", merge it, then tag that commit.`,
      )
    }
  }
  return problems
}

function main(argv) {
  const root = process.env.ZETTEL_NOTES_ROOT ?? path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
  const [command, argument] = argv

  if (command === '--check') {
    const problems = checkVersions(root, argument)
    if (problems.length > 0) {
      for (const problem of problems) console.error(`::error::${problem}`)
      return 1
    }
    console.log(`Version ${readVersions(root).tauriConf} is consistent${argument ? ` with ${argument}` : ''}.`)
    return 0
  }

  if (!command) {
    console.error('Usage: node scripts/bump-version.mjs patch|minor|major|X.Y.Z | --check [vX.Y.Z]')
    return 2
  }

  const current = readVersions(root).tauriConf
  const version = nextVersion(current, command)
  writeVersion(root, version)
  console.log(`Version ${current} -> ${version}. Next:`)
  console.log(`  git commit -am "chore: release v${version}"   (then merge it into main)`)
  console.log(`  git tag v${version} <merged commit> && git push origin v${version}`)
  return 0
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  try {
    process.exitCode = main(process.argv.slice(2))
  } catch (error) {
    console.error(error.message)
    process.exitCode = 1
  }
}
