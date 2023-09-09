// import { createSelector } from '@reduxjs/toolkit';

// змінні для необхідних частин стану, щоб отримати дані зі стору через хук useSelector(selector)
export const selectCars = state => state.cars.items;
export const favorite = state => state.favorite.items;
export const selectFilter = state => state.filter.items;
export const selectIsLoading = state => state.cars.isLoading;
export const selectError = state => state.cars.error;

// У компоненті списку ContactList у нас є код обчислення під поточну умову фільтрації. Приховаємо від компонента логіку обчислення відфільтрованого списку контактів.
// ми використовуємо інші селектори всередині селектора selectvisibleContacts, щоб одержати необхідні частини стану для наступних обчислень.

// Процес оптимізації селекторів називається мемоізація - збереження результатів виконання функції для запобігання повторним обчисленням.
// Для мемоізації селектора використовується функція createSelector, яка приймає масив селекторів, значення яких необхідні для наступних обчислень та функцію перетворювач, в якій виконуватимуться всі обчислення.
// У масиві селекторів можуть бути будь-які інші селектори, як атомарні так і складові, у тому числі мемоізовані.
// Результати вхідних селекторів передаються як аргументи функції перетворення в тому самому порядку, в якому вони перераховані.
// Повторні обчислення виконуються лише якщо зміниться значення якогось параметра, в іншому випадку повертається результат останнього виклика функції.
// export const selectvisibleContacts = createSelector(
//   [selectContacts, selectFilter],
//   (contacts, filter) => {
//     const normalizeFilter = filter.toLocaleLowerCase();
//     const visibleContacts = contacts
//       ?.filter(contact =>
//         contact?.name?.toLocaleLowerCase().includes(normalizeFilter)
//       )
//       .sort((firstName, secondName) =>
//         firstName.name.localeCompare(secondName.name)
//       );
//     return visibleContacts;
//   }
// );
