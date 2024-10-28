import React from 'react'
import "./Card.css"
import img from "../assets/browse_resume.png"
import prof from "../assets/profile_pic.jpg"

function Cards() {
  return (
    <div className='card-contain'>
        <h1>
            Browse our <span style={{color:'#9d4ccf'}}>
                up-to-date{" "}
                </span>
                 resume guides
            </h1>
            <div className="desc">Explore our recently updated guides to help you refine and modernize your resume. Discover valuable tips and strategies for today’s job market.</div>
        <div className='card'>
            <img className='card-img' src={img} alt="" />
            <div>
                <div><b>Airline Customer Service Agent Cover Letter</b></div>
                <div className='details'>
                    <img src={prof} alt="" />
                    <span>By Karla Vilmenay</span>
                </div>
            </div>
        </div>
        <div className='card'>
            <img className='card-img' src={img} alt="" />
            <div>
                <div><b>Airline Customer Service Agent Cover Letter</b></div>
                <div className='details'>
                    <img src={prof} alt="" />
                    <span>By Karla Vilmenay</span>
                </div>
            </div>
        </div>
        <div className='card'>
            <img className='card-img' src={img} alt="" />
            <div>
                <div><b>Airline Customer Service Agent Cover Letter</b></div>
                <div className='details'>
                    <img src={prof} alt="" />
                    <span>By Karla Vilmenay</span>
                </div>
            </div>
        </div>
        <div className='card'>
            <img className='card-img' src={img} alt="" />
            <div>
                <div><b>Airline Customer Service Agent Cover Letter</b></div>
                <div className='details'>
                    <img src={prof} alt="" />
                    <span>By Karla Vilmenay</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cards