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
import { createBrowserHistory } from 'history';
// import 'leaflet/dist/leaflet.css';
import App from './src/App/app';
import ErrorBoundary from './ErrorBoundary';
import configureStore from './store';

const history = createBrowserHistory();

if (process.env.NODE_ENV !== 'production') {
  console.log(' we are in development mode!');
}

const initialState = {};
const store = configureStore(initialState, history);
ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);
