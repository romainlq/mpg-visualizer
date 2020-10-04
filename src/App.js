import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import './App.css';

import Navbar from './components/navbar/Navbar';
import Home from './pages/home/HomeContainer';
import Mercato from './pages/mercato/Mercato';
import NoMatch from './pages/nomatch/NoMatch'
import OddsEvolution from './pages/oddsevolution/OddsEvolutionContainer';

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route path="/mercato">
            <Mercato />
          </Route>
          <Route path="/odds">
            <OddsEvolution />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
