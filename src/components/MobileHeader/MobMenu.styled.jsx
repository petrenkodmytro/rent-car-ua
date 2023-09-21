import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavBar = styled.aside`
  position: absolute;
  z-index: 10;
  top: 0;
  left: 0;
  bottom: 0;
  transition: left 1s cubic-bezier(0.4, 0, 0.2, 1);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #b3dff5;
`;

export const NavWrapper = styled.nav`
  display: flex;
  width: 200px;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 25px;
`;

export const StyledNavLink = styled(NavLink)`
  width: 120px;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 10px;
  padding: 10px;
  border-radius: 12px;
  border: none;
  text-decoration: none;
  color: ${p => p.theme.colors.mainColor};
  background-color: ${p => p.theme.colors.accentLight};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.accentDark};
    color: ${p => p.theme.colors.whiteColor};
    box-shadow: -2px -2px 5px ${p => p.theme.colors.whiteColor},
      2px 2px 5px ${p => p.theme.colors.accentDark};
  }
  &.active {
    color: ${p => p.theme.colors.whiteColor};
    background-color: ${p => p.theme.colors.accentDark};
  }
`;

export const Image = styled.img`
  width: 80px;
  border-radius: 5px;
`;

export const Title = styled.p`
  margin-top: 20px;
  font-size: 22px;
  font-weight: 700;
  text-shadow: -2px -2px 5px ${p => p.theme.colors.whiteColor},
    2px 2px 5px ${p => p.theme.colors.accentDark};
`;

export const Author = styled.p`
  font-style: italic;
  font-size: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  text-shadow: -2px -2px 5px ${p => p.theme.colors.whiteColor},
    2px 2px 5px ${p => p.theme.colors.accentDark};
`;
 