import { createSlice } from '@reduxjs/toolkit';
import { fetchAllCars } from './operations';

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
const fetchAllCarsFulfilledReduser = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items = action.payload;
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,

  extraReducers: builder =>
    builder
      .addCase(fetchAllCars.pending, pendingReduser)
      .addCase(fetchAllCars.fulfilled, fetchAllCarsFulfilledReduser)
      .addCase(fetchAllCars.rejected, rejectedReduser),
});

export const filterReducer = filterSlice.reducer;
