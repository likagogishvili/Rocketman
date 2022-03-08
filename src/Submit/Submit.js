import "./Submit.css";
import { React, useState } from "react";
import { Link } from "react-router-dom";
import Thanks from "../Thanks/Thanks";
import * as axios from "axios";
function Submit(props) {
  const [nextpage, setnextpage] = useState(false);
  // console.log(props.personalInfo, props.skills, props.covid, props.insights);
  const skills = props.skills.map((sk) => sk.experience * 1);
  const id = props.skills.map((sk) => sk.ids);
  function finalSubmit(event) {
    event.preventDefault();
    axios
      .post("https://bootcamp-2022.devtest.ge/api/application#F1", {
        token: "ed8a6f5d-f018-4207-a3f4-27a1a340eb18",
        first_name: props.personalInfo.fname,
        last_name: props.personalInfo.lname,
        email: props.personalInfo.mail,
        phone: props.personalInfo.number,
        skills: [
          {
            id: id[0],
            experience: skills[0],
          }
        ],
        work_preference: props.covid.work,
        had_covid: props.covid.contactValue,
        had_covid_at: props.covid.covidDate,
        vaccinated: props.covid.vacinatedValue,
        vaccinated_at: props.covid.vacinatedDate,
        will_organize_devtalk: props.insights.devTalksVal,
        devtalk_topic: props.insights.aboutYou,
        something_special: props.insights.speech,
      })
      .then((res) => console.log("Posting Data", res))
      .catch((err) => console.error(err));

    setnextpage(true);
  }

  if (!nextpage) {
    return (
      <div className="box">
        <div className="submit">
          <button onClick={finalSubmit}>Submit</button>
          <Link to={"./Insights"} style={{ textDecoration: "none" }}>
            <p>Go Back</p>
          </Link>
        </div>
      </div>
    );
  } else {
    return <Thanks />;
  }
}
export default Submit;

//https://bootcamp-2022.devtest.ge/api/applications?token=ed8a6f5d-f018-4207-a3f4-27a1a340eb18
