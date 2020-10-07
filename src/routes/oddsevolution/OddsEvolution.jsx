import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './OddsEvolution.css';


class OddsEvolution extends Component {
    static propTypes = {
        playerList: PropTypes.array,
    };

    renderPlayerList = () => {
        const { playerList } = this.props;

        if (playerList.length === 0) {
            return <span>No players</span>
        }

        // return playerList.map(player => {
        //     return <
        // })
    }

    render() {
        return (
            <div className='OddsEvolution'>
                <h1>Evolution côtes</h1>
                <div className='Odds-evolution'>
                    {this.renderPlayerList()}
                </div>
            </div>
        );
    }
}

export default OddsEvolution;