import styled from 'styled-components';

import { Text } from '@/components';
import { pxToRem } from '@/utils';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

export const Header = styled(Text)`
  white-space: pre-wrap;
`;

export const Footer = styled(Text)`
  margin-top: ${pxToRem(8)};

  @media ${({ theme }) => theme.breakpoints.md} {
    margin-top: ${pxToRem(16)};
    font-size: ${({ theme }) => theme.fontSizes.lg};
  }
`;
