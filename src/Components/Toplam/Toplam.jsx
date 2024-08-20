import { t } from 'i18next'
import React, { useEffect } from 'react'
import './Toplam.scss'
import { Link, Outlet } from 'react-router-dom'
import Service2 from '../Service/Service2'
import { useTranslation } from 'react-i18next'

const Toplam = () => {
    const { t, i18n } = useTranslation();

    useEffect(() => {
        const savedLanguage = localStorage.getItem('i18nextLng') || 'uz';
        i18n.changeLanguage(savedLanguage);
    }, []);
  return (
    <>
    <div className="container">
       <h1 className='toplam-title'>{t("toplamTitle")}</h1>
       <Link className='toplam-link' to={"qishki"} >{t("qish")}</Link> <br />
       <Link className='toplam-link' to={"bahorgi"} >{t("bahor")}</Link> <br />
       <Link className='toplam-link' to={"yozgi"} >{t("yoz")}</Link> <br />
       <Link className='toplam-link' to={"kuzgi"} >{t("kuz")}</Link>

      

    </div>
      
    </>
  )
}

export default Toplam
