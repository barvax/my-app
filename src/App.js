import './App.css';
import axios from "axios";
import getMyDate from "./functions/myDate";
import Home from './components/Home'
import { useState, useEffect } from "react";

function App() {
 
  const [cityLink, setCityLink] = useState("tel aviv");
  //const [error, setEroor] = useState("");
  const [gai, setGai] = useState({});
 
  
  function LinkCity(id) {
    setCityLink(id);
    console.log("link city" + cityLink)
  
  }
      
  function TestMe(index) {
    setCityLink(index);
    console.log("link city" + cityLink)
  }

  const Show = () => {

       
    getMyDate();
  

     axios.get("https://api.weatherapi.com/v1/forecast.json?key=0a999350705440169d581411210111&q=" +
     cityLink +
     "&days=3&aqi=yes&alerts=yes")
       .then((response) => {
         const tasks = response.data;
         console.log(tasks)              
              
        var mosh =  {
           wind: tasks.current.wind_kph,
           humidity: tasks.current.humidity,
           cloud: tasks.current.cloud,
           uv: tasks.current.uv,
           icon: tasks.current.condition.icon,
           country: tasks.location.country,
           precip: tasks.current.precip_mm,
           maxTemp: tasks.forecast.forecastday[0].day.maxtemp_c,
           mintemp: tasks.forecast.forecastday[0].day.mintemp_c,
           chanseOfRain: tasks.forecast.forecastday[0].day.daily_chance_of_rain,
           forcast: tasks.forecast.forecastday[0].day.condition.text,
           sunrise: tasks.forecast.forecastday[0].astro.sunrise,
           sunset: tasks.forecast.forecastday[0].astro.sunset,
           moonrise: tasks.forecast.forecastday[0].astro.moonrise,
           moonset: tasks.forecast.forecastday[0].astro.moonset,
           moon_phase: tasks.forecast.forecastday[0].astro.moon_phase,
           moon_illumination:
             tasks.forecast.forecastday[0].astro.moon_illumination,
           forcastIcon: tasks.forecast.forecastday[0].day.condition.icon,
           temp_c:tasks.current.temp_c,
           cityName : tasks["location"]["name"],
           localtime_epoch:tasks.location.localtime_epoch,
           text : tasks.current.condition.text,
           nextForcast0: {
             time: tasks.forecast.forecastday[0].hour[0].time_epoch,
             temp:tasks.forecast.forecastday[0].hour[0].temp_c,
             text:tasks.forecast.forecastday[0].hour[0].condition.text,
             icon:tasks.forecast.forecastday[0].hour[0].condition.icon
           },
           nextForcast1:
           {
            time: tasks.forecast.forecastday[0].hour[3].time_epoch,
            temp:tasks.forecast.forecastday[0].hour[3].temp_c,
            text:tasks.forecast.forecastday[0].hour[3].condition.text,
            icon:tasks.forecast.forecastday[0].hour[3].condition.icon
            
           },
           nextForcast2:
           {
            time: tasks.forecast.forecastday[0].hour[6].time_epoch,
            temp:tasks.forecast.forecastday[0].hour[6].temp_c,
            text:tasks.forecast.forecastday[0].hour[6].condition.text,
            icon:tasks.forecast.forecastday[0].hour[6].condition.icon
           },
           nextForcast3:
           {
            time: tasks.forecast.forecastday[0].hour[9].time_epoch,
            temp:tasks.forecast.forecastday[0].hour[9].temp_c,
            text:tasks.forecast.forecastday[0].hour[9].condition.text,
            icon:tasks.forecast.forecastday[0].hour[9].condition.icon
           },
           nextForcast4:
           {
            time: tasks.forecast.forecastday[0].hour[12].time_epoch,
            temp:tasks.forecast.forecastday[0].hour[12].temp_c,
            text:tasks.forecast.forecastday[0].hour[12].condition.text,
            icon:tasks.forecast.forecastday[0].hour[12].condition.icon
           },
           nextForcast5:
           {
            time: tasks.forecast.forecastday[0].hour[15].time_epoch,
            temp:tasks.forecast.forecastday[0].hour[15].temp_c,
            text:tasks.forecast.forecastday[0].hour[15].condition.text,
            icon:tasks.forecast.forecastday[0].hour[15].condition.icon
           },
           nextForcast6:
           {
            time: tasks.forecast.forecastday[0].hour[18].time_epoch,
            temp:tasks.forecast.forecastday[0].hour[18].temp_c,
            text:tasks.forecast.forecastday[0].hour[18].condition.text,
            icon:tasks.forecast.forecastday[0].hour[18].condition.icon
           },
           nextForcast7:
           {
            time: tasks.forecast.forecastday[0].hour[21].time_epoch,
            temp:tasks.forecast.forecastday[0].hour[21].temp_c,
            text:tasks.forecast.forecastday[0].hour[21].condition.text,
            icon:tasks.forecast.forecastday[0].hour[21].condition.icon
           },
           nextForcast8:
           {
            time: tasks.forecast.forecastday[1].hour[0].time_epoch,
            temp:tasks.forecast.forecastday[1].hour[0].temp_c,
            text:tasks.forecast.forecastday[1].hour[0].condition.text,
            icon:tasks.forecast.forecastday[1].hour[0].condition.icon
           },
           nextForcast9:
           {
            time: tasks.forecast.forecastday[1].hour[3].time_epoch,
            temp:tasks.forecast.forecastday[1].hour[3].temp_c,
            text:tasks.forecast.forecastday[1].hour[3].condition.text,
            icon:tasks.forecast.forecastday[1].hour[3].condition.icon
           },
           nextForcast10:
           {
            time: tasks.forecast.forecastday[1].hour[6].time_epoch,
            temp:tasks.forecast.forecastday[1].hour[6].temp_c,
            text:tasks.forecast.forecastday[1].hour[6].condition.text,
            icon:tasks.forecast.forecastday[1].hour[6].condition.icon
           },
           nextForcast11:
           {
            time: tasks.forecast.forecastday[1].hour[9].time_epoch,
            temp:tasks.forecast.forecastday[1].hour[9].temp_c,
            text:tasks.forecast.forecastday[1].hour[9].condition.text,
            icon:tasks.forecast.forecastday[1].hour[9].condition.icon
           },
           nextForcast12:
           {
            time: tasks.forecast.forecastday[1].hour[12].time_epoch,
            temp:tasks.forecast.forecastday[1].hour[12].temp_c,
            text:tasks.forecast.forecastday[1].hour[12].condition.text,
            icon:tasks.forecast.forecastday[1].hour[12].condition.icon
           },
           nextForcast13:
           {
            time: tasks.forecast.forecastday[1].hour[15].time_epoch,
            temp:tasks.forecast.forecastday[1].hour[15].temp_c,
            text:tasks.forecast.forecastday[1].hour[15].condition.text,
            icon:tasks.forecast.forecastday[1].hour[15].condition.icon
           },
           nextForcast14:
           {
            time: tasks.forecast.forecastday[1].hour[18].time_epoch,
            temp:tasks.forecast.forecastday[1].hour[18].temp_c,
            text:tasks.forecast.forecastday[1].hour[18].condition.text,
            icon:tasks.forecast.forecastday[1].hour[18].condition.icon
           },
           nextForcast15:
           {
            time: tasks.forecast.forecastday[1].hour[21].time_epoch,
            temp:tasks.forecast.forecastday[1].hour[21].temp_c,
            text:tasks.forecast.forecastday[1].hour[21].condition.text,
            icon:tasks.forecast.forecastday[1].hour[21].condition.icon
           },
           
          
          
 
            };
        setGai(mosh)
       console.log(gai)
       //  setEroor("");
       })
       .catch(function (error) {
         console.log(error);
        // setEroor("try agine..");
       });     
   };
   useEffect(() => {
    
    Show();
    
},[cityLink]);
  


  return (
     <div>
    
    <Home
  
 forcast0={gai.nextForcast0}
 forcast1={gai.nextForcast1}
 forcast2={gai.nextForcast2}
 forcast3={gai.nextForcast3}
 forcast4={gai.nextForcast4}
 forcast5={gai.nextForcast5}
 forcast6={gai.nextForcast6}
 forcast7={gai.nextForcast7}
 forcast8={gai.nextForcast8}
 forcast9={gai.nextForcast9}
 forcast10={gai.nextForcast10}
 forcast11={gai.nextForcast11}
 forcast12={gai.nextForcast12}
 forcast13={gai.nextForcast13}
 forcast14={gai.nextForcast14}
 forcast15={gai.nextForcast15}




LinkCity={LinkCity}
cityLink = {cityLink}
TestMe={TestMe}
country={gai.country}
localtime_epoch={gai.localtime_epoch}
temp_c={gai.temp_c}
cityName={gai.cityName}
icon={gai.icon}
text={gai.text}
forcast={gai.forcast}
  forcastIcon={gai.forcastIcon}
        maxTemp={gai.maxTemp}
  mintemp={gai.mintemp}
  chanseOfRain={gai.chanseOfRain}
  wind={gai.wind}
  humidity={gai.humidity}
  cloud={gai.cloud}
  precip={gai.precip}
  uv={gai.uv}
  sunrise={gai.sunrise}
  sunset={gai.sunset}
  moonrise={gai.moonrise}
  moonset={gai.moonset}
  moon_phase={gai.moon_phase}
  moon_illumination={gai.moon_illumination}

/>

    </div>
   
  );
}



export default App;