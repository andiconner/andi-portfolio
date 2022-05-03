import "./skills.css";
import React from "react";
import Bulma from "../../images/icons/SVG/bulma.svg";
import CreativeCloud from "../../images/icons/SVG/creativeCloud.svg";
import Photoshop from "../../images/icons/SVG/photoshop.svg";
import Illustrator from "../../images/icons/SVG/illustrator.svg";
import InDesign from "../../images/icons/SVG/inDesign.svg";
import Lightroom from "../../images/icons/SVG/lightroom.svg";
import Dreamweaver from "../../images/icons/SVG/dreamweaver.svg";




const Skills = ({setCurrentPage}) => {
  return(
        <section className='skills' id="skills">
            <div className="">
                <h1 className="s-title">S K I L L S</h1>
                <p></p>
            </div>
            <div className="s-list">
            <h1 className="s-list">Programming Languages</h1>
              <div>
                <i class="fa-brands fa-html5" style={{color: "#00B4D8"}}></i>
                <h5>HTML5</h5>
              </div>
              <div>
                <i class="fa-brands fa-css3-alt" style={{color: "#00B4D8"}}></i>
                <h5>CSS3</h5>
              </div>
              <div>
                <i class="fa-brands fa-js" style={{color: "#00B4D8"}}></i>
                <h5>JavaScript</h5>
              </div>
            </div>

            <div className="s-list">
            <h1 className="s-list">Frameworks</h1>
              <div>
                <i class="fa-brands fa-react fa-spin" style={{color: "#00B4D8"}}></i>
                <h5>React</h5>
              </div>
              <div>
                <i class="fa-brands fa-bootstrap" style={{color: "#00B4D8"}}></i>
                <h5>Bootstrap</h5>
              </div>
              <div>
                  <img src={Bulma} className="" style={{ width: "20%" }} alt="Bulma logo"/>
                  <h5>Bulma</h5>
                </div>
              <div>
                <i class="icon icon-jquery" style={{color: "#00B4D8"}}></i>
                <h5>JQuery</h5>
              </div>
            </div> 

            <div className="s-list">
            <h1 className="s-list">Databases</h1>
              <div>
                <i class="icon icon-mysql" style={{color: "#00B4D8"}}></i>
                <h5>MySQL</h5>
              </div>
              <div>
                <i class="icon icon-mongodb" style={{color: "#00B4D8"}}></i>
                <h5>MongoDB</h5>
              </div>
            </div>
            <div className="s-list">
              <h1 className="s-list">Miscellaneous</h1>
              <div>
                <i class="fa-brands fa-git-alt" style={{color: "#00B4D8"}}></i>
                <h5>Git</h5>
              </div>
              <div>
                <i class="fa-brands fa-node" style={{color: "#00B4D8"}}></i>
                <h5>Node.js</h5>
              </div>
              <div>
                <i class="icon icon-npm" style={{color: "#00B4D8"}}></i>
                <h5>npm</h5>
              </div>
              <div>
                <i class="icon icon-heroku" style={{color: "#00B4D8"}}></i>
                <h5>Heroku</h5>
              </div>
              <div>
                <i class="fa-brands fa-wordpress" style={{color: "#00B4D8"}}></i>
                <h5>Wordpress</h5>
              </div>
            </div>
              
              <div className="s-list">
              <h1 className="s-list">Adobe</h1>
                <div>
                  <img src={CreativeCloud} className="" style={{ width: "20%" }} alt="Creative cloud logo"/>
                  <h5>Adobe Creative Cloud</h5>
                </div>
                <div>
                  <img src={Photoshop} className="" style={{ width: "20%" }} alt="Photoshop logo"/>
                  <h5>Photoshop</h5>
                </div>
                <div>
                  <img src={Illustrator} className="" style={{ width: "20%" }} alt="Illustrator logo"/>
                  <h5>Illustrator</h5>
                </div>
                <div>
                  <img src={InDesign} className="" style={{ width: "20%" }} alt="InDesign logo"/>
                  <h5>InDesign</h5>
                </div>
            </div> 
            <div className="s-list">
              <div>
                <img src={Dreamweaver} className="" style={{ width: "20%" }} alt="Dreamweaver logo"/>
                <h5>Dreamweaver</h5>
              </div>
              <div>
                <img src={Lightroom} className="" style={{ width: "20%" }} alt="Lightroom logo"/>
                <h5>Lightroom</h5>
              </div>
            </div>
        </section>
  )
}

export default Skills