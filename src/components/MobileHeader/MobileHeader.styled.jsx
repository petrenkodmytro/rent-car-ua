import styled from 'styled-components';

export const MobileHeaderWrap = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background-color: #cae4f77c;

  @media (min-width: 768px) {
    display: none;
  }
`;