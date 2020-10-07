import React, { Component } from 'react'
import PropTypes from 'prop-types';

import LinkCard from 'components/linkcard/LinkCard';


import './Home.css'

class Home extends Component {

    static propTypes = {
        menuItems: PropTypes.array,
    }

    renderMenuItems = () => {
        const { menuItems } = this.props;


        return menuItems.map(item => {
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

        return (
            <div class='Home'>
                <div class='Home-menu'>
                    {this.renderMenuItems()}
                </div>
            </div>
        )
    }
}

export default Home;
