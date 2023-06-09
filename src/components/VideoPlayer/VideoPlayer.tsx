import ReactPlayer from 'react-player';

import * as S from './VideoPlayer.styles';

interface VideoPlayerProps {
  url: string;
  controls?: boolean;
  width?: string;
  onStart?: () => void;
  onPlay?: () => void;
  onPause?: () => void;
  onEnded?: () => void;
  onError?: () => void;
}

const VideoPlayer = ({
  url,
  controls = true,
  width = '100%',
  onStart,
  onPlay,
  onPause,
  onEnded,
  onError,
}: VideoPlayerProps) => {
  return (
    <S.Container width={width}>
      <ReactPlayer
        url={url}
        controls={controls}
        width="100%"
        height="100%"
        playing
        onStart={onStart}
        onPlay={onPlay}
        onPause={onPause}
        onEnded={onEnded}
        onError={onError}
      />
    </S.Container>
  );
};

export default VideoPlayer;
