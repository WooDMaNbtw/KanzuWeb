import React from 'react';
import './navigationButton.css'; // Make sure to import your CSS file
import arrow2 from '../../../assets/arrow-right-feedback.png';

const NavigationButton = ({ direction, disabled, onClick }) => {
    return (
        <button
            className={`navigation-button ${direction}`}
            disabled={disabled}
            onClick={onClick}
        >
            {direction === 'prev' && <img style={{border: "1px solid black", borderRadius: "5px", transform: "scale(1.5) rotate(180deg)"}} src={arrow2} alt="arrow-nav" />}
            {direction === 'next' && <img style={{border: "1px solid black", borderRadius: "5px", transform: "scale(1.5)"}} src={arrow2} alt="arrow-nav" />}
        </button>
    );
};

export default NavigationButton;
