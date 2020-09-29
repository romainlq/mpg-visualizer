import React, { Component } from 'react'
import PropTypes from 'prop-types';


import './Player.css';


class Player extends Component {
    static propTypes = {
        data: PropTypes.objectOf().isRequired,
    }

    renderCurrentChampionship() {

    }


    render() {
        const {
            club,
            quotation,
            joinDate,
            lastname,
            firstname,
        } = this.props.data;
        console.log(this.props)
        return (
            <div className='container'>
                <h3>{lastname} {firstname}</h3>
                <span>🏟 {club}</span>
                <span>💵 {quotation}</span>
                {joinDate &&
                    <span>
                        {joinDate}
                    </span>
                }
            </div>
        )
    }
}

export default Player;