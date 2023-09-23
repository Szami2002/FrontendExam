import "./changemenu.css"
import "boxicons"
export default function Changemenu(){
    return(
        <div className="Changemenu row col-2 text-center">
            <div className="col-12 mb-1">
            <box-icon type='solid'name='right-arrow-alt'color='grey' size='lg' className="col-12"></box-icon>
            <label className="col-12">Tomorrow</label>
            </div>
            <div className="col-12 mb-1">
            <box-icon type='solid'name='left-arrow-alt'color='grey' size='lg'className="col-12"></box-icon>
            <label className="col-12">Today</label>
            </div>
            <div className="col-12 mb-1">
            <box-icon type='solid' name='trash'color='grey' size='lg'className="col-12"></box-icon>
            <label className="col-12">Delete</label>
            </div>
        </div>
    )
}