import { take, cancel, all, put, fork } from 'redux-saga/effects';

import * as types from '../constants/AppConstants';
import homeWatcher from './HomeSaga';

function* loadInitialRequest() {
  const json = yield fetch('api call here').then(response =>
    response.json(),
  );

  yield put({ type: types.LOAD_INITIAL_SUCCESS, response: json });
}

function* initializeAppRequest() {
  const watcher = yield fork(loadInitialRequest);
  yield take([
    types.INITIALIZE_APP_FAILURE,
    types.INITIALIZE_APP_SUCCESS,
  ]);
  yield cancel(watcher);
}

function* rootSaga() {
  yield all([initializeAppRequest(), homeWatcher()]);
}

export default rootSaga;
