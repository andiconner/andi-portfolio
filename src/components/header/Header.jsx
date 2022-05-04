import React from "react";
import "./header.css";
import styled from "styled-components";
import myLogo from "../../images/about/logo.svg";
import { Navigation } from "../navigation/Navigation";
import { DeviceSize } from "../responsive";
import { useMediaQuery } from "react-responsive";
import { MobileNavigation } from "../navigation/mobileNavigation";

const HeaderContainer = styled.div`
  width: 100%;
  height: 60px;
  box-shadow: 0 1px 3px rgba(15, 15, 15, 0.13);
  display: flex;
  align-items: center;
  padding: 0 1.5em;
`;

const LeftSection = styled.div`
  display: flex;
`;
const RightSection = styled.div`
  display: flex;
  flex: 2;
  height: 100%;
  justify-content: right;

`;


const Header = ({setCurrentPage})=> {
    const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile });
    return (
        <HeaderContainer>
            <LeftSection>
                <a href="#Intro" onClick ={()=>setCurrentPage("home")}>
                    <img src={myLogo} className="my-2" style={{ width: "70%" }} alt="logo" />
                </a>
            </LeftSection>
            <RightSection>
                {!isMobile && <Navigation setCurrentPage = {setCurrentPage}/>}
                {isMobile && <MobileNavigation setCurrentPage = {setCurrentPage} />}
            </RightSection>
        </HeaderContainer>
    );
}

export default Header