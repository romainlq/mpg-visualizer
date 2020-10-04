import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Button from 'components/button/Button.jsx';

import './LinkCard.css';

class LinkCard extends Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        to: PropTypes.string.isRequired,
        active: PropTypes.bool,
    };

    static defaultProps = {
        active: false,
    };

    render() {
        const {
            active,
            name,
            to,
        } = this.props;

        return (
            <div className='LinkCard'>
                <span>{name}</span>

                <Link to={to}>
                    <Button active={active}>
                        Go
                    </Button>
                </Link>

                
            </div>
        )
    }
}

export default LinkCard