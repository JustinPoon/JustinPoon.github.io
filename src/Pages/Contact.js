import React, { Component } from "react";
import "./Contact.css";
import profilephoto from "../Assets/profilephoto.jpg";
import gmaillogo from "../Assets/gmail.png";
import linkedin from "../Assets/linkedin.png";
import instagram from "../Assets/instagram.png";

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="backgroundCircle_bottom"></div>
        <div className="backgroundCircle_top"></div>
        <nav className="navigation"></nav>
        <main className="contact">
          <div className="contact_main">
            <div className="profilephoto">
              <img
                src={profilephoto}
                width="100%"
                height="100%"
                alt="logo"
              ></img>
            </div>
            <div className="contact_maintext">
              <div className="heading_tertiary">
                Interested? Get in touch now!
              </div>
              <div className="contact_maintext_info">
                Click the JP logo for more
              </div>
              <div className="contact_maintext_email">
                <img
                  src={gmaillogo}
                  className="contact_maintext_emaillogo"
                ></img>
                <span className="contact_maintext_emailspan">
                  j.poon36@gmail.com
                </span>
              </div>
              <div className="contact_maintext_other">
                <a href="https://www.linkedin.com/in/justin-poon-568817180/">
                  <img
                    src={linkedin}
                    className="contact_maintext_otherlogo"
                  ></img>
                </a>
                <a href="https://www.instagram.com/plywoodpoon/?hl=en">
                  <img
                    src={instagram}
                    className="contact_maintext_otherlogo"
                  ></img>
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}
export default App;
