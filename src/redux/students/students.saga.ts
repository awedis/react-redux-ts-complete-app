import { call, put, fork, all, takeLatest } from 'redux-saga/effects';
import { REQUEST_STUDENTS } from '../actions';
import { receiveApi } from './students.actions';
import getStudents from '../../api/students/getStudents.api';

function* getApiStudents(action: any) {
    try {
        const data = yield call(getStudents);
        yield put(receiveApi(data));
    } catch (error) {
        console.log(error);
    }
}

function* watchGetStudents() {
    yield takeLatest(REQUEST_STUDENTS, getApiStudents)
}

function* rootSaga() {
    yield all([
        fork(watchGetStudents)
    ])
}

export default rootSaga;