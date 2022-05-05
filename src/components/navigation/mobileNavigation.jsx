import React, { useState } from "react";
import styled from "styled-components";
import myResume from '../../images/about/220407_andi_Conner.pdf';
import { MenuToggle } from "./menuToggle";

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
  background-color: #;
  width: 100%;
  flex-direction: column;
  position: fixed;
  top: 65px;
  left: 0;
`;

const LinkItem = styled.li`
  width: 100%;
  padding: 0 1.1em;
  color: #222;
  font-weight: 500;
  font-size: 16px;
  display: flex;
  margin-bottom: 10px;
  margin-top: 20px;
`;


export function MobileNavigation ({setCurrentPage}){
    const [isOpen, setOpen] = useState(false);
    
    return(
        <NavLinksContainer>
            <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
            {isOpen && (
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
        )}
        </NavLinksContainer>

    );
}

