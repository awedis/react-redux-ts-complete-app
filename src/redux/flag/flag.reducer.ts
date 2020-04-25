import { FlagActionTypes } from './flag.types';

const INITIAL_STATE = {
    currentFlag: 'ON'
}

interface IState {
    currentFlag: Object;
}

interface IAction {
    type: String;
    payload: Object
}

const flagReducer = (state = INITIAL_STATE, action: IAction): IState => {
    switch (action.type) {
        case FlagActionTypes.SET_FLAG:
            return {
                ...state,
                currentFlag: action.payload
            }
        default:
            return state;
    }
}

export default flagReducer;