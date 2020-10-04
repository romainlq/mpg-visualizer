import React, { Component } from 'react'
import PropTypes from 'prop-types';

import LinkCard from 'components/linkcard/LinkCard';


import './Home.css'

class Home extends Component {

    renderMenuItems = () => {

        const items = [
            {
                id: 1,
                name: 'Mercato',
                to: '/mercato',
                active: true,
            },
            {
                id: 2,
                name: 'Evolution côtes',
                to: '/odds',
                active: true,
            },
            {
                id: 3,
                name: 'Settings',
                to: '/mercato',
                active: false,
            },
            {
                id: 4,
                name: 'Other',
                to: '/mercato',
                active: false,
            },
        ]

        return items.map(item => {
            const {
                active,
                id,
                name,
                to,
            } = item;

            return (
                <LinkCard
                    key={id}
                    active={active}
                    name={name}
                    to={to}
                />
            ); 
        })

    }

    render() {

        // REnder un titre

        // render la liste des liens sous forme de carte design MPG

        return (
            <div class='Home'>
                <h1>HOME</h1>
                {this.renderMenuItems()}
            </div>
        )
    }
}

export default Home;
