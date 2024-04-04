import React, { useState } from 'react'
import {useTodo} from "../context/TodoContext.js"


const Tasks = ({myprop}) => {
  const {deleteTodo,updateTodo,toggleComplete} = useTodo()

  const [TaskValue,setTaskValue]=useState(myprop.todo)
  const [isEditable,setIsEditable]=useState(false)

  // console.log(isEditable)
  // console.log(TaskValue)
  
const toggleHere=()=>{
  toggleComplete(myprop.id)
}
  const handleDelete=()=>{
    deleteTodo(myprop.id)
  }
  return (
    <div className={myprop.completed ? 'TasksComp2' : 'TasksComp'}>
      <input className='TasksComp_Check' type='checkbox' onChange={toggleHere} checked={myprop.completed}/>
      <input className={myprop.completed ? 'TasksComp_Input2' : 'TasksComp_Input'} type='text' readOnly={!isEditable} onChange={(e)=>setTaskValue(e.target.value)} value={TaskValue}/>
      <button className={myprop.completed ? 'TasksComp_Edit2' : 'TasksComp_Edit'} onClick={()=>{
            if(myprop.completed) return
            if(isEditable){

              updateTodo(myprop.id,{...myprop,todo:TaskValue})
              setIsEditable(false)

            } else {setIsEditable(prev=>!prev)}
      }} >{isEditable?"Update":"Edit"}</button>
      <button className="TasksComp_Delete" onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default Tasks