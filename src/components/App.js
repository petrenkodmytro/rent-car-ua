import { lazy } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import Home from 'pages/Home';


const Fleet = lazy(() => import('../pages/Fleet'));
const Favorites = lazy(() => import('../pages/Favorites'));
const Contacts = lazy(() => import('../pages/Contacts'));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/catalog" element={<Fleet />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
      <GlobalStyle />
    </>
  );
}

export default App;
