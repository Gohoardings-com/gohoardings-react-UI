import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap"
import './index.css';
import Apicontext from './apis/apicontext';
import {Provider} from "react-redux";
import App from './App';
import {Auth0Provider} from "@auth0/auth0-react";
import store from './store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
  domain="dev-u6imab7im45pcjdk.us.auth0.com"
  clientId="7NxYErpTNLEnOH4632aomXrrZnGgnCr6"
  redirectUri={window.location.origin}
  >
    <Provider store={store}>
    <Apicontext>
    <App />
    </Apicontext>
  </Provider>
  </Auth0Provider>
);