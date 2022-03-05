import "./intro.css"
import Me from "../../images/about/about_img.png"

const Intro = ()=> {
  return (
    <div className="i">
        <div className="i-left"> 
          <div className="i-left-wrapper"> 
            <h2 className="i-intro">Welcome to</h2> 
            <h1 className="i-name">Andi's corner!</h1> 
            <div className="i-title">
              <div className="i-title-wrapper">
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">Graphic Designer</div>
              <div className="i-title-item">Photograhy</div>
              <div className="i-title-item">Marketing</div>
            </div>
          </div>
          <p className="i-desc">
          An entrepreneurial--spirited creative with a business edge focus, global mindset, and proven ability to deliver results that align client visions with business goals.
          </p>
        </div>
        </div>
        <div className="i-right">
          <img src={Me} className="i-img" />
        </div>
    </div>
  )
}

export default Intro