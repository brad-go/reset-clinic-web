import { useCallback, useState } from 'react';

import { Text, Button, Gallery, Form, ShareLink, Survey } from '@/components';
import { CRAVING_RESPONSE_IMAGES } from '@/constants';

import * as S from './Main.styles';

const Main = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleShareLinkClick = useCallback(() => {
    setIsOpen(true);
  }, []);

  const handleShareLinkClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <S.Container>
      <Gallery images={CRAVING_RESPONSE_IMAGES} />
      <S.LinkContainer>
        <S.Heading>도움이 되셨나요?</S.Heading>
        <Text>
          이 페이지가 담배를 참는 데에 도움이 되셨다면 링크를 저장해 두시고
          담배가 땡길 때마다 들어오세요!
        </Text>
        <Button onClick={handleShareLinkClick}>링크 나에게로 보내놓기</Button>
      </S.LinkContainer>
      <S.FormContainer>
        <S.Heading>맞춤 영상을 신청하세요!</S.Heading>
        <Text>
          담배가 땡길 때 다시 방문하면 선택하신 종류의 영상을 틀어 드릴게요!
          보라색 박스를 선택해 주세요.
        </Text>
        <Form />
      </S.FormContainer>
      <Survey />
      <ShareLink isOpen={isOpen} onClose={handleShareLinkClose} />
    </S.Container>
  );
};

export default Main;
