import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/lg1.jpg"

function Navbar() {
  const [openmenu, setOpenMenu] = useState(false);

  
  function toggleBtn() {
    console.log("clicked toggle");
    setOpenMenu(!openmenu);
    
  }

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <h1>
            <Link to="/"><img src={logo} alt="" className="img"/></Link>
          </h1>
        </div>
        <div className="menu-items">
          <ul className={`list-items ${openmenu ? "open" : ""}`}>
            <li>
              <Link to="/resumebuilder">AI Resume Builder</Link>
            </li>
            <li>
              <Link to="/resumefetch">AI Resume Fetch</Link>
            </li>
            <li>
              <Link to="/resources">Resources</Link>
            </li>
            <li style={{color:'#9d4ccf'}}>
              <Link to="/aboutUs">About us</Link>
            </li>
            <li style={{color:'#9d4ccf'}}>
              <Link to="/blog">Blog</Link>
            </li>
            
          </ul>
          <li>
           
          </li>
        
        </div>
        <div>
          <ul className="login">
            <li className="loginn">
            <Link to="/login">
            Login
            </Link>  
            </li>
          <li className="signup">
            <Link to="/signup">
            Sign up
            </Link> 
            </li>
          <li>
            <i className="fas fa-bars" onClick={toggleBtn}></i>
          </li>
          </ul>
        </div>
      </nav>
     
    </>
  );
}

export default Navbar;
