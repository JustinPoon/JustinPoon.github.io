import React, { Component } from "react";
import "../Styles/Main.scss";
import sharps from "../Assets/Sharps.png";
import mondaymockup from "../Assets/mondaymockup.png";
import IntroSection from "../Components/IntroSection";
import WorkExperience from "../Components/WorkExperience";
import ContactSection from "../Components/ContactSection";

class HomePage extends Component {
  render() {
    return (
      <body>
        <IntroSection></IntroSection>
        <WorkExperience
          styles={{ backgroundImage: "linear-gradient(#dbcdff, #a2c7dc)" }}
          title="Project Management"
          category="Western Health Internship"
          image={mondaymockup}
        ></WorkExperience>
        <WorkExperience
          styles={{
            backgroundImage: "linear-gradient(to top left, #fbd5e8, #ffeec4)",
          }}
          title="Sustainability Projects"
          category="Western Health Internship"
          image={sharps}
        ></WorkExperience>
        <ContactSection></ContactSection>
      </body>
    );
  }
}
export default HomePage;
