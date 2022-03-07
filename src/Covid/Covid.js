import { useState } from "react";
import styles from "./Covid.module.css";
import Insights from "../Insights/Insights";

function Covid(props) {
  const [work, setWork] = useState("");
  const [covidContact, setCovidContact] = useState("");
  const [covidDate, setCovidDate] = useState("");
  const [vacinatedDate, setVacinatedDate] = useState("");
  const [vaccinated, setVacinated] = useState("");

  const [workError, SetWorkError] = useState("");
  const [contactError, setcontactError] = useState("");
  const [vaccinatedError, setVacinatedError] = useState("");
  const [covidDateError, setCovidDateError] = useState("");
  const [vacinatedDateError, setVacinatedDateError] = useState("");
  const [nextpage, setnextpage] = useState(false);

  const [contactValue,setContactVal]=useState("")
  const [vacinatedValue,setVacVal]=useState("")

  const covid = { work, contactValue, covidDate, vacinatedValue, vacinatedDate};


  function workChange(event) {
    setWork(event.target.value);
  }

  function CovidChange(event) {
    setCovidContact(event.target.value);
  }

  function VacinationChange(event) {
    setVacinated(event.target.value);
  }

  function covidDateChange(event) {
    setCovidDate(event.target.value);
  }
  function vacinatedDateChange(event) {
    setVacinatedDate(event.target.value);
  }

  function covidvalidation() {
    let check = true;
    if (work.trim().length === 0) {
      SetWorkError("Please Choose One Option");
      check = false;
    }
    if (covidContact.trim().length === 0) {
      setcontactError("Please Choose One Option");
      check = false;
    }

    if (vaccinated.trim().length === 0) {
      setVacinatedError("Please Choose One Option");
      check = false;
    }
    if (covidContact === "Yes") {
      if (covidDate.trim().length === 0) {
        setCovidDateError("Please Choose Date");
        check = false;
      }
      setContactVal(true)
    }
    if (covidContact === "No") {
      setContactVal(false)
    }
    if (vaccinated === "Y") {
      if (vacinatedDate.trim().length === 0) {
        setVacinatedDateError("Please Choose Date");
        check = false;
      }
      setVacVal(true)
    }
    if (vaccinated === "N") {
      setVacVal(false)
    }

    return check;
  }

  function covidsubmit(event) {
    event.preventDefault();
    if (covidvalidation() === true) {
      setnextpage(true);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  if (!nextpage) {
    return (
      <div className={styles.covidinfo}>
        <div className={styles.cont1}>
          <h1>Covid Stuff</h1>
          <div className={styles.main1}>
            <form className={styles.covidform} onSubmit={handleSubmit}>
              <div className={styles.questions}>
                <p>how would you prefer to work?</p>
                <div className={styles.q}>
                  <input
                    type="radio"
                    id="office"
                    name="n"
                    value="from_office"
                    className={styles["covidInput"]}
                    onChange={workChange}
                  />
                  <label htmlFor="office" className={styles["covidlable"]}>
                    From Sairme Office
                  </label>
                </div>

                <div className={styles.q}>
                  <input
                    type="radio"
                    id="home"
                    name="n"
                    value="from_home"
                    className={styles["covidInput"]}
                    onChange={workChange}
                  />
                  <label htmlFor="home" className={styles["covidlable"]}>
                    From Home
                  </label>
                </div>

                <div className={styles.q}>
                  <input
                    type="radio"
                    id="hybrid"
                    name="n"
                    value="hybrid"
                    className={styles["covidInput"]}
                    onChange={workChange}
                  />
                  <label htmlFor="hybrid" className={styles["covidlable"]}>
                    Hybrid
                  </label>
                </div>
              </div>
              <p>{workError}</p>

              <div className={styles.questions}>
                <p>Did you contact covid 19? :(</p>
                <div className={styles.q}>
                  <input
                    type="radio"
                    id="Yes"
                    name="n1"
                    value="Yes"
                    className={styles["covidInput"]}
                    onChange={CovidChange}
                  />
                  <label htmlFor="Yes" className={styles["covidlable"]}>
                    Yes
                  </label>
                </div>

                <div className={styles.q}>
                  <input
                    type="radio"
                    id="No"
                    name="n1"
                    value="No"
                    className={styles["covidInput"]}
                    onChange={CovidChange}
                  />
                  <label htmlFor="No" className={styles["covidlable"]}>
                    No
                  </label>
                </div>
              </div>
              <p>{contactError}</p>
              {covidContact === "Yes" && (
                <div className={styles.questions}>
                  <p>When?</p>
                  <div className={styles.q}>
                    <input
                      type="date"
                      id="date1"
                      name="date1"
                      className={styles["date"]}
                      min="2020-01-01"
                      max="2022-12-01"
                      onChange={covidDateChange}
                    />
                    <p className={styles.errorText}>{covidDateError}</p>
                  </div>
                </div>
              )}

              <div className={styles.questions}>
                <p>Have you been vaccinated?</p>
                <div className={styles.q}>
                  <input
                    type="radio"
                    id="Y"
                    name="n3"
                    value="Y"
                    className={styles["covidInput"]}
                    onChange={VacinationChange}
                  />
                  <label htmlFor="Y" className={styles["covidlable"]}>
                    Yes
                  </label>
                </div>

                <div className={styles.q}>
                  <input
                    type="radio"
                    id="N"
                    name="n3"
                    value="N"
                    className={styles["covidInput"]}
                    onChange={VacinationChange}
                  />
                  <label htmlFor="N" className={styles["covidlable"]}>
                    No
                  </label>
                </div>
              </div>
              <p>{vaccinatedError}</p>

              {vaccinated === "Y" && (
                <div className={styles.questions}>
                  <p>When did you get your last covid vaccine?</p>
                  <div className={styles.q}>
                    <input
                      type="date"
                      id="date1"
                      name="date1"
                      className={styles["date"]}
                      min="2020-01-01"
                      max="2022-12-01"
                      onChange={vacinatedDateChange}
                    />
                    <p className={styles.errorText}>{vacinatedDateError}</p>
                  </div>
                </div>
              )}
            </form>
          </div>
          <div className={styles["covidpages"]}>
              <button className={styles["nextPreviusPages"]}>{"<"}</button>
            <div className={styles["covideclipses"]}>
              <div className={styles["covideclipseRed"]}></div>
              <div className={styles["covideclipseRed"]}></div>
              <div className={styles["covideclipseRed"]}></div>
              <div className={styles["covideclipseLight"]}></div>
              <div className={styles["covideclipseLight"]}></div>
            </div>
            <button
              className={styles["nextPreviusPages"]}
              onClick={covidsubmit}
            >
              {">"}
            </button>
          </div>
        </div>

        <div className={styles["cont2"]}>
          <h1>Redberry Covid Policies</h1>
          <p>
            As this infamous pandemic took over the world, we adjusted our
            working practices so that our employees can be as safe and
            comfortable as possible. We have a hybrid work environment, so you
            can either work from home or visit our lovely office on Sairme
            Street. If it was up to us, we would love you to see us in the
            office because we think face-to-face communications {">"} Zoom
            meetings. Both on the fun and productivity scales.
          </p>
        </div>
      </div>
    );
  } else {
    return(
    <Insights personalInfo={props.personalInfo} skills={props.skills} covid={covid}/>
    )
  }
}

export default Covid;
