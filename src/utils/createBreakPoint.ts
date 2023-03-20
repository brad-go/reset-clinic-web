const createBreakPoint = (breakpoint: number): string => {
  if (breakpoint < 0) {
    throw new Error('화면 사이즈는 0보다 커야 합니다.');
  }

  return `screen and (min-width: ${breakpoint}rem)`;
};

export default createBreakPoint;
