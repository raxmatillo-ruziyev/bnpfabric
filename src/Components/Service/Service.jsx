import React from 'react'
import './Service.scss'
import { t } from 'i18next'
import Card from '../Card/Card'
import card1 from '../../assets/11.jpg'
import card2 from '../../assets/12.jpg'
import card3 from '../../assets/13.jpg'
import card4 from '../../assets/14.jpg'
import card5 from '../../assets/15.jpg'
import card6 from '../../assets/16.jpg'
import card7 from '../../assets/17.jpg'
import card8 from '../../assets/18.jpg'
import card9 from '../../assets/19.jpg'
import card10 from '../../assets/20.jpg'
const Service = ({serviceTitle,serviceText}) => {
  return (
    <>
    <div className="service">
        <div className="container">
            <h1 className='service-title'>{serviceTitle}</h1>
            <p className='service-text'>{serviceText}</p>
            <ul className='service-list'>
                <li><Card cardImg={card1} cardTitle={"Kvadratchalar"}/></li>  
                <li><Card cardImg={card2} cardTitle={"Ikat"}/></li>  
                <li><Card cardImg={card3} cardTitle={"Davralar"}/></li>
                <li><Card cardImg={card4} cardTitle={"Geometriya ko'k"}/></li>
                <li><Card cardImg={card5} cardTitle={"Tropik barglar"}/></li>
                <li><Card cardImg={card6} cardTitle={"Bambi"}/></li>
                <li><Card cardImg={card7} cardTitle={"Vizantiya"}/></li>
                <li><Card cardImg={card8} cardTitle={"Kechki bog'"}/></li>
                <li><Card cardImg={card9} cardTitle={"Pat Markiz"}/></li>
                <li><Card cardImg={card10} cardTitle={"Lavanda atirgullari"}/></li>
                
            </ul>
            
        </div>
    </div>
      
    </>
  )
}

export default Service
