import './Aplication.css'
import AplicationForm from './AplicationForm';
import AplicationList from './AplicationList';
function Aplication(){
    return(
    <div>
    <div className="content">
        <h1 className='aplication_h1'>Submitted Applications</h1>
        <AplicationList/>
        <AplicationForm/>
    </div>
    </div>
    )
}
export default Aplication;