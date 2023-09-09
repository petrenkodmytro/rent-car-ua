import styled from 'styled-components';

export const BtnLoadMore = styled.button`
margin-bottom: 20px;
  background-color: transparent;
  border: none;
  color: ${p => p.theme.colors.accentLight};
  font-family: Manrope;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  text-decoration-line: underline;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    color: ${p => p.theme.colors.accentDark};
  }
`;
