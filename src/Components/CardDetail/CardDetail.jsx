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
import Navbar from '../Navbar/Navbar';
import { useTranslation } from 'react-i18next';

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
    { id: 10, img: card10, titleKey: "title10", descriptionKey:"description10" }
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
                        <div style={{ display: "flex", justifyContent: "space-between", width: "100%", gap: "50px" }}>
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
        </div>
    );
};

export default CardDetail;
