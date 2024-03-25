import React from 'react'
import './feedback.css'
import review_img1 from '../../assets/review_img1.jpg'
import star from '../../assets/star.png'



const Feedbacks = () => {
    return (
        <div className='feedback'>
            <div className="bg-layer">
                <div className="feedback-content container">
                    <div className="feedback-header">
                        <div className="title">
                            <h2>What Our Clients Say About Us.</h2>
                        </div>
                        <div className="sub-title">
                            <p>Discover what our clients have to say about their experiences with us <span>&#8208;</span> real stories of successful dog transformations.</p>                        </div>
                    </div>
                    <div className="feedback-bottom ">
                    <div className="row">
                        <div className="column">
                            <div className="review-box">
                                <div className="review_img">
                                    <img src={review_img1} alt="" />
                                </div>
                                <div className="review-text">
                                    <div className="review-starts">
                                        <img src={star} alt="" className='review_star' />
                                        <img src={star} alt="" className='review_star' />
                                        <img src={star} alt="" className='review_star' />
                                        <img src={star} alt="" className='review_star' />
                                        <img src={star} alt="" className='review_star' />
                                    </div>
                                    <p className='review'>Outstanding results! Our dog, Max, transformed remarkably. Highly recommend Pawsitive Pup Academy</p>
                                    <p className='name'>- Sarah Ranasingha -</p>
                                </div>
                            </div>
                            <div className="review-box">
                                <div className="review_img">
                                    <img src={review_img1} alt=""  />
                                </div>
                                <div className="review-text">
                                    <div className="review-starts">
                                        <img src={star} alt="" className='review_star' />
                                        <img src={star} alt="" className='review_star' />
                                        <img src={star} alt="" className='review_star' />
                                        <img src={star} alt="" className='review_star' />
                                        <img src={star} alt="" className='review_star' />
                                    </div>
                                    <p className='review'>Outstanding results! Our dog, Max, transformed remarkably. Highly recommend Pawsitive Pup Academy</p>
                                    <p className='name'>- Sarah Ranasingha -</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="column">
                            <div className="review-box">
                                <div className="review_img">
                                    <img src={review_img1} alt=""  />
                                </div>
                                <div className="review-text">
                                    <div className="review-starts">
                                        <img src={star} alt="" className='review_star' />
                                        <img src={star} alt="" className='review_star' />
                                        <img src={star} alt="" className='review_star' />
                                        <img src={star} alt="" className='review_star' />
                                        <img src={star} alt="" className='review_star' />
                                    </div>
                                    <p className='review'>Outstanding results! Our dog, Max, transformed remarkably. Highly recommend Pawsitive Pup Academy</p>
                                    <p className='name'>- Sarah Ranasingha -</p>
                                </div>
                            </div>
                            <div className="review-box">
                                <div className="review_img">
                                    <img src={review_img1} alt="" />
                                </div>
                                <div className="review-text">
                                    <div className="review-starts">
                                        <img src={star} alt="" className='review_star' />
                                        <img src={star} alt="" className='review_star' />
                                        <img src={star} alt="" className='review_star' />
                                        <img src={star} alt="" className='review_star' />
                                        <img src={star} alt="" className='review_star' />
                                    </div>
                                    <p className='review'>Outstanding results! Our dog, Max, transformed remarkably. Highly recommend Pawsitive Pup Academy</p>
                                    <p className='name'>- Sarah Ranasingha -</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
               
            </div>
        </div>
    )
}

export default Feedbacks