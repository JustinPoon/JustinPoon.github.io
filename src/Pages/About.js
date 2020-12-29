import React from "react";
import "./About.scss";
import placeholder from "../Assets/placeholder.jpg";

const About = () => {
  return (
    <div className="about-section">
      <div className="about-section__container--1 about-section__container">
        <img className="about-section__image" src={placeholder}></img>
      </div>
      <div className="about-section__container--2 about-section__container">
        <h2 className="about-section__header">
          Embedding sustainability into infrastructure design can create
          business impact and reshape our behaviors.
        </h2>
        <h2 className="about-section__body">
          Justin aims to become a leader at the nexus of{" "}
          <strong>sustainability, business, and emerging technologies</strong>{" "}
          because he believes the impact of technology is critical in securing
          the economic and environmental health of our cities.
        </h2>
        <h2 className="about-section__body about-section__body--1">
          Outside of work...
          <div>👉 He enjoys woodworking, chess and coaching</div>
          <div>
            👉 He is interested in graphic design, web design, and programming
          </div>
        </h2>
      </div>
    </div>
  );
};

export default About;
