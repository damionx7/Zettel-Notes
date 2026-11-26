import { getConfig } from '@testing-library/react'
import { expect, it } from 'vitest'

it('gives waitFor and findBy* queries CI headroom on slow runners', () => {
  expect(getConfig().asyncUtilTimeout).toBe(process.env.CI ? 15_000 : 1_000)
})
