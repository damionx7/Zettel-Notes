import type { CSSProp } from 'styled-components'
import type { webDarkTheme } from '@zettel-notes/theme'

type ThemeType = typeof webDarkTheme

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}

declare module 'react' {
  interface DOMAttributes<T> {
    css?: CSSProp
  }
}
