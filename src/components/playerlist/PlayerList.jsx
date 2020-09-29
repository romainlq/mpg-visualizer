import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Player from '../player/Player';

import './PlayerList.css'

class PlayerList extends Component {
    static propTypes = {
        list: PropTypes.array.isRequired,
    }

    renderPlayerList = () => {
        const { list } = this.props;

        if (!list) {
            return false;
        }

        if (list.length === 0) {
            return (
                <p>No players</p>
            );
        }

        else {
            return list.map((player) => {
                return <Player data={player} />
            })
        }
    }

    render() {
        console.log(this.props.list)
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