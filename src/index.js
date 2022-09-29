import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Elements } from '@stripe/react-stripe-js';


import { store, persistor } from './store/Store';
import { stripePromise, stripeOptions } from './utils/Stripe/Stripe';


import './index.scss';
import 'tachyons';
import reportWebVitals from './reportWebVitals';

import App from './App';



ReactDOM.render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Elements stripe={ stripePromise } >
            <App />
          </Elements>
        </BrowserRouter>
      </PersistGate>
    </Provider>, document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
