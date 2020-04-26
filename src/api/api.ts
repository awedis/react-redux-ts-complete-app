import axios from 'axios';
const URL = 'http://localhost:4000';

export const fetchUsersUrl = () => {
    return axios.get(URL + '/users' )
}