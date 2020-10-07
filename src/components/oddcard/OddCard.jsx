import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './OddCard.css';

class OddCard extends PureComponent {
    static propTypes = {
        name: PropTypes.string.isRequired,
        oldQuotation: PropTypes.number.isRequired,
        newQuotation: PropTypes.number.isRequired,
    }

    render() {
        const {
            name,
            oldQuotation,
            newQuotation,
            club,
        } = this.props;

        let differenceDisplayed;
        let modDifference;

        let difference = newQuotation - oldQuotation;

        if (difference > 0) {
            modDifference = 'success';
            differenceDisplayed = `+ ${difference} M€`;
        } else {
            modDifference = 'error';
            differenceDisplayed = `${difference} M€`;
        }

        return (
            <div className='OddCard'>
                <span className='OddCard-name'>
                    {name}
                </span>
                <span className='OddCard-club'>
                    {club}
                </span>
                <div className={`OddCard-diff ${modDifference}`}>
                    {differenceDisplayed}
                </div>
                <div className='OddCard-price'>
                    <div className='OddCard-oldPrice'>
                        {oldQuotation} M €
                    </div>
                    <div className='OddCard-newPrice'>
                        {newQuotation} M €
                    </div>
                </div>
            </div>
        );
    }
}

export default OddCard;