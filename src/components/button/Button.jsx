import React, { PureComponent } from 'react'
import PropTypes from 'prop-types';

import './Button.css';


class Button extends PureComponent {
    static propTypes = {
        children: PropTypes.node.isRequired,
        onClick: PropTypes.oneOfType([
            PropTypes.func,
            PropTypes.string,
        ]),
        disabled: PropTypes.bool,
    };

    static defaultProps = {
        onClick: () => {},
        disabled: false,
    }

    render() {
        const {
            onClick,
            children,
            active,
            disabled,
        } = this.props;

        let modButton = 'mod-success';

        modButton = active ? 'mod-success' : 'mod-disabled';

        return (
            <button
                className={`Button ${modButton}`}
                onClick={onClick}
                disabled={disabled}
            >
                {children}
            </button>
        )
    }
}

export default Button;