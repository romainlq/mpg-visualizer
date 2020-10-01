import { PLAYERS } from './PlayersConstants';

import { getPlayers } from './PlayersClient';


const fetchPlayersStart = () => {
    return {
        type: PLAYERS.FETCH_PLAYERS_START,
    }
}

const fetchPlayersSuccess = (players) => {
    return {
        type: PLAYERS.FETCH_PLAYERS_SUCCESS,
        players,
    }
}

const fetchPlayersError = (error) => {
    return {
        type: PLAYERS.FETCH_PLAYERS_ERROR,
        error,
    };
}

export const fetchPlayers = () => {
    return async dispatch => {
        dispatch(fetchPlayersStart());

        try {
            const players = await getPlayers();
            console.log(players);
            return dispatch(fetchPlayersSuccess(players));
        } catch (error) {
            return dispatch(fetchPlayersError(error));
        }
    };
} 