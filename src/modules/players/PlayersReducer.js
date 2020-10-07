
import { PLAYERS } from './PlayersConstants';

const defaultState = {
    players: [],
    newPlayers: [],
    oldPlayers: [],
    processing: false,
    error: null,
}

export default function players(state = defaultState, action) {
    switch (action.type) {
        case PLAYERS.FETCH_PLAYERS_START:
            return {
                ...state,
                processing: true,
                error: null,
            };

        case PLAYERS.FETCH_PLAYERS_SUCCESS:
            return {
                ...state,
                processing: false,
                oldPlayers: action.oldPlayers,
                newPlayers: action.newPlayers,
            };

        case PLAYERS.FETCH_PLAYERS_ERROR:
            return {
                ...state,
                processing: false,
                error: action.error,
            };

        default:
            return state;

    }

}