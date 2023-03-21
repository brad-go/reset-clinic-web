import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
  ${normalize}

  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Pretendard', 'Noto Sans KR', sans-serif;
  }

  html {
    scroll-behavior: smooth;
    box-sizing: inherit;
    width: 100%;
  }
  
  body {
    margin: 0 auto;
    width: 100%;
    height: 100%;
    text-size-adjust: none;
    color: ${({ theme }) => theme.colors.black};
  }

  ol, ul, li {
    padding: 0;
    list-style: none;
  }

  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }

  button {
    padding: 0;
    border: none;
    border-radius: 0;
    background: inherit;
    box-shadow: none;
    overflow: visible;
    cursor: pointer;
  }
`;

export default GlobalStyles;
