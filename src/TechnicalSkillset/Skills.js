import styles from "./Skills.module.css";
import { Link } from "react-router-dom";

function Skills() {
  return (
    <div className={styles.information}>
      <div className={styles.cont1}>
        <h1>Tell us about your skills</h1>
        <div className={styles.main}>
          <form>
            <select name="Skills" id="Skills"> 
            <option value="" disabled selected className="op">Skills</option>
            <option value="javascript">JavaScript</option>
            <option value="php">PHP</option>
            </select>
            {/* <p>*console error</p> */}
            <input type={"text"} placeholder="Experience Duration in Years" />
            {/* <p>*console error</p> */}
            <button>Add Programming Language</button>
          </form>

          <div className={styles.output}>
            <p className={styles.p1}>PHP</p>
            <p className={styles.p2}>Years of Experience: 3</p>
            <button>-</button>
          </div>

          <div className={styles.pages}>
            <Link to='./PersonalInfo' style={{ textDecoration: 'none' }}>
            <button className= {styles.nextPreviusPages}>{">"}</button>
            </Link>
            <div className={styles.eclipses}>
              <div className={styles.eclipseRed}></div>
              <div className={styles.eclipseRed}></div>
              <div className={styles.eclipseLight}></div>
              <div className={styles.eclipseLight}></div>
              <div className={styles.eclipseLight}></div>
            </div>
            <button className={styles.nextPreviusPages}>{"<"}</button>
          </div>
        </div>
      </div>

      <div className={styles.cont2}>
        <h1>A bit about our battles</h1>
        <p>
          As we said, Redberry has been on the field for quite some time now,
          and we have touched and embraced a variety of programming languages,
          technologies, philosophies, and frameworks. We are battle-tested in
          PHP Laravel Stack with Vue.js, refined in React, and allies with
          Serverside technologies like Docker and Kubernetes, and now we have
          set foot in the web3 industry.
        </p>
      </div>
    </div>
  );
}

export default Skills;
