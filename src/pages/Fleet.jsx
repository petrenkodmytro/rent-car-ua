import { CarsList } from 'components/CarsList/CarsList';
import Filter from 'components/Filter/Filter';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllCars } from 'redux/operations';
import { selectCars } from 'redux/selectors';
import { BtnLoadMore } from './Fleet.styled';

const Fleet = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllCars());
  }, [dispatch]);

  const [pageNumber, setPageNumber] = useState(1);

  const cars = useSelector(selectCars);
  const carsPerPage = 8;
  const totalPages = Math.ceil(cars.length / carsPerPage);

  const lastCar = pageNumber * carsPerPage;
  const visibleCars = cars.slice(0, lastCar);

  const onLoadMore = () => {
    setPageNumber(prev => prev + 1);
  };

  const [filteredCars, setFilteredCars] = useState([]);

  return (
    <>
      <Filter setFilteredCars={setFilteredCars} cars={cars} />
      <CarsList cars={filteredCars.length > 0 ? filteredCars : visibleCars} />
      {totalPages > pageNumber && filteredCars.length === 0 && (
        <BtnLoadMore type="button" onClick={onLoadMore}>
          Load more
        </BtnLoadMore>
      )}
    </>
  );
};

export default Fleet;
