import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Player.css';


class Player extends Component {
    static propTypes = {
        data: PropTypes.shape({
            club: PropTypes.string.isRequired,
            quotation: PropTypes.number.isRequired,
            joinDate: PropTypes.string.isRequired,
            lastname: PropTypes.string.isRequired,
            firstname: PropTypes.string.isRequired,
            position: PropTypes.number.isRequired,
        }).isRequired,
        POSITIONS: PropTypes.object,
    };

    static defaultProps = {
        POSITIONS: {},
    }

    renderPosition = () => {
        const {
            POSITIONS,
            data: {
                ultraPosition,
            }
        } = this.props;

        let positionMessage;

        switch (ultraPosition) {
            case POSITIONS.GOAL:
                positionMessage = 'Gardien';
                break;
            case POSITIONS.DEF_LAT:
                positionMessage = 'Def. Cent.';
                break;
            case POSITIONS.DEF_CENT:
                positionMessage = 'Def Lat'; // Note pour MPG --> il manque un . après Def sur votre site
                break;
            case POSITIONS.MIL_DEF:
                positionMessage = 'Mil. Def.';
                break;
            case POSITIONS.MIL_OFF:
                positionMessage = 'Mil. Off'; // Note pour MPG --> il manque un . après Off sur votre site
                break;
            case POSITIONS.ATT:
                positionMessage = 'Attaquant';
                break;
            default:
                positionMessage = 'Position inconnue au bataillon'
                break;
        }

        return (
            <span>
                {positionMessage}
            </span>
        );
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
            <div className='Player'>
                <h3>{lastname} {firstname}</h3>
                <span>
                    <span
                        className='Player-emoji'
                        role='img'
                        aria-label='club'
                    >
                        🏟
                    </span>
                    {club}
                </span>
                <span>
                    <span
                        className='Player-emoji'
                        role='img'
                        aria-label='prix'
                    >
                        💵
                    </span>
                    {quotation}
                </span>
                {joinDate &&
                    <span>
                        {joinDate}
                    </span>
                }
                {this.renderPosition()}
            </div>
        );
    }
}

export default Player;