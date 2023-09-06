import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Main, Wrapper } from './SharedLayout.styled';
import SideBar from 'components/SideBar/SideBar';
import ScrollToTop from 'react-scroll-to-top';

export const SharedLayout = () => {
  return (
    <Wrapper>
      <SideBar />

      <Main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </Main>
      <ScrollToTop color="#3E85F3" smooth="true" />
    </Wrapper>
  );
};
