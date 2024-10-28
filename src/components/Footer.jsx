import React from "react";
import dark from "../assets/lg2.jpg";
import "./Footer.css";
function Footer() {
  return (
    <div className="footer">
      <div className="top">
        <img src={dark} alt="" />
        <div>
          <input className="inp" type="email" placeholder="Type your email" />
          <button className="btn">Subscribe</button>
        </div>
      </div>
      <div className="middle">
        <div><ul>
            <li>
            <b>
                ProCraftr
                </b>
            </li>
            <li>
            About Us
            </li>
            <li>
            Careers
            </li>
            <li>
            Placement
            </li>
            <li>
            Support
            </li>
            <li>
            Resources
            </li>
            </ul>     </div>
        <div>
        <ul>
            <li>
                <b>

            Support
                </b>
            </li>
            <li>
            Contact
            </li>
            <li>
            Salary Tool
            </li>
            <li>
            Grievance Redressal
            </li>
            <li>
            Terms & Conditions
            </li>
            <li>
            Privacy Policy
            </li>
            </ul> 
            
          
        </div>
        <div>
        <ul>
            <li>
                <b>

            Scope & Products
                </b>
            </li>
            <li>
            Ai Resume Builder
            </li>
            <li>
            Ai Skill Tests
            </li>
            <li>
            Ai CV Parsing
            </li>
            <li>
            White
            Labelling
            </li>
            <li>
            Generative AI
            </li>
            </ul> 
            
        </div>
        <div>
        <ul>
            <li>
                <b>

            Ai Resources 
                </b>
            </li>
            <li>
            Ai - Resume Accuracy
            </li>
            <li>
            Ai - Resume Enhancer
            </li>
            <li>
            Ai - Job Match & Apply 
            </li>
            <li>
            Verified Jobs
            </li>
            <li>
            Verified Profiles 
            & Much More
            </li>
            </ul> 
         
           
        </div>
      </div>
      <hr className="line" />
      <div className="bottom"></div>
    </div>
  );
}

export default Footer;
