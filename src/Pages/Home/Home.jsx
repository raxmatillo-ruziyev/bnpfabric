import React, { useEffect } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import './Home.scss'
import Hero from '../../Components/Hero/Hero'
import Content from '../../Components/Content/Content'
import Section from '../../Components/Section/Section'
import section1 from '../../assets/111.png'
import section2 from '../../assets/112.png'
import section3 from '../../assets/113.png'
import Service from '../../Components/Service/Service'
import { useTranslation } from 'react-i18next'
const Home = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
      const savedLanguage = localStorage.getItem('i18nextLng') || 'uz';
      i18n.changeLanguage(savedLanguage);
  }, []);
  return (
    <>
    <Navbar/>
    <Hero/>
    <Content/>
    <Section kravat={section3} bg={{background:"#4a6391c2"}}/>
    <Service serviceTitle={t("service1")} serviceText={t("service2")}/>
    <Section kravat={section2} bg={{background:"#663399"}}/>
    <Service serviceTitle={t("service3")} serviceText={t("service2")}/>
    <Section kravat={section1} bg={{background:"#008080"}}/>
    <Service serviceTitle={t("service4")} serviceText={t("service2")}/>
 
      
    </>
  )
}

export default Home
