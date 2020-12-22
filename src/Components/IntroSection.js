import React from "react";
import "./IntroSection.scss";
import FadeInAnimation from "../Components/FadeInAnimation";

const IntroSection = () => {
  return (
    <section className="intro-section">
      <FadeInAnimation
        className="intro-section__name intro-section__name--left"
        direction="left"
        delay="0.5"
      >
        Justin
      </FadeInAnimation>
      <FadeInAnimation
        className="intro-section__name intro-section__name--right"
        direction="right"
      >
        Poon
      </FadeInAnimation>
      <FadeInAnimation
        className="intro-section__bio"
        direction="up"
        delay="1.5"
      >
        Welcome to my portfolio, I am a final year Civil Engineering student
        based in Melbourne, Australia. Explore this portfolio to find out more!
      </FadeInAnimation>
    </section>
  );
};

export default IntroSection;
