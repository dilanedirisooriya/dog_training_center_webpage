import React from 'react'
import './contactus.css'

import address_icon from '../../assets/map.png'
import call_icon from '../../assets/phone.png'
import email_icon from '../../assets/email.png'

const ContactUs = () => {
    return (
        <div className='contact'>
            <div className="bg-layer">
                <div className="contact-header container">
                    <div className="contact-text">
                        <h2>Contact Us</h2>
                        <p>Got questions or ready to begin your dog's training journey? Reach out to us today for personalized assistance and guidance.</p>
                    </div>
                    <div className="contact-content">

                        <div className="contact-col">
                            <p>Leave us a Message</p>
                            <form>
                                <div className="form-row">
                                    <div className="form-col">
                                        <input type="text" name='name' placeholder='Name' required />
                                    </div>
                                    <div class="form-col">
                                        <input type="text" name='phone' placeholder='Phone' required />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-col">
                                        <input type="text" name='email' placeholder='Email' required />
                                    </div>
                                    <div class="form-col">
                                        <input type="text" name='subject' placeholder='Subject' />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <textarea name="message" cols="" rows="6" placeholder='Write Your Message'></textarea>
                                </div>
                                <button type='submit' className='btn'>Submit</button>

                            </form>


                        </div>
                        <div className="contact-col">
                            <ul>
                                <li><img src={address_icon} alt="" />No 720, Colombo Road, Kandy</li>
                                <li><img src={call_icon} alt="" />+94 77 2222 222</li>
                                <li><img src={email_icon} alt="" />info@pawsitivepupacedy.com</li>
                            </ul>

                            <div className="mapouter">
                                <div className="gmap_canvas">
                                    <iframe className="gmap_iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=kandy&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                                    </iframe>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>
            </div>

        </div>


    )
}

export default ContactUs