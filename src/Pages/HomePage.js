import React, { Component } from "react";
import "../Styles/Main.scss";
import FadeInAnimation from "../Components/FadeInAnimation";
import Zoom from "react-reveal/Zoom";
import sharps from "../Assets/Sharps.png";
import mondaymockup from "../Assets/mondaymockup.png";

class HomePage extends Component {
  render() {
    return (
      <body>
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
            based in Melbourne, Australia. Explore this portfolio to find out
            more!
          </FadeInAnimation>
        </section>
        <section className="exp-section">
          <Zoom opposite="true">
            <div className="exp-tile exp-tile--1">
              <div className="exp-tile__category"> Internship</div>
              <div className="exp-tile__title">Agile Implementation</div>
              <div className="exp-tile__holder">
                <img className="exp-tile__image" src={mondaymockup}></img>
              </div>
            </div>
          </Zoom>
        </section>
        <section className="exp-section">
          <Zoom opposite="true">
            <div className="exp-tile exp-tile--2">
              <div className="exp-tile__category"> Internship</div>
              <div className="exp-tile__title">Poster Redesign</div>
              <div className="exp-tile__holder">
                <img className="exp-tile__image" src={sharps}></img>
              </div>
            </div>
          </Zoom>
        </section>
      </body>
    );
  }
}
export default HomePage;
