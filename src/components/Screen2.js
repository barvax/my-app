import { Link} from "react-router-dom";
import Table from "./Table";
import NextDayForcast from "./NextDayForcast";


function Screen2(){
    return<div>
        im screen2
        <Link to="/"> <button  >click me</button></Link>
        <NextDayForcast
        day="today"
        icon="sd"
        minTemp="10°c"
        maxTemp="50°c"
        />
          <NextDayForcast
        day="today"
        icon="sd"
        minTemp="10°c"
        maxTemp="50°c"
        />
          <NextDayForcast
        day="today"
        icon="sd"
        minTemp="10°c"
        maxTemp="50°c"
        />
          <NextDayForcast
        day="today"
        icon="sd"
        minTemp="10°c"
        maxTemp="50°c"
        />

        </div>

   
    
    
   
}
export default Screen2