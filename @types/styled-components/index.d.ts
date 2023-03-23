import type { Color, FontSize, Breakpoint } from '@/styles/theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: Color;
    fontSizes: FontSize;
    breakpoints: Breakpoint;
  }
}
