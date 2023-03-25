import { Text } from '@/components/Text';
import { Button } from '@/components/Button';

import * as S from './Survey.styles';

const Survey = () => {
  return (
    <S.Container>
      <Text>
        <Text as="b">앱 버전</Text>이 곧 출시 예정입니다.{' '}
        <Text as="b">네 문항 분량</Text>의 간단한 설문 후{' '}
        <Text as="b">이메일</Text>을 남겨주시면 완성되는대로 링크를
        보내드리겠습니다.
      </Text>
      <Button as="a" href="https://i64yod9fzzd.typeform.com/to/iREmRYok">
        설문조사 하러 가기
      </Button>
    </S.Container>
  );
};

export default Survey;
