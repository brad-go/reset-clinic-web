import { v4 as uuidv4 } from 'uuid';

export const generateRandomUniqueId = () => {
  const uniqueId = uuidv4();

  return BigInt(`0x${uniqueId.replace(/-/g, '')}`).toString();
};
