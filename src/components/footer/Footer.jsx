import React from 'react'
import './footer.css'
import dark_arrow from '../../assets/dark_arrow.png'
import logo from '../../assets/logo.png' 


const Footer = () => {
  return (
    <div className='footer '>
      
      <div className="upper-footer container">
        <h2>Subscribe To Join US</h2>
  
        <form>
          <input type="text" name='email' placeholder='Email Address' />
          <button className='btn'>Get Started<img src={dark_arrow} alt=''></img></button>
          </form>
          <hr />
      </div>
      <div className="middle-footer container">
        <div className="left-col">
          <img src={logo} alt="" className='logo' />
          <ul>
            <li className='header'>Pawsitive Puppy Academy</li>
            <li>No 720,</li>
            <li>Colombo Road,</li>
            <li>Kandy,</li>
            <li>Sri Lanka</li>
          </ul>
        </div>
        <div className="middle-col">
          <p className='header'>General</p>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Gallery</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="right-col">
        <p className='header'>Services</p>

          <ul>
            <li>Agility Training</li>
            <li>Puppy Training</li>
            <li>Behavior Training</li>
            <li>Private Sessions</li>
          </ul>

          <p>Follow US</p>

        </div>
      </div>
      <div className="bottom-footer ">
        <p>This Website uses cookies to improve your experience. Click ‘accept’ to continue with Cookies. if you wish to disable Cookies, please update your preferences via your web browser settings.
          To find out more and withdraw your consent at any time click here</p>
      </div>

    </div>



  )
}

export default Footer