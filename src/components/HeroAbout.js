import React from 'react'
import "./HeroAbout.css"
import image2 from "../Assets/1.jpg"

const HeroAbout = () => {
  return (
    <div className='heroabout'>
        <img src={image2} alt="" />
        <div className="hero-text">
        <h1>About</h1>
       
        </div>

    </div>
  )
}

export default HeroAbout