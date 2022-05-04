import React from "react";
import myResume from '../../images/about/220407_andi_Conner.pdf';
import styled from "styled-components";


const NavLinksContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  
`;

const LinksWrapper = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  height: 100%;
  list-style: none;
  float:right;
`;

const LinkItem = styled.li`
  height: 100%;
  padding: 0 1.1em;
  color: #222;
  font-weight: 500;
  font-size: 14px;
  align-items: center;
  justify-content: center;
  display: flex;
  border-top: 2px solid transparent;
 
`;


export function Navigation ({setCurrentPage}){
        
        return(
            <NavLinksContainer>
                <LinksWrapper>
                    <LinkItem>
                        <a href="#Intro" onClick ={()=>setCurrentPage("home")}>
                        Home
                        </a>
                    </LinkItem>
                    <LinkItem>
                        <a href="#about" onClick = {()=> setCurrentPage("about")}>
                        About
                        </a>
                    </LinkItem>
                    <LinkItem>
                        <a href="#skills" onClick = {()=> setCurrentPage("skills")}>
                        Skills
                        </a>
                    </LinkItem>
                    <LinkItem>
                        <a href="#portfolio" onClick = {()=> setCurrentPage("portfolio")}>
                        Portfolio
                        </a>
                    </LinkItem>
                    <LinkItem>
                        <a href="#contact" onClick = {() => setCurrentPage("contact")}>
                        Contact
                        </a>
                    </LinkItem>
                    <LinkItem>
                        <a href={myResume}   alt="Andi Conner resume" >
                        Resume
                        </a>
                    </LinkItem>
                </LinksWrapper>
            </NavLinksContainer>
    
        )
    }
    
    