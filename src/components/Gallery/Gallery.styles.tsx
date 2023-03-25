import styled from 'styled-components';

import { Text } from '@/components/Text';
import { pxToRem } from '@/utils';

export const Container = styled.div<{ width: string | number }>`
  position: relative;
  width: ${({ width }) => width};
  max-width: ${pxToRem(480)};
  margin: 0 auto;
`;

export const Message = styled(Text)`
  margin-bottom: ${pxToRem(32)};
  font-weight: 700;

  @media ${({ theme }) => theme.breakpoints.sm} {
    font-size: ${({ theme }) => theme.fontSizes.lg};
    margin-bottom: ${pxToRem(40)};
  }

  @media ${({ theme }) => theme.breakpoints.lg} {
    font-size: ${({ theme }) => theme.fontSizes.xl};
    margin-bottom: ${pxToRem(60)};
  }
`;

export const Image = styled.img`
  width: 100%;
  object-fit: cover;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: ${pxToRem(8)};
`;
