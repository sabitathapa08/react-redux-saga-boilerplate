import { fromJS } from 'immutable';
import { combineReducers } from 'redux';
import * as types from './constants';
import homeReducer from '../containers/Home/reducer';

export const initialState = fromJS({
  response: null,
  error: null,
  requesting: false,
  success: true,
});

function Appreducers(state = initialState, action = {}) {
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

const Rootreducers = combineReducers({
  Appreducers,
  homeReducer,
});

export default Rootreducers;
