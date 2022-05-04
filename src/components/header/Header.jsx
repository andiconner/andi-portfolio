import React from "react";
import styled from "styled-components";
import myLogo from "../../images/about/logo.svg";
import { Navigation } from "../navigation/Navigation";
import { DeviceSize } from "../responsive";
import { useMediaQuery } from "react-responsive";
import { MobileNavigation } from "../navigation/mobileNavigation";

const HeaderContainer = styled.div`
    width: 100%;
    height: 70px;
    padding-left: 2%;
    position: fixed;
    top:0px;
    background-color: #fff;
    box-shadow: 0 1px 3px rgba(15, 15, 15, 0.13);
    display: flex;
    align-items: center;
    
`;

const LeftSection = styled.div`
  display: flex;
`;
const RightSection = styled.div`
  display: flex;
  flex: 2;
  height: 100%;
  justify-content: right;
  padding-right: 5%;

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