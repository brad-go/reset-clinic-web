import styled from 'styled-components';

import { pxToRem } from '@/utils';

export const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  width: 100%;
  padding: ${pxToRem(16)} ${pxToRem(20)};
  background-color: ${({ theme }) => theme.colors.primary};

  @media ${({ theme }) => theme.breakpoints.md} {
    padding: ${pxToRem(20)} ${pxToRem(24)};
  }
`;

export const Logo = styled.h1`
  margin: 0%;
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;

  @media ${({ theme }) => theme.breakpoints.md} {
    font-size: ${({ theme }) => theme.fontSizes.lg};
  }
`;
