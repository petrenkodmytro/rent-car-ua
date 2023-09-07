import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};
export const favoritSlice = createSlice({
  name: 'favorite',
  initialState,

  reducers: {
    addFavoriteCar(state, action) {
      state.items = [...state.items, action.payload];
    },
    deleteFavoriteCar(state, action) {
      state.items = state.items.filter(car => car.id !== action.payload.id);
    },
  },
});
export const { addFavoriteCar, deleteFavoriteCar } = favoritSlice.actions;
