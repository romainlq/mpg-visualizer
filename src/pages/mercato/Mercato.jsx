import React, { Component } from 'react';
import axios from 'axios';


import PlayerList from '../../components/playerlist/PlayerList';

class Mercato extends Component {
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

    // const OLD_FILE = './data/data-2020-9-15-13-49.json';
    // const OLD_FILE = './data/data-2020-9-21-17-4.json';
    const OLD_FILE = './data/data-2020-9-29-13-29.json';
    const NEW_FILE = './data/data-2020-9-30-15-20.json';

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
    const {
      newPlayers,
      oldPlayers,
    } = this.state;

    return (
        <div className="App">
          <h1>New Players</h1>
          <PlayerList list={newPlayers} />
          <h1>Old Players</h1>
          <PlayerList list={oldPlayers} />
        </div>
    );
  }
}

export default Mercato;
