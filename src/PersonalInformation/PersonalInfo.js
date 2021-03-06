import { React, useState } from "react";
import styles from "./PersonalInfo.module.css";
import Skills from "../TechnicalSkillset/Skills";

function PersonalInfo() {
  var regex = /[$-/:-?{-~!"^_`\[\]]/;
  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  const [mail, setmail] = useState("");
  const [number, setNumber] = useState("");
  const [nameError, setNameError] = useState("");
  const [lnameError, setLnameError] = useState("");
  const [mailError, setMailError] = useState("");
  const [numberError, setNumberError] = useState("");
  const [nextpage, setnextpage] = useState(false);
  const personalInfo = { fname, lname, mail, number };

  function fistname(event) {
    setFName(event.target.value);
  }
  function lastname(event) {
    setLName(event.target.value);
  }
  function e_mail(event) {
    setmail(event.target.value);
  }
  function phone_number(event) {
    setNumber(event.target.value);
  }
  function validations() {
    let check = true;

    if (fname.trim().length < 2 || regex.test(fname)) {
      setNameError("Please Enter Valid Name");
      check = false;
    }
    if (lname.trim().length < 2 || regex.test(lname)) {
      setLnameError("Please Enter Valid Last Name");
      check = false;
    }
    if (
      !mail.includes("@") ||
      !mail.trim().length === 0 ||
      !mail.includes(".") ||
      !(
        mail.includes("com") ||
        mail.includes("org") ||
        mail.includes("ru") ||
        mail.includes("ge")
      )
    ) {
      setMailError("Please Enter Valid Mail");
      check = false;
    }
    if (!(number.length === 0)) {
      if (!(number.substring(0, 3) === "995")) {
        setNumberError("Plese Enter Valid Phone Number");
        check = false;
      }
    }
    if (number.toString().length === 0) {
      setNumber("NaN");
    }
    return check;
  }
  function submit(event) {
    event.preventDefault();
    if (validations() === true) {
      setnextpage(true);
    }
  }
  function handleSubmit(event) {
    event.preventDefault();
  }
  if (!nextpage) {
    return (
      <div className={styles.information}>
        <div className={styles.cont1}>
          <h1>Hey, Rocketeer, what are your coordinates?</h1>
          <div>
            <form className={styles["infoform"]} onSubmit={handleSubmit}>
              <input
                type={"text"}
                id="name"
                placeholder="Fist Name"
                className={styles["infoinput"]}
                value={fname}
                onChange={fistname}
              />
              <p>{nameError}</p>
              <input
                type={"text"}
                placeholder="Last Name"
                className={styles["infoinput"]}
                value={lname}
                onChange={lastname}
              />
              <p>{lnameError}</p>

              <input
                type={"email"}
                placeholder="E mail"
                className={styles["infoinput"]}
                value={mail}
                onChange={e_mail}
              />
              <p>{mailError}</p>

              <input
                type={"number"}
                placeholder="+995 5_ _ _ _"
                className={styles["infoinput"]}
                value={number}
                onChange={phone_number}
              />
              <p>{numberError}</p>
            </form>
            <div className={styles.pages}>
              <button className={styles.nextPreviusPages}>{"<"}</button>
              <div className={styles.eclipses}>
                <div className={styles.eclipseRed}></div>
                <div className={styles.eclipseLight}></div>
                <div className={styles.eclipseLight}></div>
                <div className={styles.eclipseLight}></div>
                <div className={styles.eclipseLight}></div>
              </div>

              <button className={styles.nextPreviusPages} onClick={submit}>
                {">"}
              </button>
            </div>
          </div>
        </div>

        <div className={styles.cont2}>
          <h1>Redberry Origins</h1>
          <p>
            You watch ???What? Where? When???? Yeah. Our founders used to play it.
            That???s where they got a question about a famous American author and
            screenwriter Ray Bradbury. Albeit, our CEO Gaga Darsalia forgot the
            exact name and he answered Ray Redberry. And at that moment, a name
            for a yet to be born company was inspired - Redberry ????
          </p>
        </div>
      </div>
    );
  } else {
    return <Skills personalInfo={personalInfo} setnextpage={setnextpage} />;
  }
}
export default PersonalInfo;
