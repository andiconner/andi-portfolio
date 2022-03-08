import Phone from "../../images/contact/phone.png";
import Email from "../../images/contact/email.png";
import Address from "../../images/contact/home.png";
import  React, { useRef, useState } from 'react';
import "./contact.css";
import emailjs from '@emailjs/browser';

const Contact = () => {
    const formRef = useRef()
    const [done, setDone] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(
        "service_pt6pdv1",
        "template_qudjo1w",
        formRef.current, 
        "fnS3qubqXEHMQHXBW"
        )
      .then((result) => {
          console.log(result.text);
          setDone(true)
      }, (error) => {
          console.log(error.text);
      });
  };

  
  return (
    <div className="c">
        <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Let's talk about your next project</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src={Phone} alt="" className="c-icon"/>
                            <a href="tel:305-962-8784">(305) 962-8784</a>
                        </div>
                        <div className="c-info-item">
                            <img src={Email} alt="" className="c-icon"/>
                            <a href="malito:andiconner@icloud.com">andiconner@icloud.com</a>
                        </div>
                        <div className="c-info-item">
                            <img src={Address} alt="" className="c-icon"/>
                            Orlando, FL USA
                        </div>
                    </div>
                </div>
                    
                <div className="c-right">
                    <div className="c-desc">
                        <h3>
                            I would love to hear from you!
                        </h3>
                    </div>
                        <form ref={formRef} onSubmit={handleSubmit}>
                            <input type="text" placeholder="Name" name="user_name" />
                            <input type="text" placeholder="Subject" name="user_subject" />
                            <input type="text" placeholder="Email" name="user_email" />
                            <textarea rows="5" placeholder="Message" name="message"></textarea>
                            <button className="button">Submit</button>
                            {done && "Thank you for your message!"}
                        </form>
                </div>
            </div>
    </div>
  );
};
export default Contact
