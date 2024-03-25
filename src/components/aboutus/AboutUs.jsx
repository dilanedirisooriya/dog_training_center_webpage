import React from 'react'
import './aboutus.css'
import about_image from '../../assets/about_image.png'


const AboutUs = () => {
  return (
    <div className='aboutus'>
      <div className="bg-layer">
        <div className="about-content container">
          <div className="about-left">
            <h2>About us</h2>
            <p>At Pawsitive Pup Academy, we're dedicated to fostering strong bonds between dogs and their families through positive reinforcement training methods. With years of experience, our mission is to cultivate well-behaved, happy dogs while promoting responsible pet ownership and enriching the lives of both pets and their owners.</p>
            <button className='btn-outline'>Read More</button>
          </div>

          <div className="about-right">
            <img src={about_image} alt="" />
          </div>
</div></div>
        </div>
        )
}

        export default AboutUs