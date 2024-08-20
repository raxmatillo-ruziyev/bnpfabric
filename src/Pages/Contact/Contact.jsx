import React from 'react'
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import Content2 from '../../Components/Content/Content2';
import Kontakt from '../../Components/Kontakt/Kontakt';
const Contact = () => {
  
  return (
    <div className='container'>
      <Navbar/>
      <br />
      <Kontakt/> <br />
      <Content2/>
      <br />
      <Footer/>
    </div>
  )
}

export default Contact
