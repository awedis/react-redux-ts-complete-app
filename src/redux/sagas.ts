import { all } from 'redux-saga/effects';
import studentsSaga from './students/students.saga';

function* rootSaga() {
    yield all([
        studentsSaga()
    ])
}

export default rootSaga;