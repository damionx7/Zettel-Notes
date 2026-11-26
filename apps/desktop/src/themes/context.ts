import { createContext } from 'react'
import type { ResolvedTokens } from '@zettel-notes/theme/semantic'
import { create } from 'zustand'

export const SemanticThemeContext = createContext<ResolvedTokens | null>(null)
/** Transient accent edits share the resolver and never touch persistent settings. */
export const useThemeAccentPreview = create<{ color?: string }>(() => ({}))
