import { createPortal } from 'react-dom';
import icon from '../../images/icons.svg';
import { CloseBtn, Icon, ModalDiv, Overlay } from './Modal.styled';

import { useEffect } from 'react';
import CarCard from 'components/CarCard/CarCard';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ item, closeModal }) => {
  useEffect(() => {
    const onKeyDown = e => {
      if (e.code === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  });

  const onBackdropeClick = e => {
    if (e.currentTarget === e.target) {
      closeModal();
    }
  };
  return createPortal(
    <Overlay onClick={onBackdropeClick}>
      <ModalDiv>
        <CloseBtn onClick={closeModal} type="button">
          <Icon width={24} height={24}>
            <use href={icon + '#icon-x'}></use>
          </Icon>
        </CloseBtn>
        <CarCard item={item} />
      </ModalDiv>
    </Overlay>,
    modalRoot
  );
};

export default Modal;
