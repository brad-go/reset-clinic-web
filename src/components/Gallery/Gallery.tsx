import { useState } from 'react';

import { Button } from '@/components/Button';
import { useAppSelector } from '@/hooks';
import { requestUserData } from '@/services';
import { getRandomNumberWithRange, getLocalDateString } from '@/utils';

import type { RootState } from '@/store';
import type { CravingResponseImage } from '@/constants/image';

import * as S from './Gallery.styles';

interface GalleryProps {
  images: CravingResponseImage[];
  width?: number | string;
}

const Gallery = ({ images, width = '100%' }: GalleryProps) => {
  const { visitorId } = useAppSelector((state: RootState) => state.user);
  const [index, setIndex] = useState(0);

  const handleClick = () => {
    let newIndex = getRandomNumberWithRange(0, images.length - 1);

    if (index === newIndex) {
      newIndex = getRandomNumberWithRange(0, images.length - 1);
    }

    const requestData = {
      visitorId,
      contentsNumber: newIndex,
      nextImageOrVideoEndAt: getLocalDateString(),
    };

    setIndex(newIndex);
    requestUserData('/next-image', requestData);
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
