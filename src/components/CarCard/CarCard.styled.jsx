import styled from 'styled-components';

export const CarInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: ${p => p.theme.colors.secondColor};
  /* font-family: Manrope; */
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
`;

export const Title = styled.p`
  display: flex;
  /* align-items: flex-start; */
  margin-top: 14px;
  color: ${p => p.theme.colors.mainColor};
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
`;

export const Year = styled.span`
  padding-left: 3px;
`;

export const Model = styled.span`
  padding-left: 3px;
  color: ${p => p.theme.colors.accentLight};
`;

export const Descriprion = styled.p`
  color: ${p => p.theme.colors.mainColor};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.43;
  margin-bottom: 24px;
`;

export const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const InfoList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export const InfoTitle = styled.p`
  color: ${p => p.theme.colors.mainColor};
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
`;

export const RentalList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;

  & > li {
    padding: 7px 14px;
    border-radius: 35px;
    background: ${p => p.theme.colors.bgc};
    color: ${p => p.theme.colors.thirdColor};
    font-size: 12px;
    font-weight: 400;
    line-height: 1.5;

    & > span {
      color: ${p => p.theme.colors.accentLight};
      font-family: Montserrat;
      font-size: 12px;
      font-weight: 600;
      line-height: 1.5;
      letter-spacing: -0.24px;
    }
  }
`;

export const ImgCar = styled.img`
  width: 461px;
  height: 248px;
  border-radius: 14px;
  object-fit: cover;
`;

export const Delimeter = styled.span`
  padding-right: 6px;
  padding-left: 6px;
`;

export const LinkOrder = styled.a`
  /* display: flex; */
  margin-top: 24px;
  padding: 12px 50px;
  /* justify-content: center; */
  /* align-items: center; */
  border-radius: 12px;
  border: none;
  background-color: ${p => p.theme.colors.accentLight};
  color: ${p => p.theme.colors.whiteColor};
  transition: background-color 0.25s ease-in-out;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.4;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.accentDark};
    box-shadow: -2px -2px 5px #fff,
      2px 2px 5px ${p => p.theme.colors.accentDark};
  }
`;
