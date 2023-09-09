import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://64739e80d784bccb4a3cc766.mockapi.io';

export const fetchAllCars = createAsyncThunk(
  'cars/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/adverts');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const fetchCarsPagination = createAsyncThunk(
//   'cars/fetchPagination',
//   async (pageNumber, thunkAPI) => {
//     const options = {
//       params: {
//         page: pageNumber,
//         limit: 8,
//       },
//     };
//     try {
//       const response = await axios.get('/adverts', options);
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
