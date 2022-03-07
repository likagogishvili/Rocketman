import './Thanks.css'
import { useHistory} from "react-router-dom";

function Thanks(){
    const history = useHistory();
    function goHome(){
        history.push('/')

    }
    const myTimeout = setTimeout(goHome, 3000);

    return(
        <div className='thx'>
            <h1>Thanks for Joining 😊</h1>
            </div>

    )   
}
export default Thanks;


