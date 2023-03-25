import styled from 'styled-components';

import { pxToRem } from '@/utils';
import { Button } from '@/components';

export const Container = styled.div`
  position: relative;
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

export const SurveyContainer = styled.div`
  padding: 0 5vw;
`;

export const SurveyHeading = styled.h3`
  width: 100%;
  margin-bottom: ${pxToRem(32)};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  text-align: center;
  line-height: 1.5;
`;

export const ReassignButton = styled(Button)`
  position: absolute;
  bottom: 5vh;
  left: 50%;
  transform: translateX(-50%);
`;
