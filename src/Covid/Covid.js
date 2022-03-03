import styles from "./Covid.module.css";
function Covid() {
  return (
    <div className={styles.covidinfo}>
      <div className={styles.cont1}>
        <h1>Covid Stuff</h1>
        <div className={styles.main1}>
          <form className="covidform">
            <div className={styles.questions}>
              <p>how would you prefer to work?</p>
              <div className={styles.q}>
                <input type="radio" id="office" name="n" value="office" className={styles["covidInput"]} />
                <label for="office" className={styles["covidlable"]}>From Sairme Office</label>
              </div>

              <div className={styles.q}>
                <input type="radio" id="home" name="n" value="home" className={styles["covidInput"]}/>
                <label for="home" className={styles["covidlable"]}>From Home</label>
              </div>

              <div className={styles.q}>
                <input type="radio" id="hybrid" name="n" value="hybrid" className={styles["covidInput"]}/>
                <label for="hybrid" className={styles["covidlable"]}>Hybrid</label>
              </div>
            </div>
            

            <div className={styles.questions}>
              <p>Did you contact covid 19? :(</p>
              <div className={styles.q}>
                <input type="radio" id="Yes" name="n1" value="Yes"  className={styles["covidInput"]}/>
                <label for="Yes" className={styles["covidlable"]}>Yes</label>
              </div>

              <div className={styles.q}>
                <input type="radio" id="No" name="n1" value="No" className={styles["covidInput"]} />
                <label for="No" className={styles["covidlable"]}>No</label>
              </div>
            </div>

            <div className={styles.questions}>
              <p>When?</p>
              <div className={styles.q}>
              <input type="date" id="date1" name="date1" className={styles['date']}

              min="2020-01-01" max="2022-12-01"/>
              </div>
            </div>

            <div className={styles.questions}>
              <p>Have you been vaccinated?</p>
              <div className={styles.q}>
                <input type="radio" id="Y" name="n3" value="Y" className={styles["covidInput"]}/>
                <label for="Y" className={styles["covidlable"]}>Yes</label>
              </div>

              <div className={styles.q}>
                <input type="radio" id="N" name="n3" value="N" className={styles["covidInput"]} />
                <label for="N" className={styles["covidlable"]}>No</label>
              </div>
            </div>


            <div className={styles.questions}>
              <p>When did you get your last covid vaccine?</p>
              <div className={styles.q}>
              <input type="date" id="date1" name="date1" className={styles['date']}
              min="2020-01-01" max="2022-12-01"/>
              </div>
            </div>
          </form>
        </div>
        <div className={styles["covidpages"]}>
            <button className={styles["nextPreviusPages"]}>{">"}</button>
            <div className={styles['covideclipses']}>
              <div className={styles['covideclipseRed']}></div>
              <div className={styles['covideclipseRed']}></div>
              <div className={styles['covideclipseRed']}></div>
              <div className={styles['covideclipseLight']}></div>
              <div className={styles['covideclipseLight']}></div>
            </div>
            <button className={styles["nextPreviusPages"]}>{"<"}</button>
          </div>
      </div>

      <div className={styles['cont2']}>
        <h1>Redberry Covid Policies</h1>
        <p>
          As this infamous pandemic took over the world, we adjusted our working
          practices so that our employees can be as safe and comfortable as
          possible. We have a hybrid work environment, so you can either work
          from home or visit our lovely office on Sairme Street. If it was up to
          us, we would love you to see us in the office because we think
          face-to-face communications {">"} Zoom meetings. Both on the fun and
          productivity scales.
        </p>
      </div>
    </div>
  );
}

export default Covid;
