import axios, { AxiosRequestConfig } from 'axios';

import { VIDEOS } from '@/constants';
import { getRandomNumberWithRange } from '@/utils';

import type { User, RequestData } from '@/types';
import type { Video, VideoType } from '@/constants/video';

const axiosConfig: AxiosRequestConfig = {
  baseURL: import.meta.env.VITE_API_END_POINT,
};

const instance = axios.create(axiosConfig);

export const requestUserData = async (url: string, data: RequestData) => {
  try {
    const response = await instance.post(url, data);

    console.log(response);
  } catch (e) {
    throw new Error(`API 요청 실패. ${(e as Error).message}`);
  }
};

const getRandomVideo = (videos: Video[], videoType: VideoType) => {
  const preferedVideos = videos.filter(({ type }) => type === videoType);
  const index = getRandomNumberWithRange(0, preferedVideos.length - 1);

  return preferedVideos[index];
};

export const findUserPreferedVideo = (user: User) => {
  if (!user.preference) {
    return getRandomVideo(VIDEOS, 'NEW');
  }

  return getRandomVideo(VIDEOS, user.preference);
};
