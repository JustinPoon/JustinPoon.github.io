import React from "react";
import ReactDOM from "react-dom";
import HomePage from "./Pages/HomePage";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import About from "./Pages/About";
import ProjectManagement from "./Pages/ProjectManagement";
import history from "./history";
import Sustainability from "./Pages/Sustainability";
import CaseCompetition from "./Pages/CaseCompetition";
import NavigationBar from "./Components/NavigationBar";

ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <div>
        <NavigationBar />
        <Switch>
          <Route path="/about" component={About}></Route>
          <Route exact path="/my-app" component={HomePage}></Route>
          <Route
            path="/ProjectManagement"
            component={ProjectManagement}
          ></Route>
          <Route path="/Sustainability" component={CaseCompetition} />
          <Route path="/CaseCompetition" component={Sustainability} />
        </Switch>
      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
registerServiceWorker();
