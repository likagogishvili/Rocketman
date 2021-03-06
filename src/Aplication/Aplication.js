import { useEffect, useState } from "react";
import "./Aplication.css";
import AplicationForm from "./AplicationForm";
import Axios from "axios";
function Aplication() {
  const [userData, setUserData] = useState([]);
  const link =
    "https://bootcamp-2022.devtest.ge/api/applications?token=ed8a6f5d-f018-4207-a3f4-27a1a340eb18";
  const [arrow, setarrow] = useState(false);
  const [arrow1, setarrow1] = useState(false);
  const [arrow2, setarrow2] = useState(false);

  function personalInfo() {
    Axios.get(link).then((response) => {
      const data = response.data;
      setUserData(data);
    });
  }
  function up() {
    setarrow(!arrow);
  }
  function up1() {
    setarrow1(!arrow1);
    setarrow(false);
  }
  function up2() {
    setarrow2(!arrow2);
  }
  useEffect(() => {
    personalInfo();
  }, []);
  return (
    <div>
      <div className="content">
        <h1 className="aplication_h1">Submitted Applications</h1>

        <div className="heading">
          <p className="numbers">1</p>
          <button className="img_butt" onClick={up}>
            {arrow && <i className="arrow down"></i>}
            {!arrow && <i className="arrow up"></i>}
          </button>
        </div>
        {arrow && <AplicationForm userData={userData[0]} />}

        <div className="heading">
          <p className="numbers">2</p>
          <button className="img_butt" onClick={up1}>
            {arrow1 && <i className="arrow down"></i>}
            {!arrow1 && <i className="arrow up"></i>}
          </button>
        </div>
        {arrow1 && <AplicationForm userData={userData[8]} />}

        <div className="heading">
          <p className="numbers">3</p>
          <button className="img_butt" onClick={up2}>
            {arrow2 && <i className="arrow down"></i>}
            {!arrow2 && <i className="arrow up"></i>}
          </button>
        </div>
        {arrow2 && <AplicationForm userData={userData[2]} />}
      </div>
    </div>
  );
}
export default Aplication;
