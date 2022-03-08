import React from "react";
import Welcome from "./WelcomePage/Welcome";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PersonalInfo from "./PersonalInformation/PersonalInfo";
import Skills from "./TechnicalSkillset/Skills";
import Covid from "./Covid/Covid";
import Insights from "./Insights/Insights";
import Submit from "./Submit/Submit";
import Thanks from "./Thanks/Thanks";
import Aplication from "./Aplication/Aplication";
function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Welcome />
          </Route>
          <Route path="/UserInfo">
            <PersonalInfo />
          </Route>
          <Route path="/Skills">
            <Skills />
          </Route>
          <Route path="/Covid">
            <Covid />
          </Route>
          <Route path="/Insights">
            <Insights />
          </Route>
          <Route path="/Submit">
            <Submit />
          </Route>
          <Route path="/Thanks">
            <Thanks />
          </Route>
          <Route path="/Aplication">
            <Aplication />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
