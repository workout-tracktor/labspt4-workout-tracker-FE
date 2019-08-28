//React
import React from 'react';
import ReactDOM from 'react-dom';
import App from './views/App';
//Imported
import { BrowserRouter as Router, Route } from "react-router-dom";
import GlobalStyle from './design/global_style'
// Redux
import thunk from "redux-thunk";
import logger from "redux-logger";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers";
//Auth0
import { Auth0Provider } from "./components/auth0-wrapper";
import config from "./config/auth0/auth_config.json";

// A function that routes the user to the right place
// after login
const onRedirectCallback = appState => {
  window.history.replaceState(
    {},
    document.title,
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  );
};

// Redux store
const store = createStore(rootReducer, applyMiddleware(thunk, logger));


ReactDOM.render(
    <Provider store={store}>
      <Router>
        <Auth0Provider
        domain={config.domain}
        client_id={config.clientId}
        redirect_uri={window.location.origin}
        onRedirectCallback={onRedirectCallback}>
        <Route path="/" component={App} />
        <GlobalStyle />
        </Auth0Provider>
      </Router>
    </Provider>,
    document.getElementById('root'))