import React, { Suspense, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Main, Wrapper } from './SharedLayout.styled';
import SideBar from 'components/SideBar/SideBar';
import ScrollToTop from 'react-scroll-to-top';
import { Loading } from 'notiflix';
import { useSelector } from 'react-redux';
import { selectIsLoading } from 'redux/selectors';
import { ToastContainer } from 'react-toastify';
import MobileHeader from 'components/MobileHeader/MobileHeader';
import MobMenu from 'components/MobileHeader/MobMenu';

export const SharedLayout = () => {
  const isLoading = useSelector(selectIsLoading);
  const [isMobMenuOpen, setIsMobMenuOpen] = useState(false);
  const toggle = () => {
    setIsMobMenuOpen(!isMobMenuOpen);
  };
  console.log(isMobMenuOpen);
  return (
    <Wrapper>
      <MobileHeader onOpen={toggle} />
      {isMobMenuOpen ? <MobMenu isMobMenuOpen={isMobMenuOpen} /> : <SideBar />}
      <Main>
        <Suspense fallback={isLoading ? Loading.arrows() : Loading.remove()}>
          <Outlet />
        </Suspense>
      </Main>
      <ScrollToTop color="#3E85F3" smooth="true" />
      <ToastContainer />
    </Wrapper>
  );
};
