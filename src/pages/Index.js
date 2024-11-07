import React from 'react'
import {Link} from 'react-router-dom'
import BannerImage from '../assets/pizza1.jpg'
import '../styles/Index.css'
function Index() {
  return (
    <div className='index'  style={{backgroundImage: `url(${BannerImage})`}}> 
      <div className='headerContainer'>
        <h1>Peppe Pizzeria</h1>
        <p>PIZZA TO FIT ANY TASTE</p>
        <Link to='/menu'>
        <button>ORDER NOW</button>
        </Link>
      </div>
    </div>
  )
}

export default Index