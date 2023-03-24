import { pxToRem } from '@/utils';
import styled, { css } from 'styled-components';

export const Container = styled.div<{ isOpen: boolean }>`
  position: fixed;
  bottom: ${({ isOpen }) => (isOpen ? 0 : pxToRem(-180))};
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: ${pxToRem(24)};
  padding-bottom: 0;
  border-radius: ${pxToRem(24)} ${pxToRem(24)} 0 0;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.6);
  transition: bottom 0.3s ease-in-out;
  pointer-events: ${({ isOpen }) => (isOpen ? 'auto' : 'none')};
  z-index: 101;

  @media ${({ theme }) => theme.breakpoints.sm} {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    bottom: none;
    top: 50%;
    left: 50%;
    width: ${pxToRem(360)};
    height: ${pxToRem(240)};
    padding: ${pxToRem(32)};
    border-radius: ${pxToRem(16)};
    transform: translate(-50%, -50%);
    box-shadow: none;
    opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  }
`;

export const LinkContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, ${pxToRem(48)});
  grid-column-gap: ${pxToRem(8)};
  justify-content: space-between;
  align-items: center;
  margin: ${pxToRem(32)} 0;
`;

export const Heading = styled.h2`
  margin-top: ${pxToRem(8)};
  font-size: ${({ theme }) => theme.fontSizes.lg};

  @media ${({ theme }) => theme.breakpoints.sm} {
    text-align: center;
  }
`;

export const URLShareButton = styled.button`
  width: ${pxToRem(48)};
  height: ${pxToRem(48)};
  margin-top: ${pxToRem(-3)};
  border-radius: ${pxToRem(24)};
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSizes.md};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary_dark};
  }
`;

export const KakaoShareButton = styled.a`
  cursor: pointer;
`;

export const KakaoIcon = styled.img`
  width: ${pxToRem(48)};
  height: ${pxToRem(48)};
  border-radius: ${pxToRem(24)};
`;

export const CloseButton = styled.button`
  display: none;

  @media ${({ theme }) => theme.breakpoints.sm} {
    position: absolute;
    bottom: 0;
    left: 0;
    display: block;
    width: 100%;
    padding: ${pxToRem(16)};
    border-top: 1px solid #dbdbdb;
    border-radius: 0 0 ${pxToRem(16)} ${pxToRem(16)};
    background-color: ${({ theme }) => theme.colors.white};
    color: #6f6f6f;

    &:hover {
      background-color: #f2f2f2;
    }
  }
`;

export const Alert = styled.div<{ isCopied: boolean }>`
  position: fixed;
  left: 50%;
  width: max-content;
  padding: ${pxToRem(8)} ${pxToRem(16)};
  border-radius: ${pxToRem(5)};
  background-color: ${({ theme }) => `${theme.colors.primary_dark}80`};
  color: ${({ theme }) => theme.colors.white};
  transform: translateX(-50%);
  transition: bottom 0.3s ease-in-out, opacity 0.3s ease-in-out;
  z-index: 100;

  ${({ isCopied }) =>
    isCopied
      ? css`
          bottom: 5vh;
          opacity: 1;
        `
      : css`
          bottom: 0;
          opacity: 0;
        `}
`;

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => `${theme.colors.black}4D`};
  z-index: 90;
`;
