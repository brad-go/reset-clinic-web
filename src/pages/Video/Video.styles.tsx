import { pxToRem } from '@/utils';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  padding-top: ${pxToRem(50)};

  @media ${({ theme }) => theme.breakpoints.md} {
    padding-top: ${pxToRem(63)};
  }
`;
