import styled from 'styled-components';

import { pxToRem } from '@/utils';

export const Select = styled.ul`
  display: grid;
  grid-template-columns: repeat(1fr);
  gap: ${pxToRem(8)};
  margin: ${pxToRem(8)} 0;

  @media ${({ theme }) => theme.breakpoints.md} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const Option = styled.li`
  & > button {
    width: 100%;
  }
`;
