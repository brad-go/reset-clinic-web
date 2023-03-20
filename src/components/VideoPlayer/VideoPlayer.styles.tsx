import styled from 'styled-components';

export const Container = styled.div<{ width: string | number }>`
  position: relative;
  width: ${({ width }) => width};
  aspect-ratio: 16 / 9;
`;
