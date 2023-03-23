import { Outlet } from 'react-router-dom';

import { Header } from '@/components/Header';

import * as S from './Layout.styles';

const Layout = () => {
  return (
    <>
      <Header />
      <S.Container>
        <Outlet />
      </S.Container>
    </>
  );
};

export default Layout;
