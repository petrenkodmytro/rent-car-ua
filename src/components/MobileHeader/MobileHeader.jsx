import React from 'react';
import { MobileHeaderWrap } from './MobileHeader.styled';
import { AiOutlineMenu } from 'react-icons/ai';
import { Title } from 'components/SideBar/SideBar.styled';

const MobileHeader = ({ onOpen }) => {
  return (
    <MobileHeaderWrap>
      <Title style={{ marginTop: '0px' }}>RentCarUA</Title>
      <button onClick={onOpen} type="button">
        <AiOutlineMenu />
      </button>
    </MobileHeaderWrap>
  );
};

export default MobileHeader;
