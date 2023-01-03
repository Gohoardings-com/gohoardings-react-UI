import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap"
import './index.css';
import ApiContext from './apis/apiContext';
import { Provider } from "react-redux";
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";
import store from './store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="dev-22u-b2m7.us.auth0.com"
    clientId="qTXhk9xH54OYcElfl8SXfmgcwetRw2Eb"
    redirectUri={window.location.origin}
  >
    <Provider store={store}>
    <ApiContext>
    <App />
    </ApiContext>
  </Provider>
  </Auth0Provider>
);