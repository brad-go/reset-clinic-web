import { v4 as uuidv4 } from 'uuid';

import { VIDEOS } from '@/constants';
import { getRandomNumberWithRange } from '@/utils';

import type { User } from '@/types';
import type { Video, VideoType } from '@/constants/video';

export const generateRandomUniqueId = () => {
  const uniqueId = uuidv4();

  return BigInt(`0x${uniqueId.replace(/-/g, '')}`).toString();
};

const getRandomVideo = (videos: Video[], videoType: VideoType) => {
  const preferedVideos = videos.filter(({ type }) => type === videoType);

  if (preferedVideos.length > 0) {
    const index = getRandomNumberWithRange(0, preferedVideos.length - 1);

    return preferedVideos[index];
  }

  return videos[getRandomNumberWithRange(0, videos.length - 1)];
};

export const findUserPreferedVideo = (user: User) => {
  if (!user.preference) {
    return getRandomVideo(VIDEOS, 'NEW');
  }

  const filtered = VIDEOS.filter(({ id }) => !user.seenVideos.includes(id));

  return getRandomVideo(filtered, user.preference);
};
