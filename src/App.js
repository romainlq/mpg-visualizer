import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import './App.css';

import Navbar from './components/navbar/Navbar';
import Mercato from './pages/mercato/Mercato';
import NoMatch from './pages/nomatch/NoMatch'

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route path="/mercato">
            <Mercato />
          </Route>
          <Route exact path="/">
            <Mercato />
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
