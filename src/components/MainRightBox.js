
import "../components/mainCityBox.css"



import Links from "./Links";
import MainForcast from "./MainForcast";
function MainRightBox(props) {

   
    return <div>
        
       
            <h5 className="leftSideTitle">Another Location</h5>
            <hr/>
          

            <Links
            cityLink= {props.LinkCity}
         
            city1 = "Tel-Aviv"
            city2 = "Jerusalem"
            city3 = "London"
            city4 = "Amsterdam"
            changeCity={props.TestMe}
            />
           
           <br/>
        <MainForcast
        forcast={props.forcast}
        forcastIcon={props.forcastIcon}
        maxTemp={props.maxTemp}
        mintemp={props.mintemp}
        chanseOfRain={props.chanseOfRain}
        wind ={props.wind}
        humidity={props.humidity}
        cloud = {props.cloud}
        precip= {props.precip}
        uv={props.uv}
        sunrise = {props.sunrise}
        sunset={props.sunset}
        moonrise = {props.moonrise}
        moonset = {props.moonset}
        moon_phase = {props.moon_phase}
        moon_illumination={props.moon_illumination}
        warnings = {props.warnings}
        />

    </div>

    
}

export default MainRightBox
