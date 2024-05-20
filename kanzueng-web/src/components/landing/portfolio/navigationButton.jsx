import React from 'react';
import './navigationButton.css'; // Make sure to import your CSS file
import arrow from '../../../assets/right-arrow.png';

const NavigationButton = ({ direction, disabled, onClick }) => {
    return (
        <button
            className={`navigation-button ${direction}`}
            disabled={disabled}
            onClick={onClick}
        >
            {direction === 'prev' && <img src={arrow} alt="arrow-nav" />}
            {direction === 'next' && <img src={arrow} alt="arrow-nav" />}
        </button>
    );
};

export default NavigationButton;
