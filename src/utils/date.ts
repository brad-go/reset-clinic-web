export const getLocalDateString = () => {
  const localDateTime = new Date().toISOString();

  return localDateTime.replace(/T/, '-').replace(/\..+/, '');
};
