import React from 'react';
import { FcHome } from 'react-icons/fc';
import { IoIosCar } from 'react-icons/io';
import { MdFavorite } from 'react-icons/md';
import { TiContacts } from 'react-icons/ti';
import { img } from '../../images';
import {
  Author,
  Image,
  NavWrapper,
  StyledNavLink,
  Title,
  NavBar,
} from './SideBar.styled';

const SideBar = () => {
  return (
    <NavBar>
      <NavWrapper>
        <Title>RentCarUA</Title>
        <Image src={img.logo} alt="Logo" />
        <StyledNavLink to="/">
          <FcHome />
          Home
        </StyledNavLink>
        <StyledNavLink to="/catalog">
          <IoIosCar />
          Fleet
        </StyledNavLink>
        <StyledNavLink to="/favorites">
          <MdFavorite />
          Favorites
        </StyledNavLink>
        <StyledNavLink to="/contacts">
          <TiContacts />
          Contacts
        </StyledNavLink>
      </NavWrapper>
      <Author>Developed by Dmytro Petrenko</Author>
    </NavBar>
  );
};

export default SideBar;
