import { useState } from 'react';

import { Button } from '@/components/Button';

import type { CravingResponseImage } from '@/constants/image';

import * as S from './Gallery.styles';

interface GalleryProps {
  images: CravingResponseImage[];
  width?: number | string;
}

const Gallery = ({ images, width = '100%' }: GalleryProps) => {
  const [index, setIndex] = useState(0);

  const handleClick = () => {
    setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <S.Container width={width}>
      <S.Message>담배를 참는데 도움이 되는 행동을 추천해 드릴게요!</S.Message>
      <S.Image
        src={images[index].url}
        alt={`갈망 대응 이미지 ${images[index].id}`}
      />
      <S.ButtonContainer>
        <Button onClick={handleClick}>다른 방법 추천받기</Button>
      </S.ButtonContainer>
    </S.Container>
  );
};

export default Gallery;
