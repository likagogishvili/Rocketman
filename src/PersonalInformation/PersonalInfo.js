import "./PersonalInfo.css";
function PersonalInfo() {
  return (
    <div className="information">
      <div className="cont1">
        <h1>Hey, Rocketeer, what are your coordinates?</h1>
        <div>
        <form>
            <input  type={'text'} placeholder = 'Fist Name'/>
            {/* <p>*console error</p> */}
            <input  type={'text'} placeholder = 'Last Name'/>
            <input  type={'text'} placeholder='E mail'/>
            <input  type={'number'} placeholder='+995 5_ _ _ _'/>
        </form>
        </div>
      </div>

      <div className="cont2">
        <h1>Redberry Origins</h1>
        <p>
          You watch “What? Where? When?” Yeah. Our founders used to play it.
          That’s where they got a question about a famous American author and
          screenwriter Ray Bradbury. Albeit, our CEO Gaga Darsalia forgot the
          exact name and he answered Ray Redberry. And at that moment, a name
          for a yet to be born company was inspired - Redberry 😇
        </p>
      </div>
      
    </div>
  );
}

export default PersonalInfo;
