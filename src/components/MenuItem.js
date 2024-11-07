import React from 'react'

function MenuItem({image, name, price}) {
  return (
    <div className='menuItem'>
        <img src={image} alt={name} className="menuImage" />
        
        <h2> {name} </h2>
        <p>₹{price}</p>
    </div>
  )
}

export default MenuItem