import { pxToRem } from '@/utils';
import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
`;

export const Input = styled.input<{ isError: boolean | undefined }>`
  width: 100%;
  margin: ${pxToRem(8)} 0;
  padding: ${pxToRem(10)} ${pxToRem(16)};
  border-radius: ${pxToRem(5)};

  ${({ isError }) =>
    isError
      ? css`
          border: 1px solid ${({ theme }) => theme.colors.red};
        `
      : css`
          border: 1px solid ${({ theme }) => theme.colors.gray};
        `};
`;
