// змінні для необхідних частин стану, щоб отримати дані зі стору через хук useSelector(selector)
export const selectCars = state => state.cars.items;
export const favorite = state => state.favorite.items;
export const selectIsLoading = state => state.cars.isLoading;
export const selectError = state => state.cars.error;
