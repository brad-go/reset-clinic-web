const pxToRem = (pixel: number): string => {
  const rootFontSize = parseFloat(
    getComputedStyle(document.documentElement).fontSize
  );
  const remValue = pixel / (rootFontSize || 16);

  return `${remValue}rem`;
};

export default pxToRem;
