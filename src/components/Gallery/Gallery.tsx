import { useEffect, useState } from 'react';

import { Button } from '@/components/Button';
import { getImages } from '@/services';
import { getRandomNumberWithRange } from '@/utils';

import * as S from './Gallery.styles';

interface GalleryProps {
  width: number | string;
}

const Gallery = ({ width = '100%' }: GalleryProps) => {
  const [images, setImages] = useState([
    {
      id: '',
      url: '',
    },
  ]);
  const [index, setIndex] = useState(0);

  const handleClick = () => {
    let newIndex = getRandomNumberWithRange(0, images.length - 1);

    if (index === newIndex) {
      newIndex = getRandomNumberWithRange(0, images.length - 1);
    }

    setIndex(newIndex);
  };

  useEffect(() => {
    const request = async () => {
      const newImages = await getImages();

      setImages(newImages);
    };
    request();
  }, []);

  return (
    <S.Container width={width}>
      <S.Message>담배를 참는데 도움이 되는 행동을 추천해 드릴게요!</S.Message>
      <S.Image src={images[index].url} alt={images[index].id} />
      <S.ButtonContainer>
        <Button onClick={handleClick}>다른 방법 추천받기</Button>
      </S.ButtonContainer>
    </S.Container>
  );
};

export default Gallery;
