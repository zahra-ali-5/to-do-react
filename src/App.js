import React from 'react';
import { useState } from 'react';
import AddInput from "./Components/AddInput"
import TodoItems from './Components/TodoItems';
import './App.css';

const App= ()=> {
  const [input, setInput]=useState("")  
  const [task, setTask]=useState([])

  return (
    <div>
     <h1> To DO APP</h1> 
     <TodoItems
      task={task} 
      setTask={setTask}
      />

     <AddInput 
      input={input}
      setInput={setInput}
      task={task}
      setTask={setTask}
     />
    </div>
  );
}



export default App;
