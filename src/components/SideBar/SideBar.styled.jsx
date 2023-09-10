import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavBar = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-width: 150px;
  background-color: ${p => p.theme.colors.bgSideBar};
`;

export const NavWrapper = styled.nav`
  display: flex;
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
