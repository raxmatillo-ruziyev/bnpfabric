import React, { useEffect } from 'react'
import hero from '../../assets/hero.png'
import './Hero.scss'
import { useTranslation } from 'react-i18next';
const Hero = () => {
    const { t, i18n } = useTranslation();

    useEffect(() => {
        const savedLanguage = localStorage.getItem('i18nextLng') || 'uz';
        i18n.changeLanguage(savedLanguage);
    }, []);
  return (
    <>  
    <div className="hero">
        <div className="container">
            <div className="hero-box">
                <div className="hero-left">
                    <img src={hero} alt="" width={"100%"}  height={"100%"}/>
                </div>
                <div className="hero-right">
                    <h3 className='hero-nexttitle'>{t("hero-nexttitle")}</h3>
                     <h2 className='hero-subtitle'>{t("hero-subtitle")}</h2>
                    <h1 className="hero-title">{t("hero-title")}</h1>
                </div>
            </div>

        </div>
    </div>
      
    </>
  )
}

export default Hero
