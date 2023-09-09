import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 1440px;
  min-height: 100vh;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  background-color: ${p => p.theme.colors.whiteColor};
`;

export const Main = styled.main`
  /* flex: 1 1 auto; */
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  padding-left: 15px;
  padding-right: 15px;
`;
