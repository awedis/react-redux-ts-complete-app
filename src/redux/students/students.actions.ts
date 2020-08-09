import { StudentsActionTypes } from './students.types';

const { REQUEST_STUDENTS, RECEIVE_STUDENTS } = StudentsActionTypes;

const requestApi = () => ({
    type: REQUEST_STUDENTS
});

const receiveApi = (payload: any) => ({
    type: RECEIVE_STUDENTS,
    payload
});

export {
    requestApi,
    receiveApi
}