import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import Service from '../../Components/Service/Service'
import Service2 from '../../Components/Service/Service2'
import Toplam from '../../Components/Toplam/Toplam'
import { Outlet } from 'react-router-dom'

const Collection = () => {
  return (
    <div className='container'>
      <Navbar />
     <div style={{
      display:"flex"
     }}>
     <Toplam />
   
    <Outlet/> 
     </div>
      <Footer />

    </div>
  )
}

export default Collection
