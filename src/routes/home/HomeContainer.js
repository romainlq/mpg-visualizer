import { connect } from 'react-redux';
import Home from './Home';

const mapStateToProps = (state) => {

    const menuItems = [
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
        }
    ];

    return {
        menuItems,
    }
}

export default connect(mapStateToProps)(Home);