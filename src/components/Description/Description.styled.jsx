import styled from 'styled-components';

export const DescriptionSection = styled.section`
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const ContainerMainPage = styled.div`
  width: 100%;
  margin: 0 auto;
`;

export const ListDescription = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ItemDescription = styled.li`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  border: 2px #ccc solid;
  border-radius: 10px;
  padding: 20px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    &:nth-child(2) {
      flex-direction: row-reverse;
      align-items: center;
      margin-right: auto;
    }
  }
`;

export const WrappInfo = styled.div`
  & > ul {
    list-style-type: decimal;
    padding-left: 20px;
    font-size: 14px;
  }
`;

export const TitleDescription = styled.h2`
  display: inline-block;
  margin-bottom: 8px;
  color: ${p => p.theme.colors.mainColor};
  font-size: 18px;
  font-weight: 700;
  line-height: 1.25;
  text-transform: uppercase;
  border-radius: 44px;
`;

export const TextDescription = styled.p`
  /* margin-top: 14px; */
  color: ${p => p.theme.colors.mainColor};
  font-size: 14px;
  font-weight: 500;
  line-height: 1.28;
  text-indent: 20px;
`;

export const ImgDescription = styled.img`
  width: 250px;
`;
