import React from 'react'
import './gallery.css'
import pic1 from '../../assets/gallery1.jpg'
import pic2 from '../../assets/gallery2.jpg'
import pic3 from '../../assets/gallery3.jpg'
import pic4 from '../../assets/gallery4.jpg'
import pic5 from '../../assets/gallery5.jpg'
import icon from '../../assets/icon-gallery.png'

const Gallery = () => {
    return (
        <div className='gallery' >
            <div className="bg-layer">
                <div className="gallery-content container">
                    <div className="gallery-header">
                        <div className="gallery-title">
                            <h2>Meet Our Students</h2>
                        </div>
                        <div className="gallery-btn">
                            <button className='btn-outline gallery-btn'>View Gallery</button>
                        </div>
                    </div>

                    <div className="gallery-row">
                        <div className="gallery-column">
                            <img src={pic1} />
                            <img src={pic3} />

                        </div>
                        <div className="gallery-column">
                            <img src={pic2} />
                            <img src={pic4} />

                        </div>
                        <div className="gallery-column">
                            <img src={pic3} />
                            <img src={pic5} />

                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Gallery