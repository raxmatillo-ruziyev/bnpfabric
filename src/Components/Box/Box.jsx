import React from 'react'
import './Box.scss'
const Box = ({boxjon,boxTitle,boxSubtitle}) => {
  return (
    <>
    <div className="box">
        <ul className="box-list">
            <li className="box-item"><img src={boxjon} alt=""  className='box-img'/></li>
            <li className="box-item">
                <h2 className="box-title">{boxTitle}</h2>
                <h3 className='box-subtitle'>{boxSubtitle}</h3>
            </li>
        </ul>
    </div>
      
    </>
  )
}

export default Box
