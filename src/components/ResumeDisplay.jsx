import React from 'react'
import "./ResumeDisplay.css"
function ResumeDisplay() {
  return (
    
    <div className='banner' data-aos="fade-up">
    <h1 className='headi'>
    Make Your <span style={{color:'#9d4ccf'}}>Resume</span> Using Real-World Examples
        </h1>    
        <div className="desc">
        Browse <span style={{color:'#9d4ccf'}}>350+ popular resume examples</span> covering all types of jobs, industries and levels of experience. Every example has been reviewed and approved by a Certified Professional Resume Writer (CPRW).
        </div>
        <div className='res'>
            <img src="https://www.resume-now.com/sapp/uploads/2023/11/resume-example-administrative-assistant.svg" alt="" />
            <img src="https://www.resume-now.com/sapp/uploads/2023/11/resume-example-administrative-assistant.svg" alt="" />
            <img src="https://www.resume-now.com/sapp/uploads/2023/11/resume-example-administrative-assistant.svg" alt="" />
        </div>
    </div>
  )
}

export default ResumeDisplay