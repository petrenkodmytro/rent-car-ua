import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Main, Wrapper } from './SharedLayout.styled';
import SideBar from 'components/SideBar/SideBar';
import ScrollToTop from 'react-scroll-to-top';
import { Loading } from 'notiflix';
import { useSelector } from 'react-redux';
import { selectIsLoading } from 'redux/selectors';



export const SharedLayout = () => {
  const isLoading = useSelector(selectIsLoading);
  return (
    <Wrapper>
      <SideBar />
      <Main>
        <Suspense fallback={isLoading ? Loading.arrows() : Loading.remove()}>
          <Outlet />
        </Suspense>
      </Main>
      <ScrollToTop color="#3E85F3" smooth="true" />
    </Wrapper>
  );
};
