import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import './App.css';

import Navbar from 'components/navbar/Navbar';
import Home from 'routes/home/HomeContainer';
import Mercato from 'routes/mercato/MercatoContainer';
import NoMatch from 'routes/nomatch/NoMatch'
import OddsEvolution from 'routes/oddsevolution/OddsEvolutionContainer';

import ROUTES from 'routes/routes.js'

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar ROUTES={ROUTES}/>
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
