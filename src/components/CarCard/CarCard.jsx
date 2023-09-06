import React from 'react';
import {
  CarInfo,
  Delimeter,
  ImgCar,
  ImgWrap,
  InfoWrap,
  LinkOrder,
  Model,
  Price,
  Title,
  Year,
} from './CarCard.styled';

const CarCard = ({ item }) => {
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
  return (
    <>
      <ImgWrap>
        <ImgCar src={img} alt={make} />
      </ImgWrap>

      <CarInfo>
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
      <LinkOrder href="tel:+380730000000">Rental car</LinkOrder>
    </>
  );
};

export default CarCard;
