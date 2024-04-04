import React, { useState } from 'react'
import {useTodo} from "../context/TodoContext.js"

const InputComp = () => {
    const [TodoFromInput,SetTodoFromInput]=useState("")

    const {addTodo}=useTodo()
    // console.log(TodoFromInput)

    const HandleSubmit = (e)=>{
        e.preventDefault()
        if(TodoFromInput==="") return
        addTodo({todo:TodoFromInput,completed:false})
        SetTodoFromInput("")
    }
    
  return (
    <form className="InputComp" onSubmit={HandleSubmit}>
        <input  className="InputComp_Input" type="text" value={TodoFromInput} placeholder='Write Todo here...' onChange={(e)=>{SetTodoFromInput(e.target.value)}}/>
        <button className="InputComp_Button" type='submit'>Add</button>
    </form>
  )
}

export default InputComp