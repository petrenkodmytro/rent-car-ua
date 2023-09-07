import { useState } from 'react';
import {
  BtnInfo,
  CarInfo,
  CardWrap,
  Delimeter,
  FavoriteIconFalse,
  FavoriteIconTrue,
  FavoritesBtn,
  ImgCar,
  ImgWrap,
  InfoWrap,
  Model,
  Price,
  Title,
  Year,
} from './CarItem.styled';
import Modal from 'components/Modal/Modal';
import icon from '../../images/icons.svg';
import { useDispatch, useSelector } from 'react-redux';
import { favorite } from 'redux/selectors';
import { addFavoriteCar, deleteFavoriteCar } from 'redux/favoritSlice';

const CarItem = ({ item }) => {
  const dispatch = useDispatch();
  const favoriteList = useSelector(favorite);
  const isFavorite = favoriteList?.some(
    favoriteCar => favoriteCar?.id === item.id
  );
  console.log(isFavorite);

  const addFavorite = () => {
    dispatch(addFavoriteCar(item));
  };

  const removeFavorite = () => {
    dispatch(deleteFavoriteCar(item));
  };

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

  const [isShowModal, setIsShowModal] = useState(false);

  const openModal = () => {
    setIsShowModal(true);
  };
  const closeModal = () => {
    setIsShowModal(false);
  };

  return (
    <>
      <CardWrap>
        <ImgWrap>
          <ImgCar src={img} alt={make} />
        </ImgWrap>

        <CarInfo>
          <FavoritesBtn
            onClick={isFavorite ? removeFavorite : addFavorite}
            type="button"
          >{isFavorite ? <FavoriteIconTrue width={18} height={18}>
          <use href={icon + '#icon-normal'}></use>
        </FavoriteIconTrue> : <FavoriteIconFalse width={18} height={18}>
          <use href={icon + '#icon-normal'}></use>
        </FavoriteIconFalse>}
            
          </FavoritesBtn>
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
              <span>{address.split(',')[1] ?? 'Unknown'}</span>
              <Delimeter>|</Delimeter>
              <span>{address.split(',')[2] ?? 'Unknown'}</span>{' '}
              <Delimeter>|</Delimeter>
              <span>{rentalCompany ?? 'Unknown'}</span>
            </p>
            <p>
              <span>{type ?? 'Unknown'}</span>
              <Delimeter>|</Delimeter>
              <span>{make ?? 'Unknown'}</span>
              <Delimeter>|</Delimeter>
              <span>{mileage ?? 'Unknown'}</span>
              <Delimeter>|</Delimeter>
              <span>{accessories[0] ?? 'Unknown'}</span>
            </p>
          </InfoWrap>
        </CarInfo>
        <BtnInfo onClick={openModal} type="buttun">
          Learn more
        </BtnInfo>
      </CardWrap>
      {isShowModal && <Modal item={item} closeModal={closeModal} />}
    </>
  );
};

export default CarItem;
