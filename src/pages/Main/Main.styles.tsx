import styled from 'styled-components';

import { pxToRem } from '@/utils';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${pxToRem(24)};
  width: 100%;
  height: 100%;
  margin-top: 10vh;
  padding: 5vw;

  p {
    line-height: 1.5;
    white-space: pre-wrap;
  }

  @media ${({ theme }) => theme.breakpoints.md} {
    padding-top: ${pxToRem(63)};
  }
`;

export const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${pxToRem(8)};
  align-items: flex-end;
  width: 100%;
  max-width: ${pxToRem(760)};
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${pxToRem(24)};
  width: 100%;
  max-width: ${pxToRem(760)};
`;

export const SurveyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${pxToRem(24)};
  width: 100%;
  max-width: ${pxToRem(760)};
`;
