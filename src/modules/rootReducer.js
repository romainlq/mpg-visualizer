import { combineReducers } from 'redux';
// import { connectRouter } from 'connected-react-router';

import players from 'modules/players/PlayersReducer';
import { connectRouter } from 'connected-react-router';

export default (history) => combineReducers({
    router: connectRouter(history),
    players,
});