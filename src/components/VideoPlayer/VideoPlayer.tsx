import ReactPlayer from 'react-player';

import * as S from './VideoPlayer.styles';

interface VideoPlayerProps {
  url: string;
  controls?: boolean;
  width?: string;
  onStart: () => void;
  onPlay: () => void;
  onStop: () => void;
  onPause: () => void;
  onEnded: () => void;
}

const VideoPlayer = ({
  url,
  controls = true,
  width = '100%',
  onStart,
  onPlay,
  onPause,
  onStop,
  onEnded,
}: VideoPlayerProps) => {
  return (
    <S.Container width={width}>
      <ReactPlayer
        url={url}
        controls={controls}
        width="100%"
        height="100%"
        onStart={onStart}
        onPlay={onPlay}
        onPause={onPause}
        onStop={onStop}
        onEnded={onEnded}
      />
    </S.Container>
  );
};

export default VideoPlayer;
