import './Content.css';
import 'boxicons';
import { useContext, useRef } from "react";
import { TodayListContext } from './contexts/ListContext';
import { TomorrowListContext } from './contexts/ListContext';
export default function Content() {

    const { todaylist, setTodaylist } = useContext(TodayListContext);
    const { tomorrowlist, setTomorrowlist } = useContext(TomorrowListContext);
    const list1 = useContext(TodayListContext);
    const data1 = list1.todaylist

    const list2 = useContext(TomorrowListContext);
    const data2 = list2.tomorrowlist

    const todayvalue = useRef("");
    const tomorrowvalue = useRef("");

    const putToday = () => {

    }

    const putTomorrow = () => {

    }

    const remove = () => {




    }
    const handleChange = (e) => {
        // to find out if it's checked or not; returns true or false
        const checked = e.target.checked;

        // to get the checked value
        const checkedValue = e.target.value;


        //then you can do with the value all you want to do with it.
    };


    return (
        <div className="Content mt-2">
            <div className="row">
                <div className="Today row br-1 b-1 bgc col-5">
                    <div className="title">
                        <h1>Tasks for today</h1>
                    </div>
                    <div className="col-12">
                        <ul className="p-2">
                            {data1.map((task, index) => (
                                <li className="mb-1" key={index}>
                                    <input type="checkbox" id={index} name={task} value={task} ref={todayvalue} onChange={handleChange} />
                                    <label className="pl-1" htmlFor={index}>{task}</label><br />
                                </li>
                            ))}
                        </ul>

                    </div>

                </div>
                <div className="Changemenu row col-2 text-center">
                    <div className="col-12  p-1">
                        <div className='boxicon' >
                            <box-icon type='solid' name='right-arrow-alt' color='grey' size='lg' className="col-12"></box-icon>
                        </div>

                        <label className="col-12">Tomorrow</label>
                    </div>
                    <div className="col-12  p-1">
                        <div className='boxicon'>
                            <box-icon type='solid' name='left-arrow-alt' color='grey' size='lg' className="col-12"></box-icon>
                        </div>

                        <label className="col-12">Today</label>
                    </div>
                    <div className="col-12  p-1">
                        <div className='boxicon' onClick={remove}>
                            <box-icon type='solid' name='trash' color='grey' size='lg' className="col-12"></box-icon>
                        </div>

                        <label className="col-12">Delete</label>
                    </div>
                </div>
                <div className="Tomorrow row br-1 b-1 bgc col-5">
                    <div className="title">
                        <h1>Tasks for tomorrow</h1>
                    </div>
                    <div className="col-12">
                        <ul className="p-2">
                            {data2.map((task, index) => (
                                <li className="mb-1" key={index}>
                                    <input type="checkbox" id={index} name={task} value={task} ref={tomorrowvalue} />
                                    <label className="pl-1" htmlFor={index}>{task}</label><br />
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    )
}