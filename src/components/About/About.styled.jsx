import styled from 'styled-components';

export const AboutSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & > p {
    text-indent: 20px;
    line-height: 1.2;
  }
`;

export const TitleAbout = styled.h1`
  margin-top: 20px;
  margin-bottom: 10px;
  text-align: center;
`;
