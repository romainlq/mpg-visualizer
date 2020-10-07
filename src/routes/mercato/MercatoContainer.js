import { connect } from 'react-redux';

import { PLAYERS } from 'modules/players/PlayersConstants';
import { fetchPlayers } from 'modules/players/PlayersActions';

import Mercato from "./Mercato";

const mapStateToProps = (state) => {
    const oldPlayers = state.players.oldPlayers;
    const newPlayers = state.players.newPlayers;

    return {
        POSITIONS: PLAYERS.POSITIONS,
        oldPlayers,
        newPlayers,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPlayers() {
            dispatch(fetchPlayers());
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Mercato)