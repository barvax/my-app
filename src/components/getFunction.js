import axios from "axios";
import getMyDate from "../functions/myDate";


const Show = (city) => {

   let more = {}
    axios.get(city)
      .then((response) => {
        const tasks = response.data;
        console.log(tasks)
        const {location,current} = tasks;
    // console.log (location)
const {country ,lat,localtime} = location;
console.log(country)
console.log(lat)
console.log(localtime)
        const localtime_epoch = tasks.location.localtime_epoch;
        let day = getMyDate(localtime_epoch).day;
        let hour = getMyDate(localtime_epoch).d;
        let timeToLoop = getMyDate(localtime_epoch).timeTolop;
        let month = getMyDate(localtime_epoch).myMonth;
        let dayOfMonth = getMyDate(localtime_epoch).dayOfMonth;
        // console.log(date)

        /*
            const tempForcast = []
            for (let i = 0; i < 23; i++) {

                if (timeTolop >= i && timeTolop < i + 1) {
                    console.log(i + "im the index")
                    myTime = i;
                    for (let j = -2; j < 0; j++) {
                        tempForcast.push(tasks.forecast.forecastday[0].hour[myTime + j].temp_c)

                    }

                }
               

            }
                     
            setRon((past)=>{               
                return  [...past, tempForcast]                              
         
        })     
            
          */
      
        return  {
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
          text : tasks.current.condition.text


          // warnings: tasks.alerts.alert[0].desc || "no worning"
        };
       
      //  setEroor("");
      })
      .catch(function (error) {
        console.log(error);
       // setEroor("try agine..");
      });

    
  };


  export default Show ;