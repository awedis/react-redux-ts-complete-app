import { UsersActionTypes } from './users.types';
import { mocks } from '../mocks';
import axios from 'axios';

export const fetchUsersRequest = () => {
    return {
        type: UsersActionTypes.FETCH_USERS_REQUEST
    }
}

const fetchUsersSuccess = (users: any) => {
    return {
        type: UsersActionTypes.FETCH_USERS_SUCCESS,
        payload: users
    }
}

const fetchUsersFailure = (error: any) => {
    return {
        type: UsersActionTypes.FETCH_USER_FAILURE,
        payload: error
    }
}

export const fetchUsers = () => {
    console.log('----fetchUsers');
    return (dispatch: any) => {
        dispatch(fetchUsersRequest())
        setTimeout(() => {
            axios.get('https://jsonplaceholder.typicode.com/comments')
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