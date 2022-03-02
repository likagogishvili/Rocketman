import "./Skills.css";
function Skills() {
  return (
    <div className="information">
      <div className="cont1">
        <h1>Tell us about your skills</h1>
        <div className="main">
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

          <div className="output">
            <p className="p1">PHP</p>
            <p className="p2">Years of Experience: 3</p>
            <button>-</button>
          </div>

          <div className="pages">
            <button className="next-previus-pages">{">"}</button>
            <div className="eclipses">
              <div className="eclipse-red"></div>
              <div className="eclipse-red"></div>
              <div className="eclipse-light"></div>
              <div className="eclipse-light"></div>
              <div className="eclipse-light"></div>
            </div>
            <button className="next-previus-pages">{"<"}</button>
          </div>
        </div>
      </div>

      <div className="cont2">
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
