import { takeLatest, take, call, put, fork, cancel, select } from "redux-saga/effects";
import {GET_NEWS_REQUEST, getNewsSuccess, getNewsFailure} from './index';

function* getNews() {
    try{
        const resp = yield call(fetch, 'http://dummy.restapiexample.com/api/v1/employees')

     yield put(getNewsSuccess(resp.json()))
    }
    catch(e) {
        yield put(getNewsFailure(e))
    }
}

function* homeWatcher() {
    yield takeLatest(GET_NEWS_REQUEST, getNews);
}

export default homeWatcher