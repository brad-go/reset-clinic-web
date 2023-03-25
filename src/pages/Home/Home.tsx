import { NavLink } from 'react-router-dom';

import { Text, Trigger } from '@/components';
import { useAppSelector } from '@/hooks';

import { RootState } from '@/store';
import * as S from './Home.styles';

const Home = () => {
  const { nickname } = useAppSelector((state: RootState) => state.user);

  return (
    <S.Container>
      {nickname && (
        <S.Header>
          <Text as="b">{nickname}</Text>님 잘 오셨어요!{'\n'} 오늘 하루도 금연
          화이팅 합시다!
        </S.Header>
      )}
      <NavLink to="/video">
        <Trigger>Press</Trigger>
      </NavLink>
      <S.Footer>담배가 땡긴다면 눌러보세요!</S.Footer>
    </S.Container>
  );
};

export default Home;
