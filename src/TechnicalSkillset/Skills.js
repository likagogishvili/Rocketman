import { React, useState } from "react";
import styles from "./Skills.module.css";
import SkillsData from "./SkillsData";
import OutputSkills from "./OutputSkills";
import Covid from "../Covid/Covid";

function Skills(props) {
  const [language, setLanguage] = useState("");
  const [experience, setExperience] = useState("");
  const [ids, setIds] = useState("");
  const [skillError, setSkillError] = useState("");
  const [experienceError, setexperienceError] = useState("");
  const [nextpage, setnextpage] = useState(false);
  const [selectedSkills, setSelectedSkills] = useState([])

  function addSkill() {
    const skill = {
      language,
      experience,
      ids
    }
    if (selectedSkills.find(x => x.language === language)) {
      alert('This skill is already selected')
    }
    else {
      setSelectedSkills([...selectedSkills, skill])
    }
  }
  function onDeleteElement(index) {
    setSelectedSkills([...selectedSkills.filter((x, i) => i !== index)])
  }

  function SkillsValidations() {
    let check = true;

    if (language.trim().length === 0) {
      setSkillError("Please Enter skill");
      check = false;
    }

    if (experience.toString().length === 0) {
      setexperienceError("Please Enter Experience");
      check = false;
    }

    return check;
  }

  function languageAndId(value){
    setIds(value.id)    
    setLanguage(value.value)
  }

  function SubmitSkillPage() {
    if (SkillsValidations() === true) {
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
          <h1>Tell us about your skills</h1>
          <div className={styles.main}>
            <form onSubmit={handleSubmit}>
              <SkillsData onChange={languageAndId} />
              <p>{skillError}</p>
              <input
                type={"number"}
                placeholder="Experience Duration in Years"
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
              />
              <p>{experienceError}</p>

              <button onClick={addSkill}>Add Programming Language</button>
            </form>
            <OutputSkills
              selectedSkills={selectedSkills}
              onDelete={onDeleteElement}
            />

            <div className={styles.pages}>
                <button className={styles.nextPreviusPages}>{"<"}</button>
              <div className={styles.eclipses}>
                <div className={styles.eclipseRed}></div>
                <div className={styles.eclipseRed}></div>
                <div className={styles.eclipseLight}></div>
                <div className={styles.eclipseLight}></div>
                <div className={styles.eclipseLight}></div>
              </div>
              <button
                className={styles.nextPreviusPages}
                onClick={SubmitSkillPage}
              >
                {">"}
              </button>
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
  } else {
    return (
      <Covid
        personalInfo={props.personalInfo}
        skills={selectedSkills}
      />
    );
  }
}

export default Skills;
