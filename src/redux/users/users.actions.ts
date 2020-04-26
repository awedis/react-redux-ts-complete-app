import { UsersActionTypes } from './users.types';
import { mocks } from '../mocks';
import { fetchUsersUrl } from '../../api/api';

const {FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USER_FAILURE  } = UsersActionTypes;

export const fetchUsersRequest = () => ({
    type: FETCH_USERS_REQUEST
})

const fetchUsersSuccess = (users: Array<object>) => ({
    type: FETCH_USERS_SUCCESS,
    payload: users
})

const fetchUsersFailure = (error: string) => ({
    type: FETCH_USER_FAILURE,
    payload: error
})

export const fetchUsers = () => {
    return (dispatch: any) => {
        dispatch(fetchUsersRequest())
        setTimeout(() => {
            fetchUsersUrl()
                .then(response => {
                    const users = response.data
                    dispatch(fetchUsersSuccess(users))
                })
                .catch(error => {
                    const errorMsg = error.message
                    dispatch(fetchUsersFailure(errorMsg))
                })
        }, 3000);
    }
};