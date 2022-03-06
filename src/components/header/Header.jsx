import "./header.css";
import myLogo from "../../images/about/logo.svg";
import Navigation from "../navigation/Navigation"

const Header = ({setCurrentPage})=> {
    return (
        <div className="header" id="header">
            <div className="wrapper">
                <div className="left">
                    <a href="/">
                    <img src={myLogo} className="my-2" style={{ width: "85%" }} alt="logo" />
                    </a>
                </div>
                <div className="right">
                    <Navigation setCurrentPage = {setCurrentPage}/>
                </div>
            </div>
        </div>
    )
}

export default Header