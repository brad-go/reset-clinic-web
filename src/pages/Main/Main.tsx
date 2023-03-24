import { useCallback, useState } from 'react';

import { Text, Button, Gallery, Form, ShareLink } from '@/components';
import { CRAVING_RESPONSE_IMAGES } from '@/constants/image';
import { useAppSelector } from '@/hooks';
import { requestUserData } from '@/services';
import { RootState } from '@/store';
import { getLocalDateString } from '@/utils';

import * as S from './Main.styles';

const Main = () => {
  const { visitorId } = useAppSelector((state: RootState) => state.user);
  const [isOpen, setIsOpen] = useState(false);

  const handleShareLinkClick = useCallback(() => {
    const requestData = {
      visitorId,
      at: getLocalDateString(),
    };

    setIsOpen(true);
    requestUserData('/link-saved', requestData);
  }, [visitorId]);

  const handleShareLinkClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  const handleSuveyLinkClick = useCallback(() => {
    const requestData = {
      visitorId,
      at: getLocalDateString(),
    };

    requestUserData('/survey-click', requestData);
  }, [visitorId]);

  return (
    <S.Container>
      <Gallery images={CRAVING_RESPONSE_IMAGES} />
      <S.LinkContainer>
        <Text>
          도움이 되셨나요?{'\n'}이 페이지가 담배를 참는 데에 도움이 되셨다면
          SNS로 공유하시거나 링크를 저장해 두시고 담배가 땡길 때마다 들어오세요!
        </Text>
        <Button onClick={handleShareLinkClick}>공유하기</Button>
      </S.LinkContainer>
      <S.FormContainer>
        <Text>
          다음번 담배가 땡길 때 다시 방문하시면 원하는 종류의 영상을 틀어
          드릴게요.{'\n'}&lt;동기부여 영상&gt;, &lt;흡연에 대한 생각을 바꿔 주는
          영상&gt;, &lt;웃긴 영상&gt; 중 원하는 영상 종류와 닉네임을 입력해
          주세요.
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
        <Button
          as="a"
          href="https://i64yod9fzzd.typeform.com/to/iREmRYok"
          onClick={handleSuveyLinkClick}
        >
          설문조사 하러 가기
        </Button>
      </S.SurveyContainer>
      <ShareLink isOpen={isOpen} onClose={handleShareLinkClose} />
    </S.Container>
  );
};

export default Main;
