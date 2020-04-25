import { UsersActionTypes } from './users.types';

const INITIAL_STATE = {
    loading: false,
    users: [],
    error: '',
}

interface IState {
    loading: Boolean,
    users: Array<Object>,
    error: String,
}

interface IAction {
    type: String;
    payload: Object
}

const usersReducer = (state = INITIAL_STATE, action: IAction): any => {
    switch (action.type) {
        case UsersActionTypes.FETCH_USERS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case UsersActionTypes.FETCH_USERS_SUCCESS:
            return {
                loading: false,
                users: action.payload,
                error: ''
            }
        case UsersActionTypes.FETCH_USER_FAILURE:
            return {
                loading: false,
                users: [],
                error: action.payload
            }
        default:
            return state;
    }
}

export default usersReducer;