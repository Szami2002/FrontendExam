import './Header.css';
import { useContext, useState } from "react";
import { ListContext, ListContextDefault } from './contexts/ListContext';



export default function Header() {
    const { todaylist, setTodaylist } = useContext(ListContext)
    const [checktoday, setCheckedToday] = useState(false)
    const [checktomorrow, setCheckedTomorrow] = useState(false)
    const ChangeToday=()=>{
        setCheckedToday(!checktoday)
    }
    const ChangeTomorrow=()=>{
        setCheckedTomorrow(!checktomorrow)
    }
    const ClickToday=()=>{
        setCheckedToday(false)
    }
    const ClickTomorrow=()=>{
        setCheckedTomorrow(false)
    }
    

    const handleSubmit = (event) => {
        event.preventDefault();
        const task = event.target.task.value;
        const tomorrow = event.target.tomorrow.checked
        const today = event.target.today.checked
        console.log(task)
        console.log(tomorrow)
        console.log(today)


    }





    return (


        <div className="Header br-1 b-1 mt-1 bgc row">
            <div className="title">
                <h1>Add new task</h1>
            </div>
            <div className="row pt-1 pb-1 mr-1 ml-1 ">
                <form className="row" onSubmit={handleSubmit}>
                    <div className='col-3' >
                        <input className=" w-100" type="text" name="task" placeholder="Describe task" autoComplete='off' />
                    </div>

                    <div className="col-6 text-center forms">
                        <div className="col-6">
                            <input type="radio" id="today" name="today" value="today" checked={checktoday} onClick={ClickToday} onChange={ChangeToday}></input>
                            <label htmlFor="today">Today</label>
                        </div>
                        <div className="col-6">
                            <input type="radio" id="tomorrow" name="tomorrow" value="tomorrow" checked={checktomorrow} onClick={ChangeTomorrow} onChange={ChangeTomorrow}  ></input>
                            <label htmlFor="tomorrow">Tomorrow</label>
                        </div>


                    </div>
                    <div className="col-3">
                        <button className="w-100" type="submit">Save</button>
                    </div>

                </form>
            </div>
        </div>
    )
}