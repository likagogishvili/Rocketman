import "./Aplication.css";

function AplicationForm() {
  return (
    <div className="app_output">
      <div className="left">
        <div className="info">
          <h2>Personal Information</h2>
          <div className="name_cont">
            <p>First Name</p>
            <p>Eren</p>
          </div>
          <div className="name_cont">
            <p>Last Name</p>
            <p>yager</p>
          </div>
          <div className="name_cont">
            <p>E Mail</p>
            <p>eren@wings-of-freedom.ml</p>
          </div>
          <div className="name_cont">
            <p>Phone</p>
            <p>+995 591 93 50 80</p>
          </div>
        </div>
        <div className="info">
          <h2>Covid Situation</h2>
          <div className="questions">
            <p>how would you prefer to work?</p>
            <div className="q">
              <input
                type="radio"
                id="office"
                name="n"
                value="office"
                className="covidInput"
              />
              <label for="office" className="covidlable">
                From Sairme Office
              </label>
            </div>

            <div className="q">
              <input
                type="radio"
                id="home"
                name="n"
                value="home"
                className="covidInput"
              />
              <label for="home" className="covidlable">
                From Home
              </label>
            </div>

            <div className="q">
              <input
                type="radio"
                id="hybrid"
                name="n"
                value="hybrid"
                className="covidInput"
              />
              <label for="hybrid" className="covidlable">
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
              />
              <label for="Yes" className="covidlable">
                Yes
              </label>
            </div>

            <div className="q">
              <input
                type="radio"
                id="No"
                name="n1"
                value="No"
                className="covidInput"
              />
              <label for="No" className="covidlable">
                No
              </label>
            </div>
          </div>
        </div>
        <div className="info">
          <div className="questions">
            <p>When?</p>
            <div className="q">
              <input
                type="date"
                id="date1"
                name="date1"
                className="date"
                min="2020-01-01"
                max="2022-12-01"
              />
            </div>
          </div>
        </div>
        <div className="info">
          <div className="questions">
            <p>Have you been vaccinated?</p>
            <div className="q">
              <input
                type="radio"
                id="Y"
                name="n3"
                value="Y"
                className="covidInput"
              />
              <label for="Y" className="covidlable">
                Yes
              </label>
            </div>

            <div className="q">
              <input
                type="radio"
                id="N"
                name="n3"
                value="N"
                className="covidInput"
              />
              <label for="N" className="covidlable">
                No
              </label>
            </div>
          </div>
        </div>

        <div className="info">
          <div className="questions">
            <p>When did you get your last covid vaccine?</p>
            <div className="q">
              <input
                type="date"
                id="date1"
                name="date1"
                className="date"
                min="2020-01-01"
                max="2022-12-01"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="right">
        <div className="info">
          <h2>Skillets</h2>
          <div className="name_cont">
            <p>php</p>
            <p>years of experience 4</p>
          </div>
          <div className="name_cont">
            <p>html</p>
            <p>yaars of experience 4</p>
          </div>
        </div>

        <div className="info">
          <div className="questions1">
            <p>What would you speak about at Devtalk?</p>
            <textarea
              className="textarea3"
              name="comment"
              form="usrform"
              placeholder="I would..."
            ></textarea>
          </div>
        </div>

        <div className="info">
          <div className="questions1">
            <p>What would you speak about at Devtalk?</p>
            <textarea
              className="textarea3"
              name="comment"
              form="usrform"
              placeholder="I would..."
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AplicationForm;
