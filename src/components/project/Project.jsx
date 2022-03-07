import React from "react";
import './project.css';




const Project = ({img, title, link}) => {
    return(
            <div className="proj">
                <div className="proj-browser">
                    <div className="proj-circle"></div>
                    <div className="proj-circle"></div>
                    <div className="proj-circle"></div>
                    
                </div>
                <div className="proj-title"> {title}</div>

                    <a href={link} target="blank" rel='noreferrer'>
                    <img src={require(`../../images/portfolio/${img}.jpg`)} alt="" className='proj-img'/>
                    </a>
     

            </div>

    )
}

export default Project