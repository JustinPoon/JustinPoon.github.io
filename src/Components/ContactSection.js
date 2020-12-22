import React from "react";
import "./ContactSection.scss";
import linkedin from "../Assets/linkedin.png";
import instagram from "../Assets/instagram.png";
import github from "../Assets/github.png";
import { Button } from "@material-ui/core";
import resume from "../Assets/Resume.pdf";

// The `withStyles()` higher-order component is injecting a `classes`
// prop that is used by the `Button` component.
const styles = {
  background: "#f22283",
  borderRadius: 20,
  border: 0,
  color: "white",
  height: 48,
  padding: "0 5%",
  boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  fontFamily: "Source Sans Pro",
};

const ContactSection = () => {
  return (
    <section className="contact-section">
      <div className="contact-section__contact">
        Interested in finding out more?{" "}
      </div>
      <div className="contact-section__contact">
        Learn more <span className="red-highlight">about me</span>, contact me
        or see my resume below
      </div>
      <div className="contact-section__links">
        <a
          className="contact-section__link"
          href="https://www.linkedin.com/in/justin-poon-568817180/"
          label="View my LinkedIn profile"
        >
          <span className="contact-section__icons">
            <img className="contact-section__icon" src={linkedin}></img>
          </span>
        </a>
        <a
          className="contact-section__link"
          href="https://www.instagram.com/plywoodpoon/?hl=en"
          label="View my Instragram profile"
        >
          <span className="contact-section__icons">
            <img className="contact-section__icon" src={instagram}></img>
          </span>
        </a>
        <a
          className="contact-section__link"
          href="https://github.com/JustinPoon"
          label="View my Instragram profile"
        >
          <span className="contact-section__icons">
            <img className="contact-section__icon" src={github}></img>
          </span>
        </a>
        <div className="contact-section__email">
          <a
            className="contact-section__email"
            href="mailto:contactjustinpoon@gmail.com"
          >
            contactjustinpoon@gmail.com
          </a>
        </div>
        <div className="contact-section__email">
          <Button style={styles} href={resume}>
            Resume
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
