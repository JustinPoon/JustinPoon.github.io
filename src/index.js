import React from "react";
import ReactDOM from "react-dom";
import HomePage from "./Pages/HomePage";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

ReactDOM.render(
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Work</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
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
