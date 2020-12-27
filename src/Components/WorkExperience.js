import React from "react";
import "./WorkExperience.scss";
import Zoom from "react-reveal/Zoom";

const WorkExperience = ({ styles, image, category, title }) => {
  return (
    <section className="exp-section">
      <Zoom>
        <div className="exp-tile" style={styles}>
          <div className="exp-tile__category">{category}</div>
          <div className="exp-tile__title"> {title}</div>
          <div className="exp-tile__holder">
            <img className="exp-tile__image" src={image}></img>
          </div>
        </div>
      </Zoom>
    </section>
  );
};

export default WorkExperience;
