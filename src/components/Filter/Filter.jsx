import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCars } from 'redux/selectors';
import { Input, Label } from './Filter.styled';

const Filter = () => {
  const cars = useSelector(selectCars);
  const carsMakeArr = cars.map(car => car.make);
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

  const [make, setMake] = useState('');
  const [price, setPrice] = useState('');
//   console.log(price);
  return (
    <form>
      <p>Model: {make}</p>
      <Label htmlFor="make">
        Car brand
        <Input
          id="make"
          type="text"
          list="dataMake"
          onChange={event => setMake(event.target.value)}
          placeholder="Enter the text"
        />
      </Label>
      <datalist id="dataMake">
        {[...new Set(carsMakeArr)].map((item, key) => (
          <option key={key} value={item} />
        ))}
      </datalist>

      <p>Price/ 1 hour {price}</p>
      <Label htmlFor="price">
        Price/ 1 hour
        <Input
          id="price"
          type="text"
          list="data"
          onChange={event => setPrice(event.target.value)}
          placeholder="To $"
        />
      </Label>
      <datalist id="data">
        {priceArr.map((item, key) => (
          <option key={key} value={item} />
        ))}
      </datalist>
    </form>
  );
};

export default Filter;
