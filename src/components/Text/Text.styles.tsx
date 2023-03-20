import styled, { css } from 'styled-components';

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
    size &&
    css`
      font-size: ${theme.fontSizes[size]};
    `};

  ${({ weight }) =>
    weight &&
    css`
      font-weight: ${weight};
    `};
`;
