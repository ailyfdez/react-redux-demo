import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from "react-redux";
import './index.css';
import App from './app/App';

import store from './redux/store';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode></Provider>,
  document.getElementById('root')
);