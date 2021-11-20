import { useState } from "react";
import Display from "./Display";
function Form(){

    const [arr,setArr] = useState([]);

    const [input , setInput] = useState("");

  
    function myInput(e){

     setInput(e.target.value);
       console.log(input)
      }

    //console.log(input);
    function Ron(arr){
      
        return  <Display
        context = {arr}
        />
       
    }

  
 function ShowInput(){

  

setArr([...arr,input])


   console.log(arr)
 
 }
    return(
    <div>
        <input  onChange={myInput}/>
        <button onClick={ShowInput}>click me</button>
      
   <h1>my list:  {arr.map (Ron)}</h1>
    </div>
    
    )
    
}
    
    
    export default Form;