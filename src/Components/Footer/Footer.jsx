import React from 'react';
import './Footer.scss';
import logo from '../../assets/logo1.png';
import { t } from 'i18next';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <ul className="footer-list">
          <li className="footer-item1">
            <img src={logo} alt="Logo"  width={160}/>
            <p className='footer-text'>{t("footerText")}</p>
          </li>
          <li className="footer-item2">
            <h3 className='footer-title'>{t("footerTitle")}</h3>
            <Link className='footer-link' to="/">{t("home")}</Link>
            <Link className='footer-link' to="/about">{t("about_us")}</Link>
            <Link className='footer-link' to="/collection">{t("collection")}</Link>
            <Link className='footer-link' to="/contact">{t("contacts")}</Link>
          </li>
          <li className="footer-item3">
            <h3 className='footer-title'>{t("footerTitle2")}</h3>
            <a className='footer-link2' href="#">{t("link1")}</a>
            <a className='footer-link2' href="#">{t("link2")}</a>
            <a className='footer-link2' href="#">{t("link3")}</a>
            <a className='footer-link2' href="#">{t("link4")}</a>
            <a className='footer-link2' href="tel:+998933837585">+998 93 383 75 85</a>
            <a className='footer-link2' href="tel:+998939607800">+998 93 960 78 00</a>
          </li>
          <li className="footer-item">
            <h3 className='footer-title'>{t("footerTitle3")}</h3><br />
            <label className='footer-label'>
              <input className='footer-input' type="email" placeholder={t("emailPlaceholder")} />
              <button className='footer-btn' type="button">{t("footerBtn")}</button>
            </label>
          </li>
        </ul>
        <div className='footer-box'>
          <a href="#" className='footer-nextlink'>
             {t("footer-down")}
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
