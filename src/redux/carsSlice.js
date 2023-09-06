import { createSlice } from '@reduxjs/toolkit';
import { fetchCars } from './operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const pendingReduser = state => {
  state.isLoading = true;
  state.error = null;
};
const rejectedReduser = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
const fetchCarsFulfilledReduser = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items = action.payload;
};
// const addContactFulfilledReduser = (state, action) => {
//   state.isLoading = false;
//   state.error = null;
//   state.items = [...state.items, action.payload];
// };
// const deleteContactFulfilledReduser = (state, action) => {
//   state.isLoading = false;
//   state.error = null;
//   state.items = state.items.filter(item => item.id !== action.payload.id);
// };

// Функція createSlice() це надбудова над createAction() та createReducer(), яка стандартизує та ще більше спрощує оголошення слайсу. Вона приймає параметри налаштувань, створює і повертає типи екшенів, генератори екшенів та редюсер.
// Slice для поля 'Cars' з файлу store.js
const carsSlice = createSlice({
  //назва поля в нашому стейті
  name: 'cars',
  //початковий стан
  initialState,

  // функціональна форма
  extraReducers: builder =>
    builder
      .addCase(fetchCars.pending, pendingReduser)
      .addCase(fetchCars.fulfilled, fetchCarsFulfilledReduser)
      .addCase(fetchCars.rejected, rejectedReduser),
  //   .addCase(addContact.pending, pendingReduser)
  //   .addCase(addContact.fulfilled, addContactFulfilledReduser)
  //   .addCase(addContact.rejected, rejectedReduser)
  //   .addCase(deleteContact.pending, pendingReduser)
  //   .addCase(deleteContact.fulfilled, deleteContactFulfilledReduser)
  //   .addCase(deleteContact.rejected, rejectedReduser),
});

// console.log(CarsSlice.reducer);

export const carsReducer = carsSlice.reducer;
