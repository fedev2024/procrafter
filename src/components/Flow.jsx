import React from 'react'
import "./Flow.css"
import flowimg1 from "../assets/flow_image1.png"
import flowimg2 from "../assets/flow_image2.png"
import flowimg3 from "../assets/flow_image3.png"
import flowimg4 from "../assets/flow_image4.png"
import flowimg5 from "../assets/flow_image5.png"
import arrow from "../assets/arrowt.png"
function Flow() {
  return (
    <div className='flow-container' data-aos="fade-up">
       <div> <h1>
            <b>Let Your Resume</b>
            </h1>
        <h1>
            <b>Stand Ahead Of Competition</b>
            </h1>
        <h1>
           <b>With Our <span style={{color:'#9d4ccf'}}>Robust AI </span></b>
            </h1>
            </div>
            <div className="flow-section">
               <div className='section1'>
                 <img src={flowimg1} alt="flowimg" />
                <img src={arrow} alt="arrow" style={{width:"200px",height:"70px", transform: "rotate(12deg)"}}/>
                <img src={flowimg2} alt="flowimg" />
                </div>
                <div className='section2'>
                <img src={arrow} alt="arrow" className='section2arrow1' style={{width:"170px",height:"70px"}}/>
                  <img src={flowimg3} alt="flowimg" className='section2img' />
                  <img src={arrow} alt="arrow" className='section2arrow2' style={{width:"170px",height:"70px"}}/>

                  </div>
                <img src={flowimg4} alt="flowimg" />
                <img src={flowimg5} alt="flowimg" />
            </div>
    </div>
  )
}

export default Flow