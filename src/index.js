import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import UserContextProvider from './context/UserContextProvider';
import ProductsContextProvider from './context/ProductsContextProvider';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <UserContextProvider>
        <ProductsContextProvider>
          <App />
        </ProductsContextProvider>
      </UserContextProvider>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
