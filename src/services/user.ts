import axios, { AxiosRequestConfig } from 'axios';

import type { RequestData } from '@/types';

const axiosConfig: AxiosRequestConfig = {
  baseURL: import.meta.env.VITE_API_END_POINT,
};

const instance = axios.create(axiosConfig);

const requestUserData = async (url: string, data: RequestData) => {
  try {
    const response = await instance.post(url, data);

    console.log(response);
  } catch (e) {
    throw new Error(`API 요청 실패. ${(e as Error).message}`);
  }
};

export default requestUserData;
