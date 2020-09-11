import React, { Component } from 'react';
import axios from 'axios';

import './App.css';

import PlayerList from './components/playerlist/PlayerList';

class App extends Component {
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


    axios.get('./data/data-2020-9-5-14-0.json').then((res) => {
      let data = res.data;
      return morning = data;// [...data.availablePlayers, ...data.userPlayers];
    }).then(async () => {
      const { data }  = await axios.get('./data/data-2020-9-5-14-11.json');
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
    return  arrA.filter(function(obj) {
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

    console.log('newPlayers', newPlayers)

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

export default App;
