import styled from 'styled-components';

import { Text } from '@/components';
import { pxToRem } from '@/utils';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

export const Header = styled(Text)`
  margin-bottom: ${pxToRem(16)};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  text-align: center;
  white-space: pre-wrap;
  line-height: 1.4;

  @media ${({ theme }) => theme.breakpoints.md} {
    font-size: ${({ theme }) => theme.fontSizes.xl};
  }
`;

export const Footer = styled(Text)`
  margin-top: ${pxToRem(8)};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: 700;

  @media ${({ theme }) => theme.breakpoints.md} {
    margin-top: ${pxToRem(16)};
    font-size: ${({ theme }) => theme.fontSizes.xl};
  }
`;
