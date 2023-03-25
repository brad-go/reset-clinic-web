import { useNavigate } from 'react-router-dom';

import { VideoPlayer } from '@/components';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { setSeenVideos } from '@/store/userSlice';
import { findUserPreferedVideo } from '@/services';

import type { RootState } from '@/store';

import * as S from './Video.styles';

const Video = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const user = useAppSelector((state: RootState) => state.user);
  const video = findUserPreferedVideo(user);

  const handleVideoEnded = () => {
    dispatch(setSeenVideos({ videoId: video.id }));
    navigate('/main');
  };

  return (
    <S.Container>
      <VideoPlayer url={video.url} onEnded={handleVideoEnded} />
    </S.Container>
  );
};

export default Video;
