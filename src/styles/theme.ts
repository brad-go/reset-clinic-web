import { DefaultTheme } from 'styled-components';
import { pxToRem, createBreakPoint } from '@/utils';

export const colors = {
  primary_bright: '#d0ccfc',
  primary_light: '#938af8',
  primary: '#6558F5',
  primary_dark: '#5046c4',
  primary_darkest: '#3c3493',
  black: '#444444',
  white: '#FFFFFF',
};

export const fontSizes = {
  xl: pxToRem(24),
  lg: pxToRem(20),
  md: pxToRem(16),
  sm: pxToRem(14),
  xs: pxToRem(12),
};

export const breakpoints = {
  sm: createBreakPoint(30),
  md: createBreakPoint(48),
  lg: createBreakPoint(62),
  xl: createBreakPoint(80),
};

export type Color = typeof colors;
export type FontSize = typeof fontSizes;
export type Breakpoint = typeof breakpoints;

export const theme: DefaultTheme = {
  colors,
  fontSizes,
  breakpoints,
};
