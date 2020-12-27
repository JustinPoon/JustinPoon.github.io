import React, { Component } from "react";
import "../Styles/Main.scss";
import sharps from "../Assets/Sharps.png";
import mondaymockup from "../Assets/mondaymockup.png";
import IntroSection from "../Components/IntroSection";
import WorkExperience from "../Components/WorkExperience";
import ContactSection from "../Components/ContactSection";
import { Router, Route, Link } from "react-router-dom";
import "../index.scss";

class HomePage extends Component {
  render() {
    return (
      <div>
        <IntroSection></IntroSection>
        <Link to={"/ProjectManagement"} className="link-style--plain">
          <WorkExperience
            styles={{ backgroundImage: "linear-gradient(#dbcdff, #a2c7dc)" }}
            title="Project Management"
            category="Western Health Internship"
            image={mondaymockup}
          >
            <div onClick={() => history.push("/ProjectManagement")}></div>
          </WorkExperience>
        </Link>
        <Link to={"/Sustainability"} className="link-style--plain">
          <WorkExperience
            styles={{
              backgroundImage: "linear-gradient(to top left, #fbd5e8, #ffeec4)",
            }}
            title="Sustainability Projects"
            category="Western Health Internship"
            image={sharps}
          ></WorkExperience>
        </Link>
        <ContactSection></ContactSection>
      </div>
    );
  }
}
export default HomePage;
