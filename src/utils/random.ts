export const getRandomNumberWithRange = (min: number, max: number) => {
  if (!Number.isInteger(min) || !Number.isInteger(max)) {
    throw new Error('정수만 입력할 수 있습니다.');
  }

  if (min < Number.MIN_SAFE_INTEGER || max > Number.MAX_SAFE_INTEGER) {
    throw new Error('최솟값이나 최댓값이 범위를 벗어났습니다.');
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
};
