import React, { useState } from "react";
import "./testAppForm.css"

function TestAppForm() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });


  function valueChange(e){
    const nameValue = e.target.name;
    const inputValue = e.target.value;

    console.log(nameValue + " " + inputValue);
    
    setContact(koko =>{
        return ({...koko,[nameValue]:inputValue})
    })

   
console.log("wow")


   
  }
  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input onChange={valueChange} name="fName" placeholder="First Name" />
        <input onChange={valueChange} name="lName" placeholder="Last Name" />
        <input onChange={valueChange} name="email" placeholder="Email" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default TestAppForm;
/*
import React, { useState } from "react";
import TodoItem from "./ToDoItem";
function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }

  function deleteItem(id) {
    console.log(id);
    setItems(prevItem=>{
      return prevItem.filter((items ,index) => {
        return index!==id
      })
    })
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem,index) => (
            <TodoItem 
            item={todoItem} 
            onChecked={deleteItem} 
            id={index}
            key={index}
           
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

*/

///////////////////////////////////////////

/*
import React, { useState } from "react";

function ToDoItem(props) {
 

  return <li  onClick={()=>{
props.onChecked(props.id)
  }} >
 {props.id}
  {props.item}
  
  </li>;
}

export default ToDoItem;

*/
