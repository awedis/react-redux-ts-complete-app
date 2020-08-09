import axios from 'axios';
import { URL } from '../constants';
import { GET_USERS } from '../endPoints';

const getUsers = () => {
    return axios.get(URL + GET_USERS)
}

export default getUsers;