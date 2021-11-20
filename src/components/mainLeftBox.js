
import getMyDate from "../functions/myDate";
import "./button.css"

import {Link} from "react-router-dom";
  
function MainLeftBox(props) {
    const localtime_epoch = props.localtime_epoch;
    return (
       
            <div>
               
                <div className="mainCity-country">{props.country} </div>
           <Link to="/ron"> <button className="button-17" >next Day's Forcast in {props.cityName}</button></Link>

               
            
           
<div className="mainData ">
    <div className="line">
        <div className="mainTemp">{props.temp_c}°</div>
        <div className="Namemain-cityName">
            {props.cityName}
            <br />
            <div className="main-data">
                {getMyDate(localtime_epoch).d + "-"}
                {getMyDate(localtime_epoch).day + ","}
                {"" + getMyDate(localtime_epoch).dayOfMonth + " "}
                {getMyDate(localtime_epoch).myMonth + " "}
            </div>
        </div>
        <img className="icon" src={props.icon} alt="icon"></img>
        <h5>{props.text}</h5>
       
    </div>
    
    <div>


    </div>

</div>
            </div>
            

       

    )
}

export default MainLeftBox

