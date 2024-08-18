import React from 'react';
import './Card2.scss';

const Card2 = ({ card2Img, card2Title, card2Text,card2Subtitle }) => {
    return (
        <div className="card2">
            <img src={card2Img} alt={card2Title} className="card2-img" />
            <div className="card2-content">
                <h3 className='card2-subtitle'> {card2Subtitle}</h3>
                <h2 className="card2-title">{card2Title}</h2>
                <p className="card2-text">{card2Text}</p>
            </div>
        </div>
    );
}

export default Card2;

