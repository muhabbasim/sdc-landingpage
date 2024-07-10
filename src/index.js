import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './utils/i18n.ts'
import { Provider } from 'react-redux';
import store from './store/store.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
