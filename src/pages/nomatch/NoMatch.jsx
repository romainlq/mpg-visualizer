import React, { Component } from 'react';
import { Link } from 'react-router-dom';


import './NoMatch.css';

class NoMatch  extends Component {

    render() {
        return (
            <div className='NoMatch'>
                <h1>NO MATCH</h1>
                <Link to='/'>Retour à l'accueil</Link>
            </div>
        );
    }
}

export default NoMatch;