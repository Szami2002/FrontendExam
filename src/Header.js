import './Header.css';
import { useContext, useRef, useState,  } from "react";
import { TodayListContext} from './contexts/ListContext';
import { TomorrowListContext } from './contexts/ListContext';



export default function Header() {
    const { todaylist, setTodaylist } = useContext(TodayListContext);
    const {tomorrowlist, setTomorrowlist}=useContext(TomorrowListContext);
    const [task, setTask] = useState(""); 
    const [day, setDay] = useState("");
    const taskRef = useRef("");
    
    

    const handleSubmit = () => {
        const taskValue = taskRef.current.value;
        
        if(day==="today"){
            setTodaylist((prevList) => [...prevList, taskValue]);
        }else if(day==="tomorrow"){
            setTomorrowlist((prevList) => [...prevList, taskValue]);
        }else{
            alert ("Please fill the input field!");
        }
        
          
    };
  

    



    return (


        <div className="Header br-1 b-1 mt-1 bgc row">
            <div className="title">
                <h1>Add new task</h1>
            </div>
            <div className="row pt-1 pb-1 mr-1 ml-1 ">
                <form className="row">
                    <div className='col-3' >
                        <input className=" w-100" type="text" name="task" placeholder="Describe task" autoComplete='off' ref={taskRef}
                            value={task}
                            onChange={(e) => setTask(e.target.value)}/>
                    </div>

                    <div className="col-6 text-center forms">
                        <div className="col-6">
                            <input type="radio" id="today" name="today" value="today"  checked={day === "today"}
                                onChange={() => setDay("today")}></input>
                            <label htmlFor="today">Today</label>
                        </div>
                        <div className="col-6">
                            <input type="radio" id="tomorrow" name="tomorrow" value="tomorrow"   checked={day === "tomorrow"}
                                onChange={() => setDay("tomorrow")}  ></input>
                            <label htmlFor="tomorrow">Tomorrow</label>
                        </div>


                    </div>
                    <div className="col-3">
                        <button className="w-100" type='button' onClick={handleSubmit}>Save</button>
                    </div>

                </form>
            </div>
        </div>
    )
}