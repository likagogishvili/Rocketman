import { useState } from "react";
import styles from "./Insights.module.css";
import { useHistory, Link } from "react-router-dom";

function Insights() {
    const history= useHistory()
    const [devTalks, setDevTalks]= useState('')
    const [aboutYou,SetAboutYou] = useState("")
    const [speech,setSpeech] = useState("")
    const [devTalkError, setDevTalkError] = useState("")
    const [aboutYouError, setAboutYouError] = useState("")
    const [speeckError, setSpeechError] = useState("")


  function talkChange(event){
    setDevTalks(event.target.value);
  }
  function aboutChange(event){
    SetAboutYou(event.target.value);
  }
  function speechChange(event){
      setSpeech(event.target.value);
  }

  function insightsValidations(){
    let check = true;
    if (devTalks.trim().length === 0) {
      setDevTalkError("Please Choose One Option");
      check = false;
    }
    if (aboutYou.trim().length === 0) {
      setAboutYouError("Please Enter The Text");
      check = false;
    }

    if (speech.trim().length === 0) {
      setSpeechError("Please Enter The Text");
      check = false;
    }
    return check;
}
  console.log(devTalks, aboutYou, speech)
  function insightsSubmit(){
    if (insightsValidations() === true) {
      history.push("./Submit");
    }
  }


  return (
    <div className={styles.information1}>
      <div className={styles.cont1}>

        <h1>What about you?</h1>
        <div className={styles.main4}>
          <form className={styles.insightsform}>

            <div className={styles.questions1}>
              <p>Would you attend Devtalks and maybe also organize your own?</p>
              <div className={styles.q1}>
                <input type="radio" id="Y" name="n3" value="Y"  className={styles['insightsinput']} onChange={talkChange}/>
                <label for="Y">Yes</label>
              </div>

              <div className={styles.q1}>
                <input type="radio" id="N" name="n3" value="N" className={styles['insightsinput']} onChange={talkChange}/>
                <label for="N">No</label>
              </div>
            </div>
            <p>{devTalkError}</p>

            <div className={styles.questions1}>
              <p>What would you speak about at Devtalk?</p>
              <textarea
                className={styles.textarea1}
                name="comment"
                form="usrform"
                placeholder="I would..."
                onChange={aboutChange}
              ></textarea>
            </div>
            <p>{aboutYouError}</p>

            <div className={styles.questions1}>
              <p>What would you speak about at Devtalk?</p>
              <textarea
                className={styles.textarea1}
                name="comment"
                form="usrform"
                placeholder="I would..."
                onChange={speechChange}
              ></textarea>
            </div>
            <p>{speeckError}</p>

          </form>
          </div>

          <div className={styles.pagesinsights}>
          <Link to={"./Covid"} style={{ textDecoration: "none" }}>
            <button className={styles.nextPreviusPagesinsights}>{">"}</button>
            </Link>
            <div className={styles.eclipsesinsights}>
              <div className={styles.eclipsesinsightsRed}></div>
              <div className={styles.eclipsesinsightsRed}></div>
              <div className={styles.eclipsesinsightsRed}></div>
              <div className={styles.eclipsesinsightsRed}></div>
              <div className={styles.eclipsesinsightsLight}></div>
            </div>
            <button className={styles.nextPreviusPagesinsights} onClick={insightsSubmit}>{"<"}</button>
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
