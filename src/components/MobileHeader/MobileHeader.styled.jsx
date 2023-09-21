import styled from 'styled-components';

export const MobileHeaderWrap = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 30px;
  background-color: #cae4f77c;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const MobileBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-radius: 12px;
  border: none;
  background-color: ${p => p.theme.colors.accentLight};
  color: ${p => p.theme.colors.whiteColor};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.accentDark};
    box-shadow: -2px -2px 5px ${p => p.theme.colors.whiteColor},
      2px 2px 5px ${p => p.theme.colors.accentDark};
  }
`;
