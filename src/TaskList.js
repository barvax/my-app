import axios from "axios";
import {useState,useEffect} from "react";

function TaskList(props) {

    let [display,setDisplay] = useState("testing.....");
   const[mycity,setCity]  = useState("") 
   const [submitCity, setSubmitCity] = useState("london")
   const [error ,setEroor] = useState("")
   
    const city = ["http://api.weatherapi.com/v1/current.json?key=0a999350705440169d581411210111&q="+submitCity+"&aqi=no",
    "http://api.weatherapi.com/v1/current.json?key=0a999350705440169d581411210111&q=tel-aviv&aqi=no",
    "https://api.weatherapi.com/v1/history.json?key=0a999350705440169d581411210111&q="+submitCity+"&aqi=no&dt=2021-11-6"]
 
    useEffect(() => {
        Show();
       ;
    },  [submitCity]);
   
     const Show=()=>{
      
    axios.get(city[props.city]).then(response => {
        const tasks = response.data;
     
            console.log(tasks);
            display =
                <div>
                    <ul>
                        {tasks["location"]["name"]+" "}
                        {tasks["location"]["country"]+" "}
                        {tasks.forecast.forecastday[0].day.avgtemp_c+"°c"}
                        <br/> 
                        {tasks.forecast.forecastday[0].date}
                        
                    </ul>
                </div>
              setDisplay(display) ;
              setEroor("")
             
        }) .catch(function(error) {
            console.log("wow");
            setEroor("try agine..")
          });
    }     
    
    function handleClick(){
       
       
setSubmitCity(mycity)
setCity("")



    }

    function handleChange(e){
       const input  = e.target.value;
       setCity(input);
       
       
    }
    return (
        <div>

        <h1>{display}</h1>
        <input onChange={handleChange} name="city" value={mycity} placeholder="enter city..."></input>
        <input onChange={handleChange} name="date" value={mycity} placeholder="enter date..."></input>
        <button onClick={handleClick}>set</button>
        <h5>{error}</h5>
        </div>
        
    );

  }
   


export default TaskList;