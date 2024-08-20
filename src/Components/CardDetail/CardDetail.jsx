import React from 'react';
import { useParams } from 'react-router-dom';
import './CardDetail.scss';
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
import Navbar from '../Navbar/Navbar';
import { useTranslation } from 'react-i18next';
import Footer from '../Footer/Footer';
import Slideer from '../Slideer/Slideer';

const data = [
    { id: 1, img: card1, titleKey: "title1", descriptionKey: "description1" },
    { id: 2, img: card2, titleKey: "title2", descriptionKey: "description2" },
    { id: 3, img: card3, titleKey: "title3", descriptionKey:"description3" },
    { id: 4, img: card4, titleKey: "title4", descriptionKey:"description4" },
    { id: 5, img: card5, titleKey: "title5", descriptionKey:"description5" },
    { id: 6, img: card6, titleKey: "title6", descriptionKey:"description6" },
    { id: 7, img: card7, titleKey: "title7", descriptionKey:"description7" },
    { id: 8, img: card8, titleKey: "title8", descriptionKey:"description8" },
    { id: 9, img: card9, titleKey: "title9", descriptionKey:"description9" },
    { id: 10, img: card10, titleKey: "title10", descriptionKey:"description10" },
    { id: 11, img: card11, titleKey: "title1", descriptionKey: "description1" },
    { id: 12, img: card12, titleKey: "title2", descriptionKey: "description2" },
    { id: 13, img: card13, titleKey: "title3", descriptionKey:"description3" },
    { id: 14, img: card14, titleKey: "title4", descriptionKey:"description4" },
    { id: 15, img: card15, titleKey: "title5", descriptionKey:"description5" },
    { id: 16, img: card16, titleKey: "title6", descriptionKey:"description6" },
    { id: 17, img: card17, titleKey: "title7", descriptionKey:"description7" },
    { id: 18, img: card18, titleKey: "title8", descriptionKey:"description8" },
    { id: 19, img: card19, titleKey: "title9", descriptionKey:"description9" },
    { id: 20, img: card20, titleKey: "title10", descriptionKey:"description10" }
];

const CardDetail = () => {
    const { id } = useParams();
    const { t } = useTranslation();
    const card = data.find((item) => item.id === parseInt(id));

    return (
        <div className='container'>
            <Navbar />
            <div className="card-detail">
                {card ? (
                    <>
                        <div className='cardd'>
                            <div className='div-img'>
                                <img src={card.img} alt={card.title} className="card-detail-img" />
                            </div>
                            <div className='divcha'>
                                <h1 className="card-detail-title">{t(card.titleKey)}</h1>
                                <table className="card-detail-table">
                                    <tbody>
                                        <tr>
                                            <th>{t("material")}</th>
                                            <td>{t("material_value")}</td>
                                        </tr>
                                        <tr>
                                            <th>{t("pillow_size")}</th>
                                            <td>{t("pillow_size_value")}</td>
                                        </tr>
                                        <tr>
                                            <th>{t("sheet_size")}</th>
                                            <td>{t("sheet_size_value")}</td>
                                        </tr>
                                        <tr>
                                            <th>{t("quilt_size")}</th>
                                            <td>{t("quilt_size_value")}</td>
                                        </tr>
                                        <tr>
                                            <th>{t("size")}</th>
                                            <td>{t("custom_size")}</td>
                                        </tr>
                                        <tr>
                                            <th>{t("producer")}</th>
                                            <td>{t("producer_value")}</td>
                                        </tr>
                                        <tr>
                                            <th>{t("category")}</th>
                                            <td>{t("category_value")}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </>
                ) : (
                    <p>{t("Card topilmadi")}</p>
                )}
            </div>
            <Slideer/>
            <Footer/>
        </div>
    );
};

export default CardDetail;
