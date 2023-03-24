import { useNavigate } from 'react-router-dom';

import { VideoPlayer } from '@/components';
import { useAppSelector } from '@/hooks';
import { setSeenVideos } from '@/store/userSlice';
import { requestUserData, findUserPreferedVideo } from '@/services';
import { getLocalDateString } from '@/utils';

import type { RootState } from '@/store';

import * as S from './Video.styles';

const Video = () => {
  const navigate = useNavigate();
  const user = useAppSelector((state: RootState) => state.user);
  const video = findUserPreferedVideo(user);

  const handleVideoEnded = () => {
    const requestData = {
      visitorId: user.visitorId,
      contentsNumber: video.id,
      nextImageOrVideoEndAt: getLocalDateString(),
    };

    setSeenVideos({ videoId: video.id });
    requestUserData('/video-end', requestData);
    navigate('/main');
  };

  return (
    <S.Container>
      <VideoPlayer url={video.url} onEnded={handleVideoEnded} />
    </S.Container>
  );
};

export default Video;
