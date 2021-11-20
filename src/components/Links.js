import { useState } from "react"


function Links(props) {

const [input,setInput] = useState("")


function HandleInput(e){
let i = e.target.value

console.log(i)
setInput(i)
}

function HandleClick(event){
   
    

    props.changeCity(input);
    setInput("")
    event.preventDefault();
}

    return <ul>
        <li onClick={() => {
           { props.cityLink('tel Aviv') }
        }}>{props.city1}
        </li>

        <li onClick={() => {
            { props.cityLink('jerusalem') }
        }}>{props.city2}
        </li>

        <li onClick={() => {
           { props.cityLink('london') }
        }}>{props.city3}
        </li>

        <li onClick={() => {
            { props.cityLink('amsterdam') }
        }}>{props.city4}
        </li>
<form>
    <br/>
        <li><input onChange={HandleInput} value={input} placeholder="Enter location"/></li>
        <li><button  onClick={HandleClick}>Go..</button></li>
        </form>

    </ul>
}

export default Links;