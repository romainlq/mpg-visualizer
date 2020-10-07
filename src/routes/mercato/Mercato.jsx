import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import PlayerList from 'components/playerlist/PlayerList';

import './Mercato.css'

class Mercato extends Component {
  static propTypes = {
    POSITIONS: PropTypes.object,
  }

  state = {
    newPlayers: [],
    oldPlayers: [],
    availablePlayersMorning: [],
    availablePlayersAfternoon: [],
  };

  componentDidMount() {
    let morning = [];
    let afternoon = [];
    let newPlayers = [];
    let oldPlayers = [];

    const OLD_FILE = './data/data-2020-9-30-15-20.json';
    const NEW_FILE = './data/data-2020-10-7-15-53.json';

    axios.get(OLD_FILE).then((res) => {
      let data = res.data;
      return morning = data;
    }).then(async () => {
      const { data }  = await axios.get(NEW_FILE);
      return afternoon = data;
    }).then(() => {
      newPlayers = this.difference(afternoon, morning)
      oldPlayers = this.difference(morning, afternoon)
      newPlayers = newPlayers.sort((playerA, playerB) => playerB.quotation - playerA.quotation)

      this.setState(() => ({
        availablePlayersMorning: morning,
        availablePlayersAfternoon: afternoon,
        newPlayers,
        oldPlayers,
      }));
    })
    }

  comparer = (otherArray) => {
    return function(current){
      return otherArray.filter(function(other){
        return other.id === current.id
      }).length === 0;
    }
  };

  difference = (arrA, arrB) => {
    return arrA.filter(function(obj) {
      return !arrB.some(function(obj2) {
          return obj.id === obj2.id;
      });
  });
  }

  render() {
    const { POSITIONS } = this.props;

    const {
      newPlayers,
      oldPlayers,
    } = this.state;

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
