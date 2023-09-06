import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { store } from 'redux/stor';

const theme = {
  colors: {
    mainColor: '#121417',
    whiteColor: '#FFF',
    secondColor: 'rgba(18, 20, 23, 0.50)',
    thirdColor: '#363535',
    bgc: '#F9F9F9',
    accentLight: '#3470FF',
    accentDark: '#0B44CD',
    error: '#720017',
  },
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="rent-car-ua">
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
