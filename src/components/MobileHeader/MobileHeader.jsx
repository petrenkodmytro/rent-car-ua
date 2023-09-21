import React from 'react';
import { MobileBtn, MobileHeaderWrap } from './MobileHeader.styled';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Title } from 'components/SideBar/SideBar.styled';

const MobileHeader = ({ onOpen, isMobMenuOpen }) => {
  return (
    <MobileHeaderWrap>
      <Title style={{ marginTop: '0px' }}>RentCarUA</Title>
      <MobileBtn onClick={onOpen} type="button">
        {isMobMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
      </MobileBtn>
    </MobileHeaderWrap>
  );
};

export default MobileHeader;
