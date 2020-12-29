import React from "react";
import "./NavigationBar.scss";
import resume from "../Assets/Resume.pdf";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-menu">
        <li className="link-spacing">
          <Link className="link-style" to="/my-app">
            Work
          </Link>
        </li>
        <li className="link-spacing">
          <Link className="link-style" to="/about">
            About
          </Link>
        </li>
        <li className="link-spacing">
          <a href={resume} className="link-style">
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};
export default NavigationBar;
