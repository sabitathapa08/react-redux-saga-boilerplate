import { combineReducers } from 'redux';
import globalReducer from './src/App/reducers';
import { connectRouter } from 'connected-react-router';
import { LOCATION_CHANGE } from 'react-router-redux';
import { fromJS } from 'immutable';
import {createBrowserHistory} from 'history';

const history = createBrowserHistory();
// Initial routing state
const routeInitialState = fromJS({
  location: null
});

/**
 * Merge route into the global application state
 */
function routeReducer(state = routeInitialState, action) {
  switch (action.type) {
    /* istanbul ignore next */
    case LOCATION_CHANGE:
      return state.merge({
        location: action.payload
      });
    default:
      return state;
  }
}
  /**
 * Creates the main reducer with the asynchronously loaded ones
 */
export default (asyncReducers) => combineReducers({
      router: connectRouter(history),
      global: globalReducer,
      ...asyncReducers
    });

    
