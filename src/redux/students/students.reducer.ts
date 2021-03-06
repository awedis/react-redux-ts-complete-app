import { 
    RECEIVE_STUDENTS
} from '../actions';

const studentsReducer = (state = {}, action: any) => {
    const { type, payload } = action;
    switch (type) {
        case RECEIVE_STUDENTS:
            return {
                payload
            }
        default:
            return state;
    }
}

export default studentsReducer;