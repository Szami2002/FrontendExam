import './Content.css';
import Changemenu from './components/changemenu';
import Today from './components/today';
import Tomorrow from './components/tomorrow';
export default function Content(){
    return(
    <div className="Content">
        <div className="Content">
            <Today/>
            <Changemenu/>
            <Tomorrow/>
        </div>
    </div>
    )
}