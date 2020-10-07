import React, { Component } from 'react';
import PropTypes from 'prop-types';

import PlayerList from 'components/playerlist/PlayerList';

import './Mercato.css'

class Mercato extends Component {
  static propTypes = {
    POSITIONS: PropTypes.object,
    newPlayers: PropTypes.array,
    oldPlayers: PropTypes.array,
    fetchPlayers: PropTypes.func,
  }

  componentDidMount() {
    const { fetchPlayers } = this.props;
    fetchPlayers();
  }

  render() {
    const {
      POSITIONS,
      oldPlayers,
      newPlayers,
    } = this.props;

    return (
        <div className="Mercato">
          <h1>New Players</h1>
          <PlayerList
            POSITIONS={POSITIONS}
            list={newPlayers}
          />
          <h1>Old Players</h1>
          <PlayerList
            POSITIONS={POSITIONS}
            list={oldPlayers}
          />
        </div>
    );
  }
}

export default Mercato;
