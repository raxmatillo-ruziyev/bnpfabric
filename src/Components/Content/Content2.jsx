import React, { useEffect } from 'react'
import './Content.scss'
import Box from '../Box/Box'
import box from '../../assets/box11.svg'
import box2 from '../../assets/box12.svg'
import box3 from '../../assets/box13.svg'
import { t } from 'i18next'
import { useTranslation } from 'react-i18next'
const Content2 = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
      const savedLanguage = localStorage.getItem('i18nextLng') || 'uz';
      i18n.changeLanguage(savedLanguage);
  }, []);
  return (
    <>
    <div className="content">
        <div className="container">
          <ul className="content-list">
            <li className="content-item">
              <Box boxjon={box} boxTitle={t("content2-one")} boxSubtitle={t("content2-five")}/>
            </li>
            <li className="content-item">
              <Box boxjon={box2} boxTitle={t("content2-two")} boxSubtitle={"+998 93 383 75 85"}/>
            </li>
            <li className="content-item">
              <Box boxjon={box3} boxTitle={t("content2-three")} boxSubtitle={t("content2-seven")}/>
            </li>
          

          </ul>
            
        </div>
    </div>
      
    </>
  )
}

export default Content2
