import { connect } from 'react-redux';

import { fetchPlayersOdds } from 'modules/players/PlayersActions';

import OddsEvolution from './OddsEvolution';

const mapStateToProps = (state) => {
    const players = state.players.players;

    return {
        players,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPlayersOdds() {
            dispatch(fetchPlayersOdds());
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(OddsEvolution);