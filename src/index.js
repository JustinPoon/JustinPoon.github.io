import React from "react";
import ReactDOM from "react-dom";
import HomePage from "./Pages/HomePage";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./index.scss";
import About from "./Pages/About";
import ProjectManagement from "./Pages/ProjectManagement";
import history from "./history";
import Sustainability from "./Pages/Sustainability";

ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
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
          <Route path="/about" component={About}></Route>
          <Route exact path="/" component={HomePage}></Route>
          <Route
            path="/ProjectManagement"
            component={ProjectManagement}
          ></Route>
          <Route path="/Sustainability" component={Sustainability} />
        </Switch>
      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
registerServiceWorker();
