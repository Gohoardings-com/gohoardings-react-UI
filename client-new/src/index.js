import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap"
import './index.css';
import { Provider } from "react-redux";
import App from './App';
import store from './store'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
    {/* <ApiContext> */}
    <App />
    {/* </ApiContext> */}
  </Provider>
);
