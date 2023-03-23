import { NavLink } from 'react-router-dom';

import * as S from './Header.styles';

const Header = () => {
  return (
    <S.Container>
      <NavLink to="/">
        <S.Logo>RESET CLINIC</S.Logo>
      </NavLink>
    </S.Container>
  );
};

export default Header;
