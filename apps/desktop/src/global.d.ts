import type { LegacyWindowBootstrap, WindowBootstrap } from './startup/appearance'

declare global {
  interface Window {
    __ZETTEL_NOTES_BOOTSTRAP__?: LegacyWindowBootstrap | WindowBootstrap
    /** Injected only by the native binary compiled with the e2e Cargo feature. */
    __ZETTEL_NOTES_E2E__?: { errors: string[] }
    openedUrls: string[] | string | null
  }
}

export {}
