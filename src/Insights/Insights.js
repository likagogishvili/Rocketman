import styles from "./Insights.module.css";
function Insights() {
  return (
    <div className={styles.information1}>
      <div className={styles.cont1}>

        <h1>What about you?</h1>
        <div className={styles.main4}>
          <form className={styles.insightsform}>

            <div className={styles.questions1}>
              <p>Would you attend Devtalks and maybe also organize your own?</p>
              <div className={styles.q1}>
                <input type="radio" id="Y" name="n3" value="Y"  className={styles['insightsinput']}/>
                <label for="Y">Yes</label>
              </div>

              <div className={styles.q1}>
                <input type="radio" id="N" name="n3" value="N" className={styles['insightsinput']}/>
                <label for="N">No</label>
              </div>
            </div>

            <div className={styles.questions1}>
              <p>What would you speak about at Devtalk?</p>
              <textarea
                name="comment"
                form="usrform"
                placeholder="I would..."
              ></textarea>
            </div>
            <br></br>
            <div className={styles.questions1}>
              <p>What would you speak about at Devtalk?</p>
              <textarea
                name="comment"
                form="usrform"
                placeholder="I would..."
              ></textarea>
            </div>
          </form>
          </div>

          <div className={styles.pagesinsights}>
            <button className={styles.nextPreviusPagesinsights}>{">"}</button>
            <div className={styles.eclipsesinsights}>
              <div className={styles.eclipsesinsightsRed}></div>
              <div className={styles.eclipsesinsightsRed}></div>
              <div className={styles.eclipsesinsightsRed}></div>
              <div className={styles.eclipsesinsightsRed}></div>
              <div className={styles.eclipsesinsightsLight}></div>
            </div>
            <button className={styles.nextPreviusPagesinsights}>{"<"}</button>
          </div>
      </div>

      <div className={styles.cont2ins}>
        <h1>Redberrian Insights</h1>
        <p>
          We were soo much fun before the pandemic started! Parties almost every
          weekend and lavish employee birthday celebrations! Unfortunately,
          covid ruined that fun like it did almost everything else in the world.
          But we try our best to zhuzh it up a bit. For example, we host
          biweekly Devtalks where our senior and lead developers talk about
          topics they are passionate about. Previous topics have included Web3,
          NFT, Laravel 9, Kubernetes, etc. We hold these talks in the office but
          you can join our Zoom broadcast as well. Feel free to join either as
          an attendee or a speaker!
        </p>
      </div>
    </div>
  );
}

export default Insights;
