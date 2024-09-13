import {call, put, takeEvery} from 'redux-saga/effects';
import { fetchApi } from './../api'
import { authUserSuccess, authUserFailure } from '../actions/authActions';

const { AUTH_USER_REQUEST } = require("../actions/authActions").constants;

function fetchAuth(action) {
    try {
        yield put(authUserSuccess);
    }
    catch (e) {
        yield put(authUserFailure(e.message));
    }
}

export default function* authSaga() {
    yield takeEvery(AUTH_USER_REQUEST, fetchAuth);
}