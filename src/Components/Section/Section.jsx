import React, { useEffect } from 'react'
import './Section.scss'
import { useTranslation } from 'react-i18next';
const Section = ({kravat,bg}) => {
    const { t, i18n } = useTranslation();

    useEffect(() => {
        const savedLanguage = localStorage.getItem('i18nextLng') || 'uz';
        i18n.changeLanguage(savedLanguage);
    }, []);
    return (
        <>
            <div className="section">
                <div className="container">
                    <ul className="section-list" style={bg}>
                        <li className="section-item">
         <h1 className='section-title'>100%</h1>
         <p className='section-text1'>{t("sectionText")}</p>
                        </li>
                        <li className="section-item">
                            <img src={kravat} alt=""  className='section-img'/>

                        </li>
                        <li className="section-item">
                            <h2 className='section-subtitle'>{t("sectionSubtitle")}</h2>
                            <p className='section-text'>{t("sectionSubtext")}</p>
                            <button className='section-btn'>{t("button")}</button>
                        </li>
                    </ul>
                </div>
            </div>

        </>
    )
}

export default Section
