import axios from 'axios';

export const getOldPlayers = () => {
    const OLD_FILE = './data/data-2020-9-30-15-20.json';
    return axios.get(OLD_FILE).then(res => {
        return res.data;
    });
}

export const getNewPlayers = () => {
    const NEW_FILE = './data/data-2020-10-7-15-53.json';
    return axios.get(NEW_FILE).then(res => {
        return res.data;
    });
}