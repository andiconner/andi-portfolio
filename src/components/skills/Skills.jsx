import "./skills.css";
import React from "react";
import Mysql from "../../images/icons/SVG/mysql.svg"


const Skills = ({setCurrentPage}) => {
  return(
        <section className='skills' id="skills">
            <div className="s-title">
                <h1 className="s-title">Skills</h1>
                <p></p>
            </div>
            <div className="s-list">
              <div>
                <i class="fa-brands fa-git-alt" style={{color: "#00B4D8"}}></i>
                <h5>Git</h5>
              </div>
              <div>
                <i class="fa-brands fa-react fa-spin" style={{color: "#00B4D8"}}></i>
                <h5>React</h5>
              </div>
              <div>
                <i class="fa-brands fa-js" style={{color: "#00B4D8"}}></i>
                <h5>JavaScript</h5>
              </div>
              <div>
                <i class="fa-brands fa-html5" style={{color: "#00B4D8"}}></i>
                <h5>HTML5</h5>
              </div>
            
            </div>

            <div className="s-list">
              
              <div>
                <i class="fa-brands fa-css3-alt" style={{color: "#00B4D8"}}></i>
                <h5>CSS3</h5>
              </div>
              <div>
                <i class="fa-brands fa-node" style={{color: "#00B4D8"}}></i>
                <h5>Node.js</h5>
              </div>

              <div>
                <i class="fa-brands fa-bootstrap" style={{color: "#00B4D8"}}></i>
                <h5>Bootstrap</h5>
              </div>
              <div>
                <i class="fa-brands fa-wordpress" style={{color: "#00B4D8"}}></i>
                <h5>Wordpress</h5>
              </div>
            </div> 

            <div className="s-list">
              
              <div>
              <img src={Mysql} className="" style={{ width: "30%" }} alt="Mysql logo"/>
 
                <h5>MySQL</h5>
              </div>
              <div>
                <i class="icon-mongodb" style={{color: "#00B4D8"}}></i>
                <h5>MongoDB</h5>
              </div>
              <div>
                <i class="icon-npm" style={{color: "#00B4D8"}}></i>
                <h5>npm</h5>
              </div>

              <div>
                <i class="icon-heroku" style={{color: "#00B4D8"}}></i>
                <h5>Heroku</h5>
              </div>
              
            </div> 
        </section>
  )
}

export default Skills