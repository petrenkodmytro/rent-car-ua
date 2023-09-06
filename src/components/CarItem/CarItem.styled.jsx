import styled from 'styled-components';

export const CardWrap = styled.div`
position: relative;
  width: 274px;
  height: 426px;
  display: flex;
  flex-direction: column;
  /* gap: 30px; */
  /* margin-bottom: 20px; */
`;

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
  padding: 12px 99px;
  justify-content: center;
  align-items: center;
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