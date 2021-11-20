import MainRightBox from "./MainRightBox";
import "../components/mainCityBox.css";
import Screen1 from "./Screen1";
import Screen2 from "./Screen2";

import {
    BrowserRouter as Router,
    Switch,
    Route,
   
  } from "react-router-dom";
import MainLeftBox from "./mainLeftBox";



function Home(props) {
  
  return (
    
      <Router>
        
 <div>
<div >   
    
    </div>
       
      <div className="mainBoxRoot">
        <div className="parent">


        <div className="left-Screen">
<Switch>
  
            <Route path={["/","/efrat"]} exact render={() => <MainLeftBox 
            country= {props.country} 
          localtime_epoch={props.localtime_epoch}
          cityName={props.cityName}
            temp_c={props.temp_c}
            icon={props.icon}
            text={props.text}

            
            />} />    
         
           <Route path="/ron" render={() => <Screen1
          forcast0={props.forcast0}
          forcast1={props.forcast1}
          forcast2={props.forcast2}
          forcast3={props.forcast3}
          forcast4={props.forcast4}
          forcast5={props.forcast5}
          forcast6={props.forcast6}
          forcast7={props.forcast7}
          forcast8={props.forcast8}
          forcast9={props.forcast9}
          forcast10={props.forcast10}
          forcast11={props.forcast11}
          forcast12={props.forcast12}
          forcast13={props.forcast13}
          forcast14={props.forcast14}
          forcast15={props.forcast15}
          localtime_epoch = {props.localtime_epoch}
          cityName={props.cityName}
          icon={props.icon}
          temp_c={props.temp_c}
          country= {props.country} 
          localtime_epoch={props.localtime_epoch}
           
           />}/>
       </Switch>
        </div>
        

          <div className="right-Screen">
              <Switch>
          <Route path="/" exact render={() => <MainRightBox 
            
             
              LinkCity={props.LinkCity}
             
              TestMe={props.TestMe}
              forcast={props.forcast}
              forcastIcon={props.forcastIcon}
              maxTemp={props.maxTemp}
              mintemp={props.mintemp}
              chanseOfRain={props.chanseOfRain}
              wind={props.wind}
              humidity={props.humidity}
              cloud={props.cloud}
              precip={props.precip}
              uv={props.uv}
              sunrise={props.sunrise}
              sunset={props.sunset}
              moonrise={props.moonrise}
              moonset={props.moonset}
              moon_phase={props.moon_phase}
              moon_illumination={props.moon_illumination}
              warnings={props.warnings}
                />}
            />
<Route path="/ron" component={Screen2}/>
</Switch>
          </div>
        </div>
      </div>
    </div>

      </Router>
   
  );
}

export default Home;