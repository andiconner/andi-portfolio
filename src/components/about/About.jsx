import "./about.css";
import React from "react";
import Me from "../../images/about/about_img_3.png"

const About = ({setCurrentPage}) => {
  return (
    <div className="a" id="about">
        <div className="a-left">
            <img src={Me} className="a-img" style={{ width: "84%" }} alt="Andi Conner profile"/>
        </div>
        <div className="a-right">
            <h1 className="a-title">ABOUT ME</h1>
            <p className="a-desc">
                I graduated in Business Administration in Brazil and have worked in the U.S. import/export companies, in Corporate events and as a graphic & web designer for a marketing Company and my own. Through it all I loved design in all its forms. I went back to school and majored in computer graphic design at Broward College, in Fort Lauderdale, FL. And since then I’ve engaged in design work for small businesses.
                My DNA is both Latin and American. I can bridge the two because I have lived and worked in both Latin America and the U.S. I speak and create in Portuguese, Spanish and English. I believe in the importance of constant learning, so in 2021 I commited to the UCF Full Stack Web Development Bootcamp Program to update and learn new skills.
            </p>
            <p className="a-desc">
                A creative/entrepreneurial--mindset, business edge focus, and strong commitment to ongoing learning. A dynamic and versatile professional with a “client-first” approach, 
                dedicated to 100% client satisfaction. 
                I would love to be able to share my gifts, talents and experience with you!    
            </p>
            
            <h4>
              Thank you for visiting my website!
            </h4>
            <div className="action">
              <button onClick = {() => setCurrentPage("contact")} className="button">Reach Out</button>
              <button onClick = {() => setCurrentPage("portfolio")} className="button">Check My Portfolio</button>
            </div>
        </div>
        
        
    </div>
  )
}

export default About