import React from "react";
import linkedIn from '../../images/footer/linkedin-logo.png';
import gitHub from '../../images/footer/github-logo.png';
import './footer.css';


const Footer = () => {
    return(
        <section className='footer' id="footer">
            <div className=''>
                
                    
                            <a href='https://www.linkedin.com/in/andi-conner-74504062/'   target='blank' alt="Andi Conner LinkedIn" >
                                <img src={linkedIn} className="my-2" style={{ width: "2.5%" }} alt="LinkedIn" />
                            </a>
                            
                            <a href='https://github.com/andiconner'  target='blank' alt="Andi Conner Github" >
                                <img src={gitHub} className="my-2" style={{ width: "2.5%" }} alt="gitHub" />
                            </a>
            </div>
        </section>
      
    );
}

export default Footer;