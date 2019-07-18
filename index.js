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
// import { ConnectedRouter } from 'react-router-redux';
// import 'leaflet/dist/leaflet.css';
// Import root app
import App from './src/App/app';
import ErrorBoundary from './ErrorBoundary';
import configureStore from './store';
import {createBrowserHistory} from 'history';
import {BrowserRouter as Router} from 'react-router-dom';

const history = createBrowserHistory();

// Create redux store with history
const initialState = Immutable.Map();
// const history = createBrowserHistory();
const store = configureStore(initialState, history);
  ReactDOM.render(
    <Provider store={store}>
      <Router>
      <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </Router>
      {/* <ConnectedRouter history={history}> */}
        
      {/* </ConnectedRouter> */}
    </Provider>,
    document.getElementById('root')
  );