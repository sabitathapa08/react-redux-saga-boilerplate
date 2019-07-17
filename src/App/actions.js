import * as types from './constants';

export const initializeAppRequest = () => ({
  type: types.INITIALIZE_APP_REQUEST
});
export const initializeAppSuccess = () => ({
  type: types.INITIALIZE_APP_SUCCESS
});
export const initializeAppFailure = () => ({
  type: types.INITIALIZE_APP_FAILURE
});

export const loadInitialRequest = () => ({
  type: types.LOAD_INITIAL_REQUEST
});
export const loadInitialSuccess = () => ({
  type: types.LOAD_INITIAL_SUCCESS
});
export const loadInitialFailure = () => ({
  type: types.LOAD_INITIAL_FAILURE
});