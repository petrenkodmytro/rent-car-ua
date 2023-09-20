import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 1440px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  background-color: ${p => p.theme.colors.whiteColor};
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
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

export const MobileWrapper = styled.div`
position: absolute;
top: 0;
bottom: 0;
`;

export const TabletWrapper = styled.div`
/* min-height: 100vh; */
  
`;
