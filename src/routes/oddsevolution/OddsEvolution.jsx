import React, { Component } from 'react';
import PropTypes from 'prop-types';

import OddCard from 'components/oddcard/OddCard.jsx';

import './OddsEvolution.css';


class OddsEvolution extends Component {
    static propTypes = {
        players: PropTypes.array,
    };

    componentDidMount() {
        const { fetchPlayersOdds } = this.props;
        fetchPlayersOdds();
    }

    renderPlayers = () => {
        const { players } = this.props;

        if (players.length === 0) {
            return <span>No players</span>
        }

        return players.map(player => {
            return (
                <OddCard
                    name={player.name}
                    oldQuotation={player.oldQuotation}
                    newQuotation={player.newQuotation}
                    club={player.club}
                />
            );
        })
    }

    render() {
        return (
            <div className='OddsEvolution'>
                <h1>Evolution côtes</h1>
                <div className='OddsEvolution-list'>
                    {this.renderPlayers()}
                </div>
            </div>
        );
    }
}

export default OddsEvolution;