import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AuthProvider from './context/SignInContext';

import { Provider } from 'react-redux';
import store from './rtk/index';

ReactDOM.render(
  <>
    <Provider store={store}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </Provider>
  </>,
  document.getElementById('root')
);

reportWebVitals();
