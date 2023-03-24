import { Preference } from '@/types';

export type VideoType = Preference | 'NEW';

export interface Video {
  id: number;
  url: string;
  type: VideoType;
}

export const VIDEOS: Video[] = [
  {
    id: 1,
    url: 'https://www.youtube.com/shorts/ySoamnNhJ44',
    type: 'NEW',
  },
  {
    id: 2,
    url: 'https://www.youtube.com/shorts/kn3fJqHgI-0',
    type: 'MOTIVATION',
  },
  {
    id: 3,
    url: 'https://www.youtube.com/watch?v=ESXK4eeEWJI',
    type: 'COGNITIVE_INTERVENTION',
  },
  {
    id: 4,
    url: 'https://youtu.be/HWDPdEDwBJ4',
    type: 'COGNITIVE_INTERVENTION',
  },
  {
    id: 5,
    url: 'https://youtu.be/nMG3gc2A8Sg',
    type: 'COGNITIVE_INTERVENTION',
  },
  {
    id: 6,
    url: 'https://youtu.be/iaXgae8mmJM',
    type: 'COGNITIVE_INTERVENTION',
  },
  {
    id: 7,
    url: 'https://youtu.be/fp7q5JxEydU',
    type: 'COGNITIVE_INTERVENTION',
  },
  {
    id: 8,
    url: 'https://www.youtube.com/shorts/bRhkYg4p28M',
    type: 'DISTRACTION',
  },
  {
    id: 9,
    url: 'https://www.youtube.com/shorts/e9OAvHHhbGE',
    type: 'DISTRACTION',
  },
  {
    id: 10,
    url: 'https://www.youtube.com/watch?v=3yBKS6LpI9o',
    type: 'DISTRACTION',
  },
  {
    id: 11,
    url: 'https://www.youtube.com/watch?v=bg41b_l6NNM',
    type: 'DISTRACTION',
  },
];
