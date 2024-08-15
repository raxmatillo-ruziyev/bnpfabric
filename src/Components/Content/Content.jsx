import React, { useEffect } from 'react'
import './Content.scss'
import Box from '../Box/Box'
import box from '../../assets/box1.svg'
import box2 from '../../assets/box2.svg'
import box3 from '../../assets/box3.svg'
import box4 from '../../assets/box4.svg'
import { t } from 'i18next'
import { useTranslation } from 'react-i18next'
const Content = () => {
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
              <Box boxjon={box} boxTitle={t("content-one")} boxSubtitle={t("content-five")}/>
            </li>
            <li className="content-item">
              <Box boxjon={box2} boxTitle={t("content-two")} boxSubtitle={t("content-six")}/>
            </li>
            <li className="content-item">
              <Box boxjon={box3} boxTitle={t("content-three")} boxSubtitle={t("content-seven")}/>
            </li>
            <li className="content-item">
              <Box boxjon={box4} boxTitle={t("content-four")} boxSubtitle={t("content-eight")}/>
            </li>

          </ul>
            
        </div>
    </div>
      
    </>
  )
}

export default Content
