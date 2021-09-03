const AddInput=(props)=>{

    const addTaskHandler = () => {  
      const newTask=[...props.task]
      newTask.push(props.input)
      props.setTask(newTask)
      props.setInput("")
    }
    return (
     <div>
      <input
      value={props.input}
       type="text"
       placeholder="add list"
       onChange = {(e)=> props.setInput(e.target.value)}
       />
       <button onClick={addTaskHandler}>Add</button>
       </div>
      )
  }
  
  export default AddInput