import { UsersActionTypes } from './users.types';

const INITIAL_STATE = {
    loading: false,
    users: [],
    error: '',
}

interface IState {
    loading: Boolean,
    users: Array<{ id: number, name: string }>,
    error: String,
}

interface IAction<T> {
    type: String;
    payload: T
}

const { FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USER_FAILURE } = UsersActionTypes;

const usersReducer = (state = INITIAL_STATE, action: IAction<any>): IState => {
    const { type, payload } = action;
    switch (type) {
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_USERS_SUCCESS:
            return {
                loading: false,
                users: payload,
                error: ''
            }
        case FETCH_USER_FAILURE:
            return {
                loading: false,
                users: [],
                error: payload
            }
        default:
            return state;
    }
}

export default usersReducer;