interface Window {
  __ZETTEL_NOTES_E2E__?: { errors: string[] }
  __TAURI__: {
    core: { invoke: <T>(command: string, args?: Record<string, unknown>) => Promise<T> }
  }
}
