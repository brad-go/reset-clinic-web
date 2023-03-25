import { useCallback, useState } from 'react';

import { Text, Button, Gallery, Form, ShareLink } from '@/components';

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
      <Gallery />
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
      <S.SurveyContainer>
        <Text>
          <Text as="b">앱 버전</Text>이 곧 출시 예정입니다.{' '}
          <Text as="b">네 문항 분량</Text>의 간단한 설문 후{' '}
          <Text as="b">이메일</Text>을 남겨주시면 완성되는대로 링크를
          보내드리겠습니다.
        </Text>
        <Button as="a" href="https://i64yod9fzzd.typeform.com/to/iREmRYok">
          설문조사 하러 가기
        </Button>
      </S.SurveyContainer>
      <ShareLink isOpen={isOpen} onClose={handleShareLinkClose} />
    </S.Container>
  );
};

export default Main;
