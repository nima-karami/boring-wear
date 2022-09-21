import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/Store';
import './index.scss';
import 'tachyons';
import reportWebVitals from './reportWebVitals';
import UserContextProvider from './context/UserContextProvider';
import CategoriesContextProvider from './context/CategoriesContextProvider';
import CartContextProvider from './context/CartContextProvider';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
      <BrowserRouter>
          <CategoriesContextProvider>
            <CartContextProvider>
              <App />
            </CartContextProvider>
          </CategoriesContextProvider>
      </BrowserRouter>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
