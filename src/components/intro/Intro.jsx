import React from "react";
import "./intro.css";
import Me from "../../images/about/about_img.png";


const Intro = ({setCurrentPage})=> {
  return (
    <div className="i" id="intro">
        <div className="i-left"> 
          <div className="i-left-wrapper"> 
            <h2 className="i-intro">Welcome to</h2> 
            <h1 className="i-name">Andi's corner!</h1> 
            <div className="i-title">
              <div className="i-title-wrapper">
              <div className="i-title-item">Full Stack Web Developer</div>
              <div className="i-title-item">Front End</div>
              <div className="i-title-item">Graphic Design</div>
              <div className="i-title-item">Brand Design</div>
              <div className="i-title-item">Photography</div>
            </div>
              
          </div>
          <p className="i-desc">
          Full Stack Web Developer with a creative/entrepreneurial--mindset, business edge focus, and strong commitment to ongoing learning.
          A dynamic and versatile professional with a “client-first” approach, dedicated to 100% client satisfaction every time.
          </p>
   
            <button onClick = {() => setCurrentPage("about")} className="i-button">Learn More</button>
        
        </div>
        </div>
        <div className="i-right">
          <img src={Me} className="a-img" alt="Andi Conner profile"/>
        </div>
    </div>
  )
}

export default Intro