import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import GlobalReducer from './src/reducers';

const history = createBrowserHistory();

/**
 * Creates the main reducer with the asynchronously loaded ones
 */
export default asyncReducers =>
  combineReducers({
    router: connectRouter(history),
    global: GlobalReducer,
    ...asyncReducers,
  });
