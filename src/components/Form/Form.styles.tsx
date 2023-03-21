import styled from 'styled-components';

import { Text, Button } from '@/components';
import { pxToRem } from '@/utils';

export const Form = styled.form``;

export const Fieldset = styled.fieldset`
  position: relative;
  margin-bottom: ${pxToRem(28)};
  padding: 0;
  border: none;
`;

export const Legend = styled.legend`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 500;

  @media ${({ theme }) => theme.breakpoints.sm} {
    font-size: ${({ theme }) => theme.fontSizes.md};
  }
`;

export const Label = styled.label`
  position: relative;
  display: block;
  margin-bottom: ${pxToRem(28)};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 500;

  @media ${({ theme }) => theme.breakpoints.sm} {
    font-size: ${({ theme }) => theme.fontSizes.md};
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: right;
`;

export const ErorrMessage = styled(Text)`
  position: absolute;
  bottom: ${pxToRem(-14)};
  color: ${({ theme }) => theme.colors.red};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 400;

  @media ${({ theme }) => theme.breakpoints.sm} {
    font-size: ${({ theme }) => theme.fontSizes.md};
  }
`;

export const SaveButton = styled(Button)`
  width: 100%;

  @media ${({ theme }) => theme.breakpoints.md} {
    width: auto;
  }
`;

export const List = styled.ul`
  margin-bottom: ${pxToRem(18)};
`;

export const Heading = styled.h4`
  margin: ${pxToRem(12)} 0;
  font-size: ${({ theme }) => theme.fontSizes.md};
`;
