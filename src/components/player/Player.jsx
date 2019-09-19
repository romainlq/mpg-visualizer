import React, { Component } from 'react'
import PropTypes from 'prop-types';


import './Player.css';


class Player extends Component {
    static propTypes = {
        data: PropTypes.objectOf().isRequired,
    }


    render() {
        const {
            club,
            quotation,
            joinDate,
            lastname,
            firstname,
        } = this.props.data;
        return (
            <div className='container'>
                <h3>{lastname} {firstname}</h3>
                <span>Club: {club}</span>
                <span>Price: {quotation}</span>
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