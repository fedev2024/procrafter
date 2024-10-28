import React from 'react'
import Resume from "../assets/res1.png"
import "./Carousel.css"
function Carousel() {
  return (
    <div className='contain' data-aos="fade-up">
        <div className='left'>
            Card Effect 
            <img src={Resume} className='resume' alt="" />
        </div>
        <div className='right'>
           <div className='head'>
             <h1>Introducing</h1>
            <h1>ProCraftr's New AI-</h1>
            <h1>Powered Resume</h1>
            <h1>Builder- Now</h1>
            <h1>Available</h1>
            </div>
            <div className='desc'>
            "Boost Your Resume Score, Optimize Your CV, and Access More Features. Apply for Jobs Confidently with Our Comprehensive Solution."
            </div>
        </div>
    </div>
  )
}

export default Carousel