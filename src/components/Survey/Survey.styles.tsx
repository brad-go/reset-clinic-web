import styled from 'styled-components';

import { pxToRem } from '@/utils';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${pxToRem(24)};
  width: 100%;
  max-width: ${pxToRem(760)};
  line-height: 1.5;
  word-break: keep-all;
`;
