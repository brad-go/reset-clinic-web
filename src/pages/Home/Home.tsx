import { useAppSelector } from '@/hooks';
import { Trigger } from '@/components';

import { RootState } from '@/store';
import * as S from './Home.styles';

const Home = () => {
  const { nickname } = useAppSelector((state: RootState) => state.user);

  const handleClick = () => {};

  return (
    <S.Container>
      {nickname && (
        <S.Header>
          {nickname}님 잘 오셨어요! 오늘 하루도 금연 화이팅 합시다!
        </S.Header>
      )}
      <Trigger onClick={handleClick}>Press</Trigger>
      <S.Footer>담배가 땡긴다면 눌러보세요!</S.Footer>
    </S.Container>
  );
};

export default Home;
