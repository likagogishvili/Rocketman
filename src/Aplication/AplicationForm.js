import "./Aplication.css";
function AplicationForm(props) {
  let checked = true;
  let checkedf= false;
  let checked1= true;
  let checkedf1 =false;
  const skillvalues = [
    "HTML",
    "CSS",
    "PHP",
    "Laravel",
    "React.JS",
    "Vue.JS",
    "Svelte",
    "Angular",
  ];
  let home = false;
  let sairme = false;
  let hybrid = false;
  let devtalk = false;

  if (props.userData.had_covid === false) {
    checked=false;
    checkedf = true;
  }
  if (props.userData.vaccinated === false) {
    checked1=false;
    checkedf1=true;
  }

  if (props.userData.work_preference === "from_home") {
    home = true;
  }
  if (props.userData.work_preference === "from_office") {
    sairme = true;
  }
  if (props.userData.work_preference === "hybrid") {
    hybrid = true;
  }
  if (props.userData.will_organize_devtalk === true) {
    devtalk = true;
  }

  return (
    <div className="app_output">
      <div className="left">
        <div className="info">
          <h2>Personal Information</h2>
          <div className="name_cont">
            <p>First Name</p>
            <p>{props.userData.first_name}</p>
          </div>
          <div className="name_cont">
            <p>Last Name</p>
            <p>{props.userData.last_name}</p>
          </div>
          <div className="name_cont">
            <p>E Mail</p>
            <p>{props.userData.email}</p>
          </div>
          <div className="name_cont">
            <p>Phone</p>
            <p>{props.userData.phone}</p>
          </div>
        </div>
        <div className="info">
          <h2>Covid Situation</h2>
          <div className="questions">
            <p>how would you prefer to work?</p>
            <div className="q">
              <input
                disabled
                type="radio"
                id="office"
                name="n"
                value="office"
                className="covidInput"
                defaultChecked={sairme}
              />
              <label htmlFor="office" className="covidlable">
                From Sairme Office
              </label>
            </div>

            <div className="q">
              <input
                disabled
                type="radio"
                id="home"
                name="n"
                value="home"
                className="covidInput"
                defaultChecked={home}
              />
              <label htmlFor="home" className="covidlable">
                From Home
              </label>
            </div>
            <div className="q">
              <input
                disabled
                type="radio"
                id="hybrid"
                name="n"
                value="hybrid"
                className="covidInput"
                defaultChecked={hybrid}
              />
              <label htmlFor="hybrid" className="covidlable">
                Hybrid
              </label>
            </div>
          </div>
        </div>

        <div className="info">
          <div className="questions">
            <p>Did you contact covid 19? :(</p>
            <div className="q">
              <input
                type="radio"
                id="Yes"
                name="n1"
                value="Yes"
                className="covidInput"
                defaultChecked={checked}
                readOnly
                disabled
              />
              <label htmlFor="Yes" className="covidlable">
                Yes
              </label>
            </div>

            <div className="q">
              <input
                disabled
                type="radio"
                id="No"
                name="n1"
                value="No"
                className="covidInput"
                defaultChecked={checkedf}
                readOnly
              />
              <label htmlFor="No" className="covidlable">
                No
              </label>
            </div>
          </div>
        </div>
        { checked && (
          <div className="info">
            <div className="questions">
              <p>When?</p>
              <div className="q">
                <input
                  disabled
                  type="date"
                  id="date1"
                  name="date1"
                  className="date"
                  min="2020-01-01"
                  max="2022-12-01"
                  value={props.userData.had_covid_at}
                />
              </div>
            </div>
          </div>
        )}

        <div className="info">
          <div className="questions">
            <p>Have you been vaccinated?</p>
            <div className="q">
              <input
                disabled
                type="radio"
                id="Y"
                name="n3"
                value="Y"
                className="covidInput"
                defaultChecked={checked1}
                readOnly
              />
              <label htmlFor="Y" className="covidlable">
                Yes
              </label>
            </div>

            <div className="q">
              <input
                disabled
                type="radio"
                id="N"
                name="n3"
                value="N"
                className="covidInput"
                defaultChecked={checkedf1}
                readOnly
              />
              <label htmlFor="N" className="covidlable">
                No
              </label>
            </div>
          </div>
        </div>

        {checked1 && (
          <div className="info">
            <div className="questions">
              <p>When did you get your last covid vaccine?</p>
              <div className="q">
                <input
                  disabled
                  type="date"
                  id="date1"
                  name="date1"
                  className="date"
                  min="2020-01-01"
                  max="2022-12-01"
                  value={props.userData.vaccinated_at}
                />
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="right">
        <div className="info">
          <h2>Skillets</h2>
          <div className="name_cont">
            <p>id: {skillvalues[props.userData.skills[0].id]}</p>
            <p>title: {props.userData.skills[0].experience}</p>
          </div>
        </div>

        {devtalk && (
          <div className="info">
            <div className="questions1">
              <p>What would you speak about at Devtalk?</p>
              <textarea
                className="textarea3"
                name="comment"
                form="usrform"
                value={props.userData.devtalk_topic}
              ></textarea>
            </div>
          </div>
        )}
        <div className="info">
          <div className="questions1">
            <p></p>
            <textarea
              className="textarea3"
              name="comment"
              form="usrform"
              placeholder="I would..."
              value={props.userData.something_special}
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AplicationForm;
