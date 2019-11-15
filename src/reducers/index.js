import { fromJS } from 'immutable';
import { combineReducers } from 'redux';
import * as types from '../constants/AppConstants';
import homeReducer from './HomeReducer';

export const initialState = fromJS({
  response: null,
  error: null,
  requesting: false,
  success: true,
});

function Rootreducers(state = initialState, action = {}) {
  switch (action.type) {
    case types.INITIALIZE_APP_REQUEST:
      return state.merge({
        requesting: true,
      });
    case types.INITIALIZE_APP_SUCCESS:
      return state.merge({
        requesting: false,
      });
    case types.INITIALIZE_APP_FAILURE:
      return state.merge({
        requesting: false,
        error: true,
      });
    case types.LOAD_INITIAL_REQUEST:
      return state.merge({
        requesting: true,
      });
    case types.LOAD_INITIAL_SUCCESS:
      return state.merge({
        requesting: false,
        response: 'response on success',
      });
    case types.LOAD_INITIAL_FAILURE:
      return state.merge({
        requesting: false,
        error: true,
      });
    default:
      return state;
  }
}

const GlobalReducer = combineReducers({
  Rootreducers,
  homeReducer,
});

export default GlobalReducer;
