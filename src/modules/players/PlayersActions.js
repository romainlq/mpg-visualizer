import { PLAYERS } from './PlayersConstants';

import {
    getOldPlayers,
    getNewPlayers,
} from './PlayersClient';

import { difference } from 'libs/utils';

/** PLAYERS */

const fetchPlayersStart = () => {
    return {
        type: PLAYERS.FETCH_PLAYERS_START,
    }
}

const fetchPlayersSuccess = (oldPlayers, newPlayers) => {
    return {
        type: PLAYERS.FETCH_PLAYERS_SUCCESS,
        oldPlayers,
        newPlayers,
    }
}

const fetchPlayersError = (error) => {
    return {
        type: PLAYERS.FETCH_PLAYERS_ERROR,
        error,
    };
}

/** ODDS */
const fetchPlayersOddsStart = () => {
    return {
        type: PLAYERS.FETCH_PLAYERS_START,
    }
}

const fetchPlayersOddsSuccess = (oldPlayers, newPlayers) => {
    return {
        type: PLAYERS.FETCH_PLAYERS_SUCCESS,
        oldPlayers,
        newPlayers,
    }
}

const fetchPlayersOddsError = (error) => {
    return {
        type: PLAYERS.FETCH_PLAYERS_ERROR,
        error,
    };
}

export const fetchPlayers = () => {
    return async dispatch => {
        dispatch(fetchPlayersStart());

        try {
            const oldPlayersTotal = await getOldPlayers();
            const newPlayersTotal = await getNewPlayers();

            let newPlayers = difference(newPlayersTotal, oldPlayersTotal);
            let oldPlayers = difference(oldPlayersTotal, newPlayersTotal);
            newPlayers = newPlayers.sort((playerA, playerB) => playerB.quotation - playerA.quotation)
            oldPlayers = oldPlayers.sort((playerA, playerB) => playerB.quotation - playerA.quotation)

            return dispatch(fetchPlayersSuccess(oldPlayers, newPlayers));
        } catch (error) {
            return dispatch(fetchPlayersError(error));
        }
    };
}

export const fetchPlayersOdds = () => {
    return (dispatch) => {
        dispatch(fetchPlayersOddsStart());

        return getOldPlayers()
            .then((data) => {
                console.log(data);
                return dispatch(fetchPlayersOddsSuccess(data));
            })
            .catch((err) => {
                return dispatch(fetchPlayersOddsError(err));
            });
    }
}