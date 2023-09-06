import { useState } from 'react';
import {
  BtnInfo,
  CarInfo,
  CardWrap,
  Delimeter,
  FavoritesBtn,
  ImgCar,
  ImgWrap,
  InfoWrap,
  Model,
  Price,
  Title,
  Year,
} from './CarItem.styled';
import Modal from 'components/Modal/Modal';
import { Icon } from 'components/Modal/Modal.styled';
import icon from '../../images/icons.svg';

const CarItem = ({ item }) => {
  const {
    img,
    make,
    model,
    year,
    rentalPrice,
    address,
    rentalCompany,
    type,
    mileage,
    accessories,
  } = item;

  const [isShowModal, setIsShowModal] = useState(false);

  const openModal = () => {
    setIsShowModal(true);
  };
  const closeModal = () => {
    setIsShowModal(false);
  };

  return (
    <>
      <CardWrap>
        <ImgWrap>
          <ImgCar src={img} alt={make} />
        </ImgWrap>

        <CarInfo>
          <FavoritesBtn type="button">
            <Icon width={18} height={18}>
              <use href={icon + '#icon-normal'}></use>
            </Icon>
          </FavoritesBtn>
          <Title>
            {make ?? 'Unknown'}
            <Model>
              {(model.length > 12 ? model.slice(0, 12) : model) ?? 'Unknown'}
            </Model>
            ,<Year>{year ?? 'Unknown'}</Year>
            <Price>{rentalPrice ?? 'Unknown'}</Price>
          </Title>

          <InfoWrap>
            <p>
              <span>
                {address.split(',')[1] ?? 'Unknown'}
                <Delimeter>|</Delimeter>
              </span>
              <span>
                {address.split(',')[2] ?? 'Unknown'}
                <Delimeter>|</Delimeter>
              </span>
              <span>{rentalCompany ?? 'Unknown'}</span>
            </p>
            <p>
              <span>
                {type ?? 'Unknown'}
                <Delimeter>|</Delimeter>
              </span>
              <span>
                {make ?? 'Unknown'}
                <Delimeter>|</Delimeter>
              </span>
              <span>
                {mileage ?? 'Unknown'}
                <Delimeter>|</Delimeter>
              </span>
              <span>{accessories[0] ?? 'Unknown'}</span>
            </p>
          </InfoWrap>
        </CarInfo>
        <BtnInfo onClick={openModal} type="buttun">
          Learn more
        </BtnInfo>
      </CardWrap>
      {isShowModal && <Modal item={item} closeModal={closeModal} />}
    </>
  );
};

export default CarItem;
