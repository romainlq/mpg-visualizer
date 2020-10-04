import axios from 'axios';

export const getPlayers = (path = '') => {
    return axios.get(path).then((response) => {
        const { data } = response;

        return data;
    });
}