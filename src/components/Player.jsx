import React, { Component } from 'react'
import PropTypes from 'prop-types';


import './Player.css';


class Player extends Component {


    render() {
        const data = {
            id: "player_100180",
            lastname: "Danilo",
            firstname: null,
            position: 2,
            quotation: 9,
            ultraPosition: 21,
            club: "Man. City",
            teamid: "43",
            joinDate: "2017-07-23"
        };


        const {
            lastname,
            firstname,
            club,
            joinDate
        } = data;
        return (
            <div className='container'>
                <h3>{lastname}</h3>
                { firstname && <h3>{firstname}</h3>}
                <span>Club: {club}</span>
                {joinDate &&
                    <span>
                        Joined : {joinDate}
                    </span>
                }
            </div>
        )
    }
}

export default Player;