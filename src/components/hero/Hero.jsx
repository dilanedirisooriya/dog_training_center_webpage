import React from 'react'
import './hero.css'
import dark_arrow from '../../assets/dark_arrow.png'
import hero_image from '../../assets/hero_image.jpg'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>Teach & Train Your Puppy</h1>
        <h3>Expert Guidance for a Well-Behaved Companion</h3>
        <button className='btn'>Get Started<img src={dark_arrow} alt=''></img></button>
      </div>
      <div className="hero-img">
        <div class="circle"></div>
        <img src={hero_image} alt="" />
      </div>
    </div>
  )
}

export default Hero