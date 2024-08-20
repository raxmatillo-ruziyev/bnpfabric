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
import card11 from '../../assets/21.jpg';
import card12 from '../../assets/22.jpg';
import card13 from '../../assets/23.jpg';
import card14 from '../../assets/24.jpg';
import card15 from '../../assets/25.jpg';
import card16 from '../../assets/26.jpg';
import card17 from '../../assets/27.jpg';
import card18 from '../../assets/28.jpg';
import card19 from '../../assets/29.jpg';
import card20 from '../../assets/30.jpg';
import { useTranslation } from 'react-i18next';
import Card3 from '../Card/Card3';

const data = [
    { id: 1, img: card10, titleKey: "title10" },
    { id: 2, img: card12, titleKey: "title12" },
    { id: 3, img: card3, titleKey: "title3" },
    { id: 4, img: card4, titleKey: "title4" },
    { id: 5, img: card5, titleKey: "title5" },
    { id: 6, img: card16, titleKey: "title16" },
    { id: 7, img: card7, titleKey: "title7" },
    { id: 8, img: card18, titleKey: "title18" },
    { id: 9, img: card19, titleKey: "title19" },
    { id: 10, img: card20, titleKey: "title20" },
    { id: 11, img: card1, titleKey: "title1" },
    { id: 12, img: card2, titleKey: "title2" },
    { id: 13, img: card13, titleKey: "title13" },
    { id: 14, img: card14, titleKey: "title14" },
    { id: 15, img: card15, titleKey: "title15" },
    { id: 16, img: card6, titleKey: "title6" },
    { id: 17, img: card17, titleKey: "title17" },
    { id: 18, img: card8, titleKey: "title8" },
    { id: 19, img: card9, titleKey: "title9" },
    { id: 20, img: card11, titleKey: "title11" }
];

const Kuz = ({ serviceTitle, serviceText }) => {
    const navigate = useNavigate();
    const { t } = useTranslation();

    const handleCardClick = (id) => {
        navigate(`/card/${id}`);
    };

    return (
        <div className="service">
            <div className="bcontainer">
                <h1 className='service-title'>{serviceTitle}</h1>
                <p className='service-text'>{serviceText}</p>
                <ul className='service-list'>
                    {data.map((card) => (
                        <li key={card.id} onClick={() => handleCardClick(card.id)}>
                            <Card3 cardImg={card.img} cardTitle={t(card.titleKey)} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Kuz;
