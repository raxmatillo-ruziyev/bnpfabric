import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import rasm from '../../assets/rasm.png'
import './About.scss'

const About = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
      const savedLanguage = localStorage.getItem('i18nextLng') || 'uz';
      i18n.changeLanguage(savedLanguage);
  }, []);
  return (
    <div className='container'>
      <Navbar/>
      <h1 className="about-title">{t("new_section_text")}</h1>
      <div className="about-content">
       <ul className='about-list'>
        <li className='about-item'>
          <p className='about-text'>{t("text1")}</p>
          <p className='about-text'>{t("text2")}</p>
          <p className='about-text'>{t("text3")}</p>
          <p className='about-text'>{t("text4")}</p>
          <p className='about-text'>{t("text5")}</p>
          <p className='about-text'>{t("text6")}</p>
          <p className='about-text'>{t("text7")}</p>
          <p className='about-text'>{t("text8")}</p>
          <p className='about-text'>{t("text9")}</p>
          <p className='about-text'>{t("text10")}</p>
          <p className='about-text'>{t("text11")}</p>

        </li>
        <li className='about-item'>
          <img  className='about-img' src={rasm} alt="" />
        </li>
       </ul>

      </div>
      <Footer/>
    </div>
  )
}

export default About
