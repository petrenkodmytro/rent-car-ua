import styled from 'styled-components';

export const CardWrap = styled.div`
  position: relative;
  width: 220px;
  height: 426px;
  display: flex;
  flex-direction: column;
  @media screen and (min-width:425px) {
    width: 274px;
  }

`;

export const CarInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: ${p => p.theme.colors.secondColor};
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
`;

export const Title = styled.p`
  display: flex;
  margin-top: 14px;
  color: ${p => p.theme.colors.mainColor};
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
`;
export const Year = styled.span`
  padding-left: 3px;
`;

export const Price = styled.span`
  display: inline-block;
  margin-left: auto;
`;

export const Model = styled.span`
  padding-left: 3px;
  color: ${p => p.theme.colors.accentLight};
`;

export const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const ImgWrap = styled.div`
  height: 268px;
  border-radius: 12px;
  overflow: hidden;
`;

export const ImgCar = styled.img`
  height: 100%;
  object-fit: cover;
  /* object-position: center center; */
`;

export const Delimeter = styled.span`
  padding-right: 6px;
  padding-left: 6px;
`;

export const BtnInfo = styled.button`
  display: flex;
  margin-top: auto;
  padding: 12px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  border: none;
  background-color: ${p => p.theme.colors.accentLight};
  color: ${p => p.theme.colors.whiteColor};
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.4;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.accentDark};
    box-shadow: -2px -2px 5px ${p => p.theme.colors.whiteColor},
      2px 2px 5px ${p => p.theme.colors.accentDark};
  }
  @media screen and (min-width:768px) {
    padding: 12px 99px;
  }
`;

export const FavoritesBtn = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  padding: 0;
  background-color: transparent;
  color: ${p => p.theme.colors.whiteColor};
  border: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.accentDark};
  }
`;

export const FavoriteIconFalse = styled.svg`
  stroke: currentColor;
  fill: none;
`;
export const FavoriteIconTrue = styled.svg`
  stroke: ${p => p.theme.colors.accentDark};
  fill: ${p => p.theme.colors.accentDark};
`;
