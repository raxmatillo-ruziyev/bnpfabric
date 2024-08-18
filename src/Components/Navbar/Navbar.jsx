import React, { useEffect, useState } from 'react';
import './Navbar.scss';
import logo from '../../assets/logo1.png';
import enFlag from '../../assets/eng.jpeg';
import ruFlag from '../../assets/rus.png';
import uzFlag from '../../assets/uz.jpeg';
import { useTranslation } from 'react-i18next';
import { Button, Drawer } from 'antd';
import i18n from '../../i18n';
import { FiMenu } from 'react-icons/fi';

const Navbar = () => {
    const { t, i18n } = useTranslation();

    useEffect(() => {
        const savedLanguage = localStorage.getItem('i18nextLng') || 'uz';
        i18n.changeLanguage(savedLanguage);
    }, []);
    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
        localStorage.setItem('i18nextLng', lang);
    };
    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };


    return (
        <>
            <nav className="navbar">
                <div className="container">
                    <div className="navbar-content">
                        <ul className="navbar-list">
                            <li className="navbar-item">
                                <a href="#" className="navbar-logo">
                                    <img src={logo} alt="logo" className='logo' width={140} />
                                </a>
                                <a href="#" className="navbar-link">{t('home')}</a>
                                <a href="#" className="navbar-link">{t('collection')}</a>
                                <a href="#" className="navbar-link">{t('about_us')}</a>
                                <a href="#" className="navbar-link">{t('contacts')}</a>
                            </li>
                            <li className="navbar-item">
                                <div className="language-dropdown">
                                    <button className="dropdown-button">
                                        <img
                                            src={i18n.language === 'en' ? enFlag : i18n.language === 'ru' ? ruFlag : uzFlag}

                                            className="flag-icon"
                                        />
                                        {t(i18n.language === 'en' ? 'english' : i18n.language === 'ru' ? 'russian' : 'uzbek')}
                                    </button>
                                    <div className="dropdown-content">
                                        <a href="#" onClick={() => changeLanguage('en')}>
                                            <img src={enFlag} className="flag-icon" /> {t('english')}
                                        </a>
                                        <a href="#" onClick={() => changeLanguage('ru')}>
                                            <img src={ruFlag} className="flag-icon" /> {t('russian')}
                                        </a>
                                        <a href="#" onClick={() => changeLanguage('uz')}>
                                            <img src={uzFlag} className="flag-icon" /> {t('uzbek')}
                                        </a>
                                    </div>
                                </div>
                            </li>
                            <li className='navbar-item3'>

                                <button className='navbar-btn' onClick={showDrawer}>
                                    <FiMenu />
                                </button>
                                <Drawer onClose={onClose} open={open}>
                                    <a href="#" className="navbar-link2">{t('home')}</a> <br />
                                    <a href="#" className="navbar-link2">{t('collection')}</a> <br />
                                    <a href="#" className="navbar-link2">{t('about_us')}</a> <br />
                                    <a href="#" className="navbar-link2">{t('contacts')}</a>

                                    <div className="language-dropdown2">
                                        <button className="dropdown-button">
                                            <img
                                                src={i18n.language === 'en' ? enFlag : i18n.language === 'ru' ? ruFlag : uzFlag}

                                                className="flag-icon"
                                            />
                                            {t(i18n.language === 'en' ? 'english' : i18n.language === 'ru' ? 'russian' : 'uzbek')}
                                        </button>
                                        <div className="dropdown-content">
                                            <a href="#" onClick={() => changeLanguage('en')}>
                                                <img src={enFlag} className="flag-icon" /> {t('english')}
                                            </a>
                                            <a href="#" onClick={() => changeLanguage('ru')}>
                                                <img src={ruFlag} className="flag-icon" /> {t('russian')}
                                            </a>
                                            <a href="#" onClick={() => changeLanguage('uz')}>
                                                <img src={uzFlag} className="flag-icon" /> {t('uzbek')}
                                            </a>
                                        </div>
                                    </div>


                                </Drawer>

                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
