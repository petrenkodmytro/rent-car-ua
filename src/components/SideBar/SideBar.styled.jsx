import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 30px;
`;

export const NavBar = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-width: 150px;
  background-color: #dfedf4;
`;

export const StyledNavLink = styled(NavLink)`
  width: 110px;
  text-align: center;
  font-weight: 500;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 10px;
  padding: 10px;
  /* margin-top: 10px; */
  /* margin-bottom: 10px; */
  margin-left: 0;
  margin-right: 0;
  border-radius: 5px;
  border: none;
  text-decoration: none;
  color: ${p => p.theme.colors.mainColor};
  background-color: ${p => p.theme.colors.accentLight};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.accentDark};
    color: #fff;
    box-shadow: -2px -2px 5px #fff,
      2px 2px 5px ${p => p.theme.colors.accentDark};
  }
  &.active {
    color: #fff;
    background-color: ${p => p.theme.colors.accentDark};
  }
`;

export const Image = styled.img`
  width: 60px;
  border-radius: 5px;
`;

export const Title = styled.p`
margin-top: 20px;
  font-weight: 500;
`;

export const Author = styled.p`
  font-style: italic;
  font-size: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
`;
