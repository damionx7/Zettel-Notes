import { common, webSpecificTokens, webDarkTheme as styledDarkTheme } from '@zettel-notes/theme'

export type ThemeColors = typeof darkTheme
export type ScThemeProps = { theme: ThemeColors }

export { common, webSpecificTokens }

export const darkTheme = styledDarkTheme
