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

// import { filterReducer } from './filterSlice';

// налаштування для redux-persist (localStorage)
const carsConfig = {
  key: 'cars',
  storage,
};

export const store = configureStore({
  reducer: {
    cars: persistReducer(carsConfig, carsReducer),
    // filter: filterReducer,
  },

 
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// створюємо persistor для нашого store
export const persistor = persistStore(store);
