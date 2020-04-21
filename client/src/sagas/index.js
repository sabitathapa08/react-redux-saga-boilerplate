import { all } from 'redux-saga/effects';

import homeWatcher from './HomeSaga';

function* rootSaga() {
  yield all([homeWatcher()]);
}

export default rootSaga;
