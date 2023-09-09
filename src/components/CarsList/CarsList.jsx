import { List } from './CarsList.styled';
import CarItem from 'components/CarItem/CarItem';

export const CarsList = ({ cars }) => {
  return (
    <List>
      {cars.map(car => (
        <CarItem key={car.id} item={car} />
      ))}
    </List>
  );
};
