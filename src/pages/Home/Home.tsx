import { NavLink } from 'react-router-dom';

import { Trigger } from '@/components';
import { useAppSelector } from '@/hooks';
import { requestUserData } from '@/services';
import { getLocalDateString } from '@/utils';

import { RootState } from '@/store';
import * as S from './Home.styles';

const Home = () => {
  const { visitorId, nickname } = useAppSelector(
    (state: RootState) => state.user
  );

  const handleClick = () => {
    const requestData = {
      visitorId,
      at: getLocalDateString(),
    };

    requestUserData('/button-click', requestData);
  };

  return (
    <S.Container>
      {nickname && (
        <S.Header>
          {nickname}님 잘 오셨어요! 오늘 하루도 금연 화이팅 합시다!
        </S.Header>
      )}
      <NavLink to="/video">
        <Trigger onClick={handleClick}>Press</Trigger>
      </NavLink>
      <S.Footer>담배가 땡긴다면 눌러보세요!</S.Footer>
    </S.Container>
  );
};

export default Home;
