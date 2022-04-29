import React from "react";
import './project.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Project = ({img, title, desc, tech, github, website}) => {
    return(
            <div className="proj">
                <div className="proj-browser">
                    <div className="proj-circle"></div>
                    <div className="proj-circle"></div>
                    <div className="proj-circle"></div>
                </div>
                <div className="proj-title"> {title}</div>

                    
                <img src={require(`../../images/portfolio/${img}.jpg`)} alt="" className='proj-img'/>
                
                   <div className="desc"> {desc}</div>
                   <h5>Technologies Used</h5>
                   <div className="tech"> {tech}</div>
                   <FontAwesomeIcon icon="fa-regular fa-globe" />
                
     

            </div>

    )
}

export default Project