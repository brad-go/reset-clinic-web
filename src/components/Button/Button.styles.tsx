import styled, { css } from 'styled-components';

import { pxToRem } from '@/utils';

import type { ButtonStyle, ButtonVariant } from './Button';

const getButtonVariants = (
  variant: ButtonVariant | undefined,
  clicked: boolean | undefined
) => {
  if (variant === 'outline') {
    return clicked ? 'fill' : 'outline';
  }

  return clicked ? 'outline' : 'fill';
};

const buttonVariants = {
  outline: css`
    border: 1px solid ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.primary};

    &:hover {
      background-color: ${({ theme }) => theme.colors.primary_bright};
    }

    &:active {
      background-color: ${({ theme }) => theme.colors.primary_light};
    }
  `,
  fill: css`
    border: 1px solid ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};

    &:hover {
      background-color: ${({ theme }) => theme.colors.primary_dark};
    }

    &:active {
      background-color: ${({ theme }) => theme.colors.primary_darkest};
    }
  `,
};

export const Button = styled.button<ButtonStyle>`
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
  padding: ${pxToRem(10)} ${pxToRem(20)};
  border-radius: ${pxToRem(5)};
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: 500;
  user-select: none;

  ${({ variant, clicked }) =>
    buttonVariants[getButtonVariants(variant, clicked) as ButtonVariant]}
`;
