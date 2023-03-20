import { pxToRem } from '@/utils';
import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
`;

export const Input = styled.input<{ status: 'default' | 'error' }>`
  width: 100%;
  margin: ${pxToRem(8)} 0;
  padding: ${pxToRem(10)} ${pxToRem(16)};
  border-radius: ${pxToRem(5)};

  ${({ status }) =>
    status === 'default' &&
    css`
      border: 1px solid ${({ theme }) => theme.colors.gray};
    `};

  ${({ status }) =>
    status === 'error' &&
    css`
      border: 1px solid ${({ theme }) => theme.colors.red};
    `};
`;

export const StatusMessage = styled.p<{ status: 'default' | 'error' }>`
  position: absolute;
  left: ${pxToRem(4)};
  bottom: ${pxToRem(-16)};
  margin: 0;
  font-size: ${({ theme }) => theme.fontSizes.sm};

  ${({ status }) =>
    status === 'default' &&
    css`
      color: ${({ theme }) => theme.colors.black};
    `};

  ${({ status }) =>
    status === 'error' &&
    css`
      color: ${({ theme }) => theme.colors.red};
    `};
`;
