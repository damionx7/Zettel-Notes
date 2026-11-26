import { configure } from '@testing-library/react'

// Hosted Intel Mac runners are several times slower than a laptop. Tests already get 30 s
// there (testTimeout in vite.config.ts), but waitFor/findBy* still gave up after Testing
// Library's 1 s default: the v0.0.6 release failed on a PDF export test whose renderer took
// 1.2 s to start. Give async queries the same headroom on CI; locally they keep the default.
if (process.env.CI) {
  configure({ asyncUtilTimeout: 15_000 })
}
