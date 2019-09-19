import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Player from '../player/Player';

import './PlayerList.css'

class PlayerList extends Component {
    static propTypes = {
        list: PropTypes.array.isRequired,
    }

    renderPlayer = (player) => {
        return (
            <Player data={player} />
        );
    }

    render() {
        const { list } = this.props;

        return (
            <div className='PlayerList'>
                <h1>Player list</h1>
                {list &&
                    <div className='PlayerList-container'>
                        {list.map((player) => {
                            return this.renderPlayer(player)
                        })}
                    </div>
                }
            </div>
        )
    }

}

export default PlayerList;