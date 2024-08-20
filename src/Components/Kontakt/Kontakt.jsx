import React, { useState, useEffect } from 'react';
import './Kontakt.scss';
import { useTranslation } from 'react-i18next';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Toast xabarlari uchun default stil

const Kontakt = () => {
    const { t, i18n } = useTranslation();
    const [email, setEmail] = useState('');
    const [tel, setTel] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        const savedLanguage = localStorage.getItem('i18nextLng') || 'uz';
        i18n.changeLanguage(savedLanguage);
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const telegramToken = '7027326228:AAHE5ePNUpvgI5uSE6sL1Y4a61Xcw9GzC6Y'; // Tokeningizni bu yerga qo'ying
        const chatId = '6771255129'; 
        const text = `Yangi habar:\nEmail: ${email}\nTelefon: ${tel}\nXabar: ${message}`;

        const url = `https://api.telegram.org/bot${telegramToken}/sendMessage`;

        try {
            await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    chat_id: chatId,
                    text: text,
                }),
            });
            toast.success('Habar yuborildi');
            setEmail('');
            setTel('');
            setMessage('');
        } catch (error) {
            toast.error('Xatolik yuz berdi');
            console.error(error);
        }
    };

    return (
        <>
            <ToastContainer />
            <div className="kontakt">
                <div className="container">
                    <div className="left">
                        <h2>{t("kontakt")}</h2>
                        <form onSubmit={handleSubmit}>
                            <input
                                type="email"
                                placeholder={t("email")}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <br />
                            <input
                                type="number"
                                placeholder={t("tel")}
                                value={tel}
                                onChange={(e) => setTel(e.target.value)}
                                required
                            />
                            <br />
                            <textarea
                                placeholder={t("message")}
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                            />
                            <br />
                            <button type="submit">{t("send")}</button>
                        </form>
                    </div>
                    <div className="right">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093735!2d144.95592831531598!3d-37.817209979751554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43d2a6e5b3%3A0x2e8a2e5c47e5d39c!2sMelbourne!5e0!3m2!1sen!2sau!4v1612151812550!5m2!1sen!2sau"
                            width="600"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Kontakt;
