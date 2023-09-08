import { CarsList } from 'components/CarsList/CarsList';
import Filter from 'components/Filter/Filter';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCars, fetchCarsPagination } from 'redux/operations';
import { selectCars } from 'redux/selectors';
// const cardsPerPage = 8;

const Fleet = () => {
  const [pageNumber, setPageNumber] = useState(1);
  // const [totalPage, setTotalPage] = useState(null);
  const cars = useSelector(selectCars);
  console.log(cars);
  // const totalPages = Math.ceil(cars.length / cardsPerPage);
  const dispatch = useDispatch();

  const onLoadMore = () => {
    setPageNumber(prev => prev + 1);
  };
  // console.log(cars);

  useEffect(() => {
    dispatch(fetchCarsPagination(pageNumber));
  }, [dispatch, pageNumber]);

  return (
    <>
      {/* <Filter /> */}
      <CarsList cars={cars} />

      <button onClick={onLoadMore}>Load more</button>
    </>
  );
};

export default Fleet;
