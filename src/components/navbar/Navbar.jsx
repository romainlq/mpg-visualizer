import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';

const ROUTES = [
    {
        id: 0,
        name: 'Mercato',
        link: '/mercato',
    },
    {
        id: 1,
        name: 'Evolution côtes',
        link: '/odds',
    },
];

class Navbar extends Component {

    renderLinks = () => {
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
                <li>
                    <Link to='/'>
                        STATS
                    </Link>
                </li>
                {this.renderLinks()}

            </nav>
        );
    }
}

export default Navbar;