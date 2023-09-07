import React from 'react';
import {
  CarInfo,
  Delimeter,
  Descriprion,
  ImgCar,
  InfoList,
  InfoTitle,
  InfoWrap,
  LinkOrder,
  Model,
  RentalList,
  Title,
  Year,
} from './CarCard.styled';

const CarCard = ({ item }) => {
  const {
    id,
    img,
    make,
    model,
    year,
    rentalPrice,
    address,
    type,
    mileage,
    accessories,
    description,
    fuelConsumption,
    engineSize,
    rentalConditions,
    functionalities,
  } = item;

  const rentalConditionsArr = rentalConditions.split('\n');

  return (
    <>
      <ImgCar src={img} alt={make} />

      <CarInfo>
        <Title>
          {make ?? 'Unknown'}
          <Model>
            {(model.length > 12 ? model.slice(0, 12) : model) ?? 'Unknown'}
          </Model>
          ,<Year>{year ?? 'Unknown'}</Year>
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
            <span>ID: {id ?? 'Unknown'}</span>
            <Delimeter>|</Delimeter>
            <span>Year: {year ?? 'Unknown'}</span>
            <Delimeter>|</Delimeter>
            <span>Type: {type ?? 'Unknown'}</span>
          </p>
          <p>
            <span>Fuel Consumption: {fuelConsumption ?? 'Unknown'}</span>
            <Delimeter>|</Delimeter>
            <span>Engine Size: {engineSize ?? 'Unknown'}</span>
          </p>
        </InfoWrap>
        <Descriprion>{description}</Descriprion>
        <InfoTitle>Accessories and functionalities:</InfoTitle>
        <InfoWrap>
          <InfoList>
            {accessories.map((accessory, index) => (
              <li key={index}>
                {accessory}
                {index < accessories.length - 1 && <Delimeter>|</Delimeter>}
              </li>
            ))}
          </InfoList>
          <InfoList>
            {functionalities.map((functionalitie, index) => (
              <li key={index}>
                {functionalitie}
                {index < functionalities.length - 1 && <Delimeter>|</Delimeter>}
              </li>
            ))}
          </InfoList>
        </InfoWrap>
        <InfoTitle>Rental Conditions:</InfoTitle>
        <RentalList>
          <li>
            Minimum age: <span>{rentalConditionsArr[0].split(' ')[2]}</span>
          </li>
          <li>{rentalConditionsArr[1]}</li>
          <li>{rentalConditionsArr[2]}</li>
          <li>
            Mileage: <span>{mileage.toLocaleString('en-EN')}</span>
          </li>
          <li>
            Price: <span>{rentalPrice}</span>
          </li>
        </RentalList>
      </CarInfo>
      <LinkOrder href="tel:+380730000000">Rental car</LinkOrder>
    </>
  );
};

export default CarCard;
