/**
 * app.js
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */
import 'babel-polyfill';

// Import all the third party stuff
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import Immutable from 'immutable';
// import 'leaflet/dist/leaflet.css';
// Import root app
import App from './src/App/app';
import ErrorBoundary from './ErrorBoundary';
import {createBrowserHistory} from 'history';
import configureStore from './store';

// Create redux store with history
const initialState = Immutable.Map();
const history = createBrowserHistory();
const store = configureStore(initialState, history);
  ReactDOM.render(
    <Provider store={store}>
      {/* <ConnectedRouter history={history}> */}
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      {/* </ConnectedRouter> */}
    </Provider>,
    document.getElementById('root')
  );