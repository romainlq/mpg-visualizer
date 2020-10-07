import { connect } from 'react-redux';
import Mercato from "./Mercato";

import {PLAYERS} from 'modules/players/PlayersConstants';


const mapStateToProps = (state) => {
    console.log(PLAYERS.POSITIONS)

    return {
        POSITIONS: PLAYERS.POSITIONS,
    }
}

export default connect(mapStateToProps)(Mercato)