import React, { Component } from 'react'
import PropTypes from 'prop-types';

import './Button.css';


class Button extends Component {
    static propTypes = {
        children: PropTypes.node.isRequired,
        onClick: PropTypes.oneOfType([
            PropTypes.func,
            PropTypes.string,
        ])
    };

    static defaultProps = {
        onClick: () => {},
    }

    render() {
        const {
            onClick,
            children,
            active,
        } = this.props;

        const modButton = active ? 'mod-success' : 'mod-disabled';

        return (
            <button 
                className={`Button ${modButton}`} 
                onClick={onClick}
            >
                {children}
            </button>
        )
    }
}

export default Button;