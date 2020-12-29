import React, { Component } from "react";
import "../Styles/Main.scss";
import sharps from "../Assets/Sharps.png";
import mondaymockup from "../Assets/mondaymockup.png";
import documentmockup from "../Assets/documentmockup.png";
import IntroSection from "../Components/IntroSection";
import WorkExperience from "../Components/WorkExperience";
import ContactSection from "../Components/ContactSection";
import { Link } from "react-router-dom";

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
          ></WorkExperience>
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
        <Link to={"/CaseCompetition"} className="link-style--plain">
          <WorkExperience
            styles={{
              backgroundImage: "linear-gradient(to top left, #85BF4B, #a2c7dc)",
            }}
            title="Renewable Energy Project"
            category="Melbourne School of Engineering Case Competition"
            image={documentmockup}
          ></WorkExperience>
        </Link>
        <ContactSection></ContactSection>
      </div>
    );
  }
}
export default HomePage;
