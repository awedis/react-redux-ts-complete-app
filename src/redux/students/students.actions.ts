import { 
    REQUEST_STUDENTS,
    RECEIVE_STUDENTS 
} from '../actions';

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