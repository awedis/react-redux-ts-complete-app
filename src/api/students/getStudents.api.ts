import axios from 'axios';
import { URL } from '../constants';
import { GET_STUDENTS } from '../endPoints';

const getStudents = () => {
    return axios.get(URL + GET_STUDENTS)
}

export default getStudents;