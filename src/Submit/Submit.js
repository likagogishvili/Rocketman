import "./Submit.css";
import { React, useState } from "react";
import { Link } from "react-router-dom";
import Thanks from '../Thanks/Thanks'
function Submit(props) {
  const [nextpage, setnextpage] = useState(false);


  const userInfo = [];
  userInfo.push(props.personalInfo, props.skills, props.covid, props.insights);
  console.log(userInfo);
 
  function finalSubmit(event) {
    event.preventDefault(); 
    // fetch("http://localhost:3000/userInfo", {
    //   method: "Post",
    //   headers: {"Content-Type": "application/json"},
    //   body: JSON.stringify(userInfo)
    // }).then(()=>{
    //     console.log('data added')
    // })
    
    setnextpage(true)
  }

  if (!nextpage) {
    return (
      <div className="box">
        <div className="submit">
          <button onClick={finalSubmit}>Submit</button>
          <Link to={"./Insights"} style={{ textDecoration: "none" }}>
            <p>Go Back</p>
          </Link>
        </div>
      </div>
    );
  }else{
      return(
        <Thanks/>
      )
  }
}
export default Submit;
