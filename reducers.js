import { combineReducers } from 'redux-immutable';
import globalReducer from './src/App/reducers';
import { connectRouter } from 'connected-react-router';
  /**
 * Creates the main reducer with the asynchronously loaded ones
 */
const createReducer = (history) => combineReducers({
      router: connectRouter(history),
      global: globalReducer
    });

    export default createReducer;
