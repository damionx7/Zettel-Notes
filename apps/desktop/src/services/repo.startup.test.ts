import NiceModal from '@ebay/nice-modal-react'
import { invoke } from '@tauri-apps/api/core'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import useRepoStore from '@/stores/useRepoStore'
import { unlockRepositoryForStartup } from './repo'

vi.mock('@tauri-apps/api/core', () => ({ invoke: vi.fn() }))
vi.mock('@ebay/nice-modal-react', () => ({ default: { show: vi.fn() } }))
vi.mock('@/i18n', () => ({ i18n: { t: (key: string) => key } }))
vi.mock('zens', () => ({ toast: { info: vi.fn() } }))

const status = (value: Record<string, unknown>) =>
  vi.mocked(invoke).mockImplementation(async (command) => {
    if (command === 'repo_status') return value
    return undefined
  })

beforeEach(() => {
  vi.mocked(invoke).mockReset()
  vi.mocked(NiceModal.show).mockReset()
  useRepoStore.getState().clear()
})

describe('unlockRepositoryForStartup', () => {
  it('opens a plain folder without asking for a password', async () => {
    status({ isRepo: false, isUnlocked: false })
    await expect(unlockRepositoryForStartup('/notes')).resolves.toBe('plain')
    expect(NiceModal.show).not.toHaveBeenCalled()
  })

  it('asks for the password of a locked repository and reports the answer', async () => {
    status({ isRepo: true, isUnlocked: false, root: null })
    vi.mocked(NiceModal.show).mockResolvedValueOnce(true)
    await expect(unlockRepositoryForStartup('/repo')).resolves.toBe('unlocked')
    expect(useRepoStore.getState()).toMatchObject({ root: '/repo', isUnlocked: true })

    vi.mocked(NiceModal.show).mockResolvedValueOnce(false)
    useRepoStore.getState().clear()
    await expect(unlockRepositoryForStartup('/repo')).resolves.toBe('locked')
    expect(useRepoStore.getState().isUnlocked).toBe(false)
  })

  it('keeps a repository the backend already holds unlocked', async () => {
    status({ isRepo: true, isUnlocked: true, root: '/repo' })
    await expect(unlockRepositoryForStartup('/repo')).resolves.toBe('unlocked')
    expect(NiceModal.show).not.toHaveBeenCalled()
    expect(useRepoStore.getState()).toMatchObject({ root: '/repo', isUnlocked: true })
  })

  it('treats a folder it cannot inspect as plain', async () => {
    vi.mocked(invoke).mockRejectedValue(new Error('gone'))
    await expect(unlockRepositoryForStartup('/missing')).resolves.toBe('plain')
  })
})
