import styled, { css } from 'styled-components';

import { pxToRem } from '@/utils';

import type { FontSize } from '@/styles/theme';
import type { TextProps } from './Text';

export const Text = styled.p<TextProps>`
  ${({ align }) =>
    align &&
    css`
      text-align: ${align};
    `};

  ${({ theme, color }) =>
    color &&
    css`
      color: ${theme.colors[color]};
    `}

  ${({ theme, size }) =>
    typeof size === 'number'
      ? css`
          font-size: ${pxToRem(size)};
        `
      : css`
          font-size: ${theme.fontSizes[size as keyof FontSize]};
        `};

  ${({ weight }) =>
    weight &&
    css`
      font-weight: ${weight};
    `};
`;
