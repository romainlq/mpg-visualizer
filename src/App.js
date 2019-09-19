import React, { Component } from 'react';
import axios from 'axios';

import './App.css';

import PlayerList from './components/playerlist/PlayerList';

class App extends Component {
  state = {
    newPlayers: [],
    availablePlayersMorning: [],
    availablePlayersAfternoon: [],
  };

  componentDidMount() {
    let morning = [];
    let afternoon = [];
    let newPlayers = [];

    console.log('--- get data morning')
    axios.get('./data/data_morning_en.json').then((res) => {
      console.log('>>> gOt data morning')
      let data = res.data;
      return morning = [...data.availablePlayers, ...data.userPlayers];
    }).then(() => {
      console.log('--- get data afternoon')
      return axios.get('./data/data_afternoon_en.json').then((res) => {
        console.log('>>> got data afternoon')
        let dataAft = res.data
        console.log(dataAft.availablePlayers)
        return afternoon = [...dataAft.availablePlayers, ...dataAft.userPlayers];
      })
    }).then(() => {
        newPlayers = this.difference(afternoon, morning)
        newPlayers = newPlayers.sort((playerA, playerB) => playerB.quotation - playerA.quotation)

        this.setState(() => ({
          availablePlayersMorning: morning,
          availablePlayersAfternoon: afternoon,
          newPlayers
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
      availablePlayersMorning,
      availablePlayersAfternoon,
      newPlayers
    } = this.state;

    console.log('newPlayers', newPlayers)

    return (
      <div className="App">
        <PlayerList list={newPlayers} />
        {/* <PlayerList list={availablePlayersMorning} /> */}
        {/* <PlayerList list={availablePlayersAfternoon} /> */}
      </div>
    );
  }
}

export default App;
