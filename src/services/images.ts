import axios from 'axios';

const getImages = async () => {
  try {
    const response = await axios.get(import.meta.env.VITE_IMAGE_END_POINT);

    return response.data;
  } catch (e) {
    throw new Error(`API 요청 실패. ${(e as Error).message}`);
  }
};

export default getImages;
