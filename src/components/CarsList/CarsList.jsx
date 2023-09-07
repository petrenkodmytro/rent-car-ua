import { List } from './CarsList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectCars, selectIsLoading } from 'redux/selectors';
import { useEffect } from 'react';
import { fetchCars } from 'redux/operations';
import CarItem from 'components/CarItem/CarItem';
// import { Loading } from 'notiflix';

export const CarsList = () => {
  const cars = useSelector(selectCars);
  // const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  console.log(cars);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  return (
    <>
      {/* {isLoading ? Loading.arrows() : Loading.remove()} */}
      <List>
        {cars.map(car => (
          <CarItem key={car.id} item={car} />
        ))}
      </List>
    </>
  );
};
