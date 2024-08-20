import React from 'react'
import './Card.scss'
const Card3 = ({cardImg,cardTitle}) => {
  return (
    <>
    <div className="card3">
        <img src={cardImg} alt=""  className='card-img3'/>
        <h3 className='card3-title'>{cardTitle}</h3>

    </div>
      
    </>
  )
}

export default Card3
