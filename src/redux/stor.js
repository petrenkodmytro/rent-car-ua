import { configureStore } from '@reduxjs/toolkit';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
// аналог localStorage
import storage from 'redux-persist/lib/storage';
import { carsReducer } from './carsSlice';
import { favoritSlice } from './favoritSlice';

// import { filterReducer } from './filterSlice';

// налаштування для redux-persist (localStorage)
const carsConfig = {
  key: 'cars',
  storage,
};
const favoritConfig = {
  key: 'favorite',
  storage,
};

export const store = configureStore({
  reducer: {
    cars: persistReducer(carsConfig, carsReducer),
    favorite: persistReducer(favoritConfig, favoritSlice.reducer),

    // filter: filterReducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
// console.log(store.cars)
// створюємо persistor для нашого store
export const persistor = persistStore(store);
