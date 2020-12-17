import React, { Component } from "react";
import "../Styles/Main.scss";
import FadeInAnimation from "../Components/FadeInAnimation";
import Zoom from "react-reveal/Zoom";
import sharps from "../Assets/Sharps.png";
import mondaymockup from "../Assets/mondaymockup.png";

class App extends Component {
  render() {
    return (
      <body>
        <section className="intro_section">
          <div className="introbox">
            <FadeInAnimation
              className="introbox_namelightleft"
              direction="left"
              delay="0.5"
            >
              Justin
            </FadeInAnimation>
            <FadeInAnimation
              className="introbox_namelightright"
              direction="right"
            >
              Poon
            </FadeInAnimation>
            <FadeInAnimation
              className="introbox_bio"
              direction="up"
              delay="1.5"
            >
              Welcome to my portfolio, I am a final year Civil Engineering
              student based in Melbourne, Australia. Explore this portfolio to
              find out more!
            </FadeInAnimation>
          </div>
        </section>
        <section className="exp_section">
          <Zoom opposite="true">
            <div className="exp_tile_1">
              <div className="exp_tile_category"> Internship</div>
              <div className="exp_tile_title">Agile Implementation</div>
              <div className="exp_tile_holder">
                <img className="exp_tile_image" src={mondaymockup}></img>
              </div>
            </div>
          </Zoom>
        </section>
        <section className="exp_section">
          <Zoom opposite="true">
            <div className="exp_tile_2">
              <div className="exp_tile_category"> Internship</div>
              <div className="exp_tile_title">Poster Redesign</div>
              <div className="exp_tile_holder">
                <img className="exp_tile_image" src={sharps}></img>
              </div>
            </div>
          </Zoom>
        </section>
      </body>
    );
  }
}
export default App;
