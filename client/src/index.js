import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';
import App from './App';
import Apicontext from './Apis/apicontext';
import { Provider } from "react-redux";
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Apicontext>
    <App />
    </Apicontext>
  </Provider>
);
