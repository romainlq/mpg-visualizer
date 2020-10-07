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
        type: PLAYERS.FETCH_PLAYERS_ODDS_START,
    }
}

const fetchPlayersOddsSuccess = (players) => {
    return {
        type: PLAYERS.FETCH_PLAYERS_ODDS_SUCCESS,
        players,
    }
}

const fetchPlayersOddsError = (error) => {
    return {
        type: PLAYERS.FETCH_PLAYERS_ODDS_ERROR,
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

const formatPlayersWithOdds = (oldPlayers, newPlayers) => {
    const formattedPlayers = [];
    /**
     * 1 - On parcourt les nouveaux
     * 2 - Pour chaque nouveau, on regarde si il est dans les anciens
     * 3 - Si oui, on prend le prix nouveau, le prix ancien, le nom, et on l'ajoute aux formattedPlayers
     * */
    newPlayers.forEach(newPlayer => {
        const oldValuePlayer = oldPlayers.find(player => player.id === newPlayer.id);
        if (oldValuePlayer) {
            if (oldValuePlayer.quotation !== newPlayer.quotation) {
                if (oldValuePlayer.quotation === 13 || newPlayer.quotation === 13) {
                    console.log(newPlayer)
                }

                let name = '';
                if (newPlayer.firstname) {
                    name += newPlayer.firstname;
                }
                if (newPlayer.lastname) {
                    name += ' ' + newPlayer.lastname;
                }

                const player = {
                    name,
                    newQuotation: newPlayer.quotation,
                    oldQuotation: oldValuePlayer.quotation,
                    club: newPlayer.club,
                    position: newPlayer.position,
                };
                formattedPlayers.push(player);
            }
        }
    });

    return formattedPlayers;
}

export const fetchPlayersOdds = () => {
    return async dispatch => {
        dispatch(fetchPlayersOddsStart());

        try {
            const oldPlayers = await getOldPlayers();
            const newPlayers = await getNewPlayers();

            let players = formatPlayersWithOdds(oldPlayers, newPlayers);
            players = players.sort((playerA, playerB) => playerB.newQuotation - playerA.newQuotation)

            return dispatch(fetchPlayersOddsSuccess(players));
        } catch (error) {
            return dispatch(fetchPlayersOddsError(error));
        }
    };
}