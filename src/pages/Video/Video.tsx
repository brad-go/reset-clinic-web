import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Survey, VideoPlayer } from '@/components';
import { VIDEO_COUNTS } from '@/constants';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { setSeenVideos } from '@/store/userSlice';
import { findUserPreferedVideo } from '@/services';

import type { RootState } from '@/store';

import * as S from './Video.styles';

const Video = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const user = useAppSelector((state: RootState) => state.user);
  const [video, setVideo] = useState(findUserPreferedVideo(user));
  const [isError, setIsError] = useState(false);

  const isAllSeenUser = () => {
    return user.seenVideos.length === VIDEO_COUNTS;
  };

  const handleVideoEnded = useCallback(() => {
    dispatch(setSeenVideos({ videoId: video.id }));
    navigate('/main');
  }, [dispatch, navigate, video.id]);

  const handelVideoError = useCallback(() => {
    dispatch(setSeenVideos({ videoId: video.id }));
    setIsError(true);
  }, [dispatch, video.id]);

  const handleButtonClick = useCallback(() => {
    setVideo(findUserPreferedVideo(user));
    setIsError(false);
  }, [user]);

  return (
    <S.Container>
      {isAllSeenUser() ? (
        <S.SurveyContainer>
          <S.SurveyHeading>준비 된 영상을 모두 보셨네요!</S.SurveyHeading>
          <Survey />
        </S.SurveyContainer>
      ) : (
        <>
          <VideoPlayer
            url={video.url}
            onEnded={handleVideoEnded}
            onError={handelVideoError}
          />
          {isError && (
            <S.ReassignButton onClick={handleButtonClick}>
              다른 영상 보기
            </S.ReassignButton>
          )}
        </>
      )}
    </S.Container>
  );
};

export default Video;
