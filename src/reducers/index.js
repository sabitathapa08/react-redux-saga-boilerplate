import { combineReducers } from 'redux';
import homeReducer from './HomeReducer';

const GlobalReducer = combineReducers({
  homeReducer,
});

export default GlobalReducer;
