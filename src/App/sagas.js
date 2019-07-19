import React from "react";
import { takeLatest, take, call, put, fork, cancel, select, all } from "redux-saga/effects";
import { delay } from "redux-saga";
import { LOCATION_CHANGE, push } from "react-router-redux";
import homeWatcher from '../containers/Home/saga';

import * as types from "./constants";
import * as actions from "./actions";

function* loadInitialRequest() {
    const json = yield fetch('api call here')
    .then(response => response.json());

  yield put({ type: types.LOAD_INITIAL_SUCCESS, response: json })
}

function* initializeAppRequest() {
    // const watcher = yield fork(loadInitialRequest);
    yield take([types.INITIALIZE_APP_FAILURE, types.INITIALIZE_APP_SUCCESS]);
    yield cancel(watcher);
}

function* rootSaga() {
    yield all([
        initializeAppRequest(),
        homeWatcher()]);
}

export default rootSaga;