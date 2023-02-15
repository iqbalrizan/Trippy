import React from 'react'
import "./HeroSection.css"
import image1 from "../Assets/2.jpg"

const HeroSection = () => {
  return (
    <div className='herosection'>
        <img src={image1} alt="" />
        <div className="hero-text">
        <h1>Your Journey Your Story</h1>
        <p>Choose Your Favourite Destination</p>
        <button>Travel</button>
        </div>

    </div>
  )
}

export default HeroSection