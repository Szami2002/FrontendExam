import './Header.css';
export default function Header() {
    return (
        <div className="Header br-1 b-1">
            <div className="row title">
                <h1>Add new task</h1>
            </div>
            <div className="row pt-1 pb-1 mr-1 ml-1 ">
                <form className="row">
                    <div className=" col-3">
                        <input className=" w-100" type="text" placeholder="Describe task" />
                    </div>

                    <div className="col-6 text-center forms">
                        <div className="col-6">
                            <input type="radio" id="today" name="today" value="today" checked="unchecked"></input>
                            <label for="today">Today</label>
                        </div>
                        <div className="col-6">
                            <input type="radio" id="tomorrow" name="tomorrow" value="tomorrow" checked="unchecked"></input>
                            <label for="tomorrow">Tomorrow</label>
                        </div>


                    </div>
                    <div className="col-3">
                        <button className="w-100">Save</button>
                    </div>

                </form>
            </div>
        </div>
    )
}