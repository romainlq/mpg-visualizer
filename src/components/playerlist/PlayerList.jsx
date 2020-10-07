import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Player from '../player/Player';

import './PlayerList.css'

class PlayerList extends Component {
    static propTypes = {
        list: PropTypes.array.isRequired,
        POSITIONS: PropTypes.object.isRequired
    }

    renderPlayerList = () => {
        const {
            POSITIONS,
            list,
        } = this.props;

        if (!list) {
            return false;
        }

        if (list.length === 0) {
            return (
                <p>No players</p>
            );
        }

        else {
            return list.map((player, index) => {
                return (
                    <Player
                        key={index}
                        POSITIONS={POSITIONS}
                        data={player}
                    />
                );
            })
        }
    }

    render() {
        return (
            <div className='PlayerList'>
                <div className='PlayerList-container'>
                    {this.renderPlayerList()}
                </div>
            </div>
        );
    }
}

export default PlayerList;