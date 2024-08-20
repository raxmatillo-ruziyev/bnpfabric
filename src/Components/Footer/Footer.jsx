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
          <li className="footer-item">
            <img src={logo} alt="Logo" />
            <p className='footer-text'>{t("footerText")}</p>
          </li>
          <li className="footer-item">
            <h3 className='footer-title'>{t("footerTitle")}</h3>
            <Link to="/">{t("home")}</Link>
            <Link to="/about">{t("about")}</Link>
            <Link to="/collection">{t("collection")}</Link>
            <Link to="/contact">{t("contact")}</Link>
          </li>
          <li className="footer-item">
            <h3 className='footer-title'>{t("footerTitle2")}</h3>
            <a href="#">{t("link1")}</a>
            <a href="#">{t("link2")}</a>
            <a href="#">{t("link3")}</a>
            <a href="#">{t("link4")}</a>
            <a href="tel:+998933837585">+998 93 383 75 85</a>
            <a href="tel:+998939607800">+998 93 960 78 00</a>
          </li>
          <li className="footer-item">
            <h3 className='footer-title'>{t("footerTitle3")}</h3>
            <label>
              <input type="email" placeholder={t("emailPlaceholder")} />
              <button type="button">{t("footerBtn")}</button>
            </label>
          </li>
        </ul>
        <div className='footer-box'>
          <a href="#" className='footer-nextlink'>
            © 2024 MChJ "BUXORA NATURAL PRODUCT". Barcha huquqlar himoyalangan.
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
