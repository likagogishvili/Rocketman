import React from "react";
import "./welcome.css";
import rocketman from "../assets/img/rocketman.png";
import { Link } from "react-router-dom";
function Welcome() {
  return (
    <div className="page1">
      <div className="welcome">
        <h1>Welcome Rocketeer !</h1>
        <Link to={"/UserInfo"} style={{ textDecoration: "none" }}>
          <button className="welcomeButton">Start Questionnaire</button>
        </Link>
        <Link to={"/Aplication"} style={{ textDecoration: "none" }}>
          <p>Submitted Applications</p>
        </Link>
        <div className="welcome-img">
          <img src={rocketman} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Welcome;
