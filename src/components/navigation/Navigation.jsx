import React from "react";
import myResume from '../../images/about/220407_andi_Conner.pdf';
import './navigation.css';

function Navigation ({setCurrentPage}){
    
    return(
        <nav className='navigation'>
            <ul className='flex-row'>
                <li className="topnav responsive" id="myTopnav">
                    <a href="#Intro" onClick ={()=>setCurrentPage("home")}>
                    Home
                    </a>
                </li>
                <li className="topnav responsive" id="myTopnav">
                    <a href="#about" onClick = {()=> setCurrentPage("about")}>
                    About me
                    </a>
                </li>
                <li className="topnav responsive" id="myTopnav">
                    <a href="#skills" onClick = {()=> setCurrentPage("skills")}>
                    Skills
                    </a>
                </li>
                <li className="topnav responsive" id="myTopnav">
                    <a href="#portfolio" onClick = {()=> setCurrentPage("portfolio")}>
                    Portfolio
                    </a>
                </li>
                <li className="topnav responsive" id="myTopnav">
                    <a href="#contact" onClick = {() => setCurrentPage("contact")}>
                    Contact
                    </a>
                </li>
                <li className="topnav responsive" id="myTopnav">
                    <a href={myResume}   alt="Andi Conner resume" >
                    Resume
                    </a>
                </li>
                <li className="topnav responsive" id="myTopnav">
                    <a href="javascript:void(0);" class="icon-bars" onclick="myFunction()">
                    <i class="fa-solid fa-bars"></i>
                    </a>
                </li>
            </ul>
        </nav>

    )
}

export default Navigation;