import React from "react";
import "./welcome.css";
import rocketman from '../assets/img/rocketman.png'

function Welcome() {
  return (
    <div className="welcome">
      <h1>Welcome Rocketeer !</h1>
      <button>Start Questionnaire</button>
      <p>Submitted Applications</p>
      <div className="welcome-img">
          <img src={rocketman} alt='' />
          </div> 
    </div>
  );
}

export default Welcome;
