import React, { useState } from 'react';
import DatalistInput from 'react-datalist-input';

import {
  BtnForm,
  Form,
  Label,
  MileageInputFrom,
  MileageInputTo,
  MileageWrap,
} from './Filter.styled';
import { toast } from 'react-toastify';

const optionsToast = {
  position: 'top-center',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'dark',
};

const Filter = ({ cars, setFilteredCars }) => {
  const carsMakeArr = cars.map(car => car.make);
  const makeValues = [...new Set(carsMakeArr)].map((item, key) => ({
    value: item,
    id: key,
  }));

  const maxPrice = Math.max(
    ...cars
      .map(car => car.rentalPrice)
      .map(item => item.slice(1))
      .map(item => Number(item))
  );

  const priceArr = [];
  for (let i = 0; i <= maxPrice; i += 10) {
    priceArr.push(i);
  }
  const priceValues = priceArr.map((item, key) => ({
    value: String(item),
    id: key,
  }));

  const [make, setMake] = useState('');
  const [price, setPrice] = useState('');
  const [mileageFrom, setMileageFrom] = useState('');
  const [mileageTo, setMileageTo] = useState('');

  const search = () => {
    let filterCars = [...cars];

    if (make === '' && price === '' && mileageFrom === '' && mileageTo === '') {
      toast.info('Please set params for search ', optionsToast);
      setFilteredCars([]);
      return;
    }

    if (make !== '') {
      filterCars = filterCars.filter(
        car => car.make.toLowerCase() === make.toLowerCase()
      );
    }
    if (price !== '') {
      filterCars = filterCars.filter(
        car => Number(car.rentalPrice.slice(1)) <= Number(price)
      );
    }
    if (mileageFrom !== '') {
      filterCars = filterCars.filter(
        car => Number(car.mileage) >= Number(mileageFrom)
      );
    }
    if (mileageTo !== '') {
      filterCars = filterCars.filter(
        car => Number(car.mileage) <= Number(mileageTo)
      );
    }

    if (filterCars.length === 0) {
      toast.info('No results for these search params', optionsToast);
    }
    setFilteredCars(filterCars);
  };

  const reset = () => {
    setFilteredCars([]);
    setMake('');
    setPrice('');
    setMileageFrom('');
    setMileageTo('');
  };

  return (
    <Form>
      <DatalistInput
        placeholder="Enter the text"
        value={make}
        setValue={setMake}
        label="Car brand"
        showLabel={true}
        items={makeValues}
      />

      <DatalistInput
        placeholder="To $"
        value={price}
        setValue={setPrice}
        label="Price/ 1 hour"
        showLabel={true}
        items={priceValues}
        style={{ width: '125px' }}
      />

      <MileageWrap>
        <Label htmlFor="mileageFrom">
          Сar mileage / km
          <MileageInputFrom
            value={mileageFrom}
            id="mileageFrom"
            type="text"
            onChange={event => setMileageFrom(event.target.value)}
            placeholder="From"
          />{' '}
        </Label>
        <MileageInputTo
          value={mileageTo}
          type="text"
          onChange={event => setMileageTo(event.target.value)}
          placeholder="To"
        />
      </MileageWrap>

      <BtnForm type="button" onClick={search}>
        Search
      </BtnForm>
      <BtnForm type="button" onClick={reset}>
        Reset
      </BtnForm>
    </Form>
  );
};

export default Filter;

//  {/* <Label htmlFor="make">
//       Car brand
//       <Input
//         id="make"
//         type="text"
//         list="dataMake"
//         onChange={event => setMake(event.target.value)}
//         placeholder="Enter the text"
//       />
//     </Label> */}
//     {/* <datalist id="dataMake">
//       {[...new Set(carsMakeArr)].map((item, key) => (
//         <option key={key} value={item} />
//       ))}
//     </datalist> */}
