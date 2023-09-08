import CarItem from 'components/CarItem/CarItem';
import { List } from 'components/CarsList/CarsList.styled';
import React from 'react';
import { useSelector } from 'react-redux';
import { favorite } from 'redux/selectors';

const Favorites = () => {
  const favoriteList = useSelector(favorite);

  return (
    <>
      {favoriteList.length === 0 ? (
        <p style={{ marginTop: '20px', fontStyle: 'italic' }}>
          Please add your favorite car
        </p>
      ) : (
        <List>
          {favoriteList.map(car => (
            <CarItem key={car.id} item={car} />
          ))}
        </List>
      )}
    </>
  );
};

export default Favorites;
