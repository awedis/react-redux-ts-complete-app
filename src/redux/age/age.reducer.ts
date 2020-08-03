import { AgeActionTypes } from './age.types';

const INITIAL_STATE = {
    age: 20
}

interface IState {
    age: number,
}

interface IAction<T> {
    type: String;
    payload: T
}

const { AGE_UP, AGE_DOWN } = AgeActionTypes;

const ageReducer = (state = INITIAL_STATE, action: IAction<any>): IState => {
    const { type, payload } = action;
    switch (type) {
        case AGE_UP:
            return {
                ...state,
                age: state.age += payload
            }
        case AGE_DOWN:
            return {
                ...state,
                age: state.age -= payload
            }
        default:
            return state;
    }
}

export default ageReducer;