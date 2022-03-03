import React from "react";
import "./welcome.css";
import rocketman from "../assets/img/rocketman.png";
import { Link } from "react-router-dom";
function Welcome() {
  return (
    <div className="page1">
      <div className="welcome">
        <h1>Welcome Rocketeer !</h1>
        <Link to={'/PersonalInfo'}>
          <button className="welcomeButton">Start Questionnaire</button>
        </Link>

        <p>Submitted Applications</p>
        <div className="welcome-img">
          <img src={rocketman} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Welcome;
