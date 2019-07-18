import { combineReducers } from 'redux';
import globalReducer from './src/App/reducers';
import { connectRouter } from 'connected-react-router';
  /**
 * Creates the main reducer with the asynchronously loaded ones
 */
export default (history) => combineReducers({
      router: connectRouter(history),
      global: globalReducer
    });

    
