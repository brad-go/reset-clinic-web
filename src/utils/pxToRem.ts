const pxToRem = (pixel: number, base = 16): string => {
  return `${pixel / base}rem`;
};

export default pxToRem;
