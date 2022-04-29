import React from "react";
import './project.css';
import Github from "../../images/portfolio/github.svg"



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
                <div className="icons"> 
                    <a href={github} target="blank" rel='noreferrer'> 
                    <i class="fab fa-github" style={{color: "rgb(235, 66, 129)"}}></i>
                    </a>
                    <a href={website} target="blank" rel='noreferrer'> 
                    <i class="fas fa-external-link-alt" style={{color: "rgb(235, 66, 129)"}}></i>
                    </a>
                </div>

            </div>

    )
}

export default Project