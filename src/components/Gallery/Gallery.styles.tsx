import styled from 'styled-components';

import { Text } from '@/components';
import { pxToRem } from '@/utils';

export const Container = styled.div<{ width: string | number }>`
  position: relative;
  width: ${({ width }) => width};
  max-width: ${pxToRem(840)};
  margin: 0 auto;
  aspect-ratio: 16 / 9;
`;

export const Message = styled(Text)`
  margin-bottom: ${pxToRem(8)};
  font-weight: 500;

  @media ${({ theme }) => theme.breakpoints.md} {
    font-size: ${({ theme }) => theme.fontSizes.lg};
    margin-bottom: ${pxToRem(12)};
  }

  @media ${({ theme }) => theme.breakpoints.lg} {
    font-size: ${({ theme }) => theme.fontSizes.xl};
    margin-bottom: ${pxToRem(16)};
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ButtonContainer = styled.div`
  position: absolute;
  bottom: ${pxToRem(8)};
  right: ${pxToRem(8)};

  @media ${({ theme }) => theme.breakpoints.md} {
    bottom: ${pxToRem(16)};
    right: ${pxToRem(16)};
  }

  @media ${({ theme }) => theme.breakpoints.lg} {
    bottom: ${pxToRem(24)};
    right: ${pxToRem(24)};
  }
`;
