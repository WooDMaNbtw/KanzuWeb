import React from 'react';
import './cards.css';

const CardWWDComponent = ({ tags, descText, buttonText, flex }) => {
    return (
        <div className="app-container">
            <div className="tags" style={{ display: 'flex', flexDirection: 'row', justifyContent: flex }}>
                {tags.map((tag, index) => (
                    <span className="tag" key={index}>{tag}</span>
                ))}
            </div>
            <div className="description-container">
                <p>{descText}</p>
            </div>
            <div className="button-container">
                <button className="develop-button">{buttonText}</button>
            </div>
        </div>
    );
}

export default CardWWDComponent;
