import React from 'react'
import './Card.scss'
const Card = ({cardImg,cardTitle}) => {
  return (
    <>
    <div className="card">
        <img src={cardImg} alt=""  className='card-img'/>
        <h3 className='card-title'>{cardTitle}</h3>

    </div>
      
    </>
  )
}

export default Card
