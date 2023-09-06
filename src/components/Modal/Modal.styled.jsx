import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${p => p.theme.colors.secondColor};
  backdrop-filter: blur(3px);
  z-index: 1200;
`;

export const ModalDiv = styled.div`
  width: 541px;
  padding: 40px;
  position: absolute;
  top: 50%;
  left: 50%;
  overflow: hidden;
  transform: translate(-50%, -50%);
  border-radius: 24px;
  background-color: ${p => p.theme.colors.whiteColor};
  box-shadow: 0px 4px 57px 0px rgba(17, 17, 17, 0.05);
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  padding: 0;
  background-color: transparent;
  color: ${p => p.theme.colors.mainColor};
  border: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.accentDark};
  }
`;

export const Icon = styled.svg`
  stroke: currentColor;
  fill: none;
`;