import { pxToRem } from '@/utils';
import styled from 'styled-components';

export const Container = styled.button`
  display: block;
  width: ${pxToRem(200)};
  height: ${pxToRem(140)};
  cursor: pointer;

  @media ${({ theme }) => theme.breakpoints.md} {
    width: ${pxToRem(280)};
    height: ${pxToRem(180)};
  }
`;

export const Outer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: ${pxToRem(10)};
  border-radius: ${pxToRem(14)};
  background-color: #a1a1a1;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.85),
    inset 0px 1px 5px rgba(0, 0, 0, 0.6),
    inset 2px 2px 4px rgba(255, 255, 255, 0.8),
    inset -2px -2px 4px rgba(255, 255, 255, 0.6);
  transform: perspective(500px) rotateX(35deg);

  @media ${({ theme }) => theme.breakpoints.md} {
    padding: ${pxToRem(16)};
    border-radius: ${pxToRem(18)};
  }
`;

export const InnerHeight = styled.div`
  position: relative;
  height: 110%;
  margin-top: ${pxToRem(-15)};
  padding-bottom: ${pxToRem(15)};
  border-radius: ${pxToRem(16)};
  background-color: #a93225;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.85),
    inset 0px -2px 8px rgba(0, 0, 0, 0.35);
  transition: all 0.1s ease-in-out;

  &:hover {
    height: 105%;
    margin-top: ${pxToRem(-10)};
    padding-bottom: ${pxToRem(10)};
    background-color: #be382a;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.85),
      inset 0px -2px 6px rgba(0, 0, 0, 0.35);
  }

  &:active {
    height: 100%;
    margin-top: 0px;
    padding-bottom: 0px;
  }

  @media ${({ theme }) => theme.breakpoints.md} {
    height: 115%;
    margin-top: ${pxToRem(-24)};
  }
`;

export const Inner = styled.div`
  position: relative;
  height: 100%;
  border-radius: ${pxToRem(12)};
  background: linear-gradient(to bottom, #d85243 10%, #be382a 90%);
  box-shadow: inset 0px 0px 1px rgba(255, 255, 255, 0.85),
    inset 2px 1px 2px rgba(255, 255, 255, 0.2),
    inset -2px -1px 2px rgba(255, 255, 255, 0.4);
  transition: all 0.1s ease-in-out;
  font-size: 2.5rem;
  font-weight: bold;
  line-height: 6.8rem;
  letter-spacing: 0.05rem;
  text-align: center;
  color: #fffbfa;

  &:hover {
    background: linear-gradient(to bottom, #d43f2f 0%, #d85243 100%);
  }

  &:active {
    border-radius: ${pxToRem(16)};
    box-shadow: inset 0px 0px 4px rgba(0, 0, 0, 0.9);
    background: linear-gradient(to bottom, #be382a 0%, #d43f2f 100%);
  }

  @media ${({ theme }) => theme.breakpoints.md} {
    font-size: 3.2rem;
    font-weight: bold;
    line-height: 8.5rem;
    letter-spacing: 0.05rem;
    text-align: center;
  }
`;
