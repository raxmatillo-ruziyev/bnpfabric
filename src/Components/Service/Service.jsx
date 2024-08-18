import React from 'react';
import './Service.scss';
import { useNavigate } from 'react-router-dom';
import Card from '../Card/Card';
import card1 from '../../assets/11.jpg';
import card2 from '../../assets/12.jpg';
import card3 from '../../assets/13.jpg';
import card4 from '../../assets/14.jpg';
import card5 from '../../assets/15.jpg';
import card6 from '../../assets/16.jpg';
import card7 from '../../assets/17.jpg';
import card8 from '../../assets/18.jpg';
import card9 from '../../assets/19.jpg';
import card10 from '../../assets/20.jpg';
import { useTranslation } from 'react-i18next';

const data = [
    { id: 1, img: card1, titleKey: "title1" },
    { id: 2, img: card2, titleKey: "title2" },
    { id: 3, img: card3, titleKey: "title3" },
    { id: 4, img: card4, titleKey: "title4" },
    { id: 5, img: card5, titleKey: "title5" },
    { id: 6, img: card6, titleKey: "title6" },
    { id: 7, img: card7, titleKey: "title7" },
    { id: 8, img: card8, titleKey: "title8" },
    { id: 9, img: card9, titleKey: "title9" },
    { id: 10, img: card10, titleKey: "title10" }
];

const Service = ({ serviceTitle, serviceText }) => {
    const navigate = useNavigate();
    const { t } = useTranslation();

    const handleCardClick = (id) => {
        navigate(`/card/${id}`);
    };

    return (
        <div className="service">
            <div className="container">
                <h1 className='service-title'>{serviceTitle}</h1>
                <p className='service-text'>{serviceText}</p>
                <ul className='service-list'>
                    {data.map((card) => (
                        <li key={card.id} onClick={() => handleCardClick(card.id)}>
                            <Card cardImg={card.img} cardTitle={t(card.titleKey)} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Service;
