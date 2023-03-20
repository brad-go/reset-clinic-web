import type { Color, FontSize, Breakpoint } from '@/styles/theme';

import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: Color;
    fontSizes: FontSize;
    breakpoints: Breakpoint;
  }
}
