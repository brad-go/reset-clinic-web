import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.white};
`;