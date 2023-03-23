export const pxToRem = (pixel: number): string => {
  const rootFontSize = parseFloat(
    getComputedStyle(document.documentElement).fontSize
  );
  const remValue = pixel / (rootFontSize || 16);

  return `${remValue}rem`;
};

export const createBreakPoint = (breakpoint: number): string => {
  if (breakpoint < 0) {
    throw new Error('화면 사이즈는 0보다 커야 합니다.');
  }

  return `screen and (min-width: ${breakpoint}rem)`;
};
