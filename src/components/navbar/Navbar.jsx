import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './Navbar.css';


class Navbar extends Component {
    static propTypes = {
        ROUTES: PropTypes.array.isRequired,
    }

    renderLinks = () => {
        const { ROUTES } = this.props;

        return ROUTES.map(route => {
            return (
                <li key={route.id}>
                    <Link to={route.link}>
                        {route.name}
                    </Link>
                </li>
            );
        });
    }

    render() {
        return (
            <nav className="Navbar">
                <div className="Navbar-logo">
                    <Link to='/'>
                        STATS
                    </Link>
                </div>
                <div className="Navbar-items">
                    {this.renderLinks()}
                </div>
            </nav>
        );
    }
}

export default Navbar;