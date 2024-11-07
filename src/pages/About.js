import React from 'react'
import pizza from '../assets/pizza.jpg'
import '../styles/About.css'
function About() {
  return (
    <div className='about'>
        <div className='aboutTop' style={{backgroundImage: `url(${pizza})`}}></div>
        
        <h1>ABOUT US</h1>
        <p>Welcome to Peppe Pizzeria, where passion meets flavor! We are dedicated to bringing you the finest, handcrafted pizzas made from the freshest ingredients. From the classic Margherita to our signature PedroTech Special, every pizza is crafted with love and care, ensuring a mouthwatering experience with every bite. At Peppe Pizzeria, we believe that great food brings people together, and we take pride in creating a warm, welcoming atmosphere for our guests. Whether you're here for a quick bite or a family meal, we promise to serve you delicious pizzas that cater to every taste. Join us and enjoy the perfect slice, every time!</p>
    </div>
  )
}

export default About