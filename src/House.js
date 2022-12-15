import React from 'react'
import './House.css'


function House({src,title,description,price}) {
  return (
    <div className='House'>
      
        <img src={src} alt=""/>
        <div className="house_info">
            <h2>{title}</h2>
            <h2>{description}</h2>
            <h2>{price}</h2>
        </div>

    </div>
  )
}

export default House