import { List } from './CarsList.styled';
// import { useDispatch, useSelector } from 'react-redux';
// import { selectCars } from 'redux/selectors';
// import { useEffect } from 'react';
// import { fetchCars } from 'redux/operations';
import CarItem from 'components/CarItem/CarItem';

export const CarsList = ({ cars }) => {
  // const cars = useSelector(selectCars);
  // const dispatch = useDispatch();
  // console.log(cars);
  // useEffect(() => {
  //   dispatch(fetchCars());
  // }, [dispatch]);

  return (
    <List>
      {cars.map(car => (
        <CarItem key={car.id} item={car} />
      ))}
    </List>
  );
};
