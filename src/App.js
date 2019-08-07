import React, { Component } from 'react';
import axios from 'axios';


import './App.css';

import PlayerList from './components/PlayerList';

class App extends Component {

  state = {
    newPlayers: [],
    availablePlayers: [],

  }


  componentDidMount() {
    axios.get('./data/data_morning_en.json').then((res) => {
      console.log(res.data)
      let json = res.data;
      console.log(typeof json);
      let formatted = JSON.parse(json)
      // const json = JSON.parse(res.data);
      // let test =res.data
      // console.log(test)
      this.setState(() => ({
        availablePlayers: res.data.availablePlayers
      }))

    })

  }




  render () {
    return (
      <div className="App">
        <PlayerList />
      </div>
    );
  }
}

export default App;
