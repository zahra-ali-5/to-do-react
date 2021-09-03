
const TodoItems=({task, setTask}) => {

    const delHandler = (index)=>{
    const  newTask=[...task]
    newTask.splice(index, 1)
    setTask(newTask)
    }
    return (
    <div>
      {task.map((task, index)=> {
        return (
        <div> 
        {task}
        <button onClick={()=>delHandler(index)}>Del</button>
        </div>
        )
      })}
    </div>
    )
  }
  export default TodoItems
  