import React from "react";
import ReactDOM from "react-dom";
import HomePage from "./Pages/HomePage";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./index.scss";

ReactDOM.render(
  <Router>
    <div>
      <nav className="navbar">
        <ul className="nav-menu">
          <li className="link-spacing">
            <Link className="link-style" to="/">
              Work
            </Link>
          </li>
          <li className="link-spacing">
            <Link className="link-style" to="/about">
              About
            </Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </div>
  </Router>,
  document.getElementById("root")
);
registerServiceWorker();

function About() {
  return <h2>About</h2>;
}
