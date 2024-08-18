import React from 'react';
import Card2 from '../Card2/Card2';
import { useTranslation } from 'react-i18next';
import new1 from '../../assets/new1.png';
import new2 from '../../assets/new2.png';
import new3 from '../../assets/new3.png';
import './New.scss';

const New = () => {
    const { t } = useTranslation();

    return (
        <div className="new">
            <div className="container">
                <h1 className="new-title">{t("new_section_title")}</h1>
                <p className="new-text">{t("new_section_text")}</p>
                <ul className="new-list">
                    <li className="new-item">
                        <Card2
                            card2Img={new1}
                            card2Title={t("card1_title")}
                            card2Text={t("card1_text")}
                            card2Subtitle={t("card1_subtitle")}
                        />
                    </li>
                    <li className="new-item">
                        <Card2
                            card2Img={new2}
                            card2Title={t("card1_title")}
                            card2Text={t("card2_text")}
                            card2Subtitle={t("card1_subtitle")}
                        />
                    </li>
                    <li className="new-item">
                        <Card2
                            card2Img={new3}
                            card2Title={t("card1_title")}
                            card2Text={t("card3_text")}
                            card2Subtitle={t("card1_subtitle")}
                        />
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default New;
