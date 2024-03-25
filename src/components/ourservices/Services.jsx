import React from 'react'
import './services.css'
import service_image1 from '../../assets/service_image1.jpg'
import service_image2 from '../../assets/service_image2.jpg'
import service_image3 from '../../assets/service_image3.jpg'
import dark_arrow from '../../assets/dark_arrow.png'


const Services = () => {
    return (
        <div className='services'>
            <div className="bg-layer">
                <div className="service-content container">
                    <div className="service-text">
                        <h2>Our Popular Services</h2>
                        <p>Comprehensive dog training services tailored to your pet's needs, promoting obedience, agility, behavior modification, and puppy development.</p>
                    </div>

                    <div className="service-section">
                        <div className="left-box">
                            <img src={service_image1} alt="" className='service_img' />
                            <h3>Agility Training</h3>
                            <p>Enhance your dog's agility, speed, and coordination through fun and stimulating obstacle courses.</p>
                            <a href="">Learn More<img src={dark_arrow} alt='' className='arrow-img'></img></a>
                        </div>
                        <div className="middle-box">
                            <img src={service_image2} alt="" className='service_img' />
                            <h3>Puppy Training</h3>
                            <p>Lay a solid foundation for your puppy's development with socialization, basic commands, and potty training guidance.</p>
                            <a href="">Learn More<img src={dark_arrow} alt='' className='arrow-img'></img></a>
                        </div>
                        <div className="right-box">
                            <img src={service_image3} alt="" className='service_img' />
                            <h3>Behavioral Training</h3>
                            <p>Address and modify problematic behaviors such as aggression, anxiety, or excessive barking.</p>
                            <a href="">Learn More<img src={dark_arrow} alt='' className='arrow-img'></img></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services