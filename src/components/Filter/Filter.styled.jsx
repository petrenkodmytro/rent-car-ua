import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: center;
  gap: 8px;
  padding-top: 20px;
  @media (min-width: 1000px) {
    flex-wrap: nowrap;
    gap: 18px;
  }
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: #8a8a89;
`;

export const Input = styled.input`
  display: flex;
  width: 200px;
  padding: 10px 18px;
  border-radius: 14px;
  background: #f7f7fb;
  border: none;
  outline: none;
  color: #000;
  font-size: 18px;
  font-weight: 500;
  box-shadow: -2px -2px 5px ${p => p.theme.colors.whiteColor},
    2px 2px 5px ${p => p.theme.colors.accentDark};

  &::placeholder {
    color: #121417;
  }
  @media (min-width: 768px) {
    width: 224px;
    padding: 12px 12px 12px 18px;
  }
  @media (min-width: 1440px) {
    padding: 14px 14px 14px 18px;
  }
`;

export const MileageWrap = styled.div`
  /* width: 100%; */
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

export const MileageInputFrom = styled.input`
  display: flex;
  width: 100px;
  padding: 10px 10px 10px 14px;
  justify-content: center;
  align-items: center;
  gap: 32px;
  border-top-left-radius: 14px;
  border-bottom-left-radius: 14px;
  background: #f7f7fb;
  border: none;
  outline: none;
  color: #000;
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  box-shadow: -2px -2px 5px ${p => p.theme.colors.whiteColor},
    2px 2px 5px ${p => p.theme.colors.accentDark};

  &::placeholder {
    color: ${p => p.theme.colors.mainColor};
  }
  @media (min-width: 768px) {
    width: 130px;
    padding: 12px 12px 12px 18px;
  }
  @media (min-width: 1440px) {
    width: 160px;
    padding: 14px 14px 14px 18px;
  }
`;

export const MileageInputTo = styled.input`
  display: flex;
  width: 100px;
  padding: 10px 10px 10px 14px;
  justify-content: center;
  align-items: center;
  gap: 32px;
  border-top-right-radius: 14px;
  border-bottom-right-radius: 14px;
  background: #f7f7fb;
  border: none;
  outline: none;
  color: #000;
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  box-shadow: -2px -2px 5px ${p => p.theme.colors.whiteColor},
    2px 2px 5px ${p => p.theme.colors.accentDark};
  &::placeholder {
    color: ${p => p.theme.colors.mainColor};
  }
  @media (min-width: 768px) {
    width: 130px;
    padding: 12px 12px 12px 18px;
  }
  @media (min-width: 1440px) {
    width: 160px;
    padding: 14px 14px 14px 18px;
  }
`;

export const BtnForm = styled.button`
  display: flex;
  padding: 10px 24px;
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
    box-shadow: -2px -2px 5px ${p => p.theme.colors.whiteColor},
      2px 2px 5px ${p => p.theme.colors.accentDark};
  }
  @media (min-width: 768px) {
    padding: 14px 44px;
  }
`;
