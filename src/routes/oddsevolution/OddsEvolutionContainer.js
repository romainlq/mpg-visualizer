import { connect } from 'react-redux';


import OddsEvolution from './OddsEvolution';

const mapStateToProps = () => {

    let playerList = [];

    return {
        playerList,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {

    };
}

export default connect(mapStateToProps, mapDispatchToProps)(OddsEvolution);