import React from "react";
import './portfolio.css';
import Project from "../project/Project";
import {projects} from "../../data"

const Portfolio = () => {
    return(
        <section className='portfolio' id="portfolio">
            <div className="p-title">
                <h1 className="p-title">My Portfolio</h1>
                <p></p>
            </div>
            <div className="p-list">
            {projects.map((item) =>(
                <Project key={item.id} title={item.title} img={item.img} desc={item.desc}link={item.link} tech={item.tech} github={item.github} website={item.website}/>
                ))}
                    
                    
                
            </div> 
        </section>
      
    );
}

export default Portfolio;