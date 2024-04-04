import React, { useEffect, useState } from 'react'
import { TodoContext,useTodo,TodoProvider } from './context/TodoContext.js'
import InputComp from './components/InputComp.jsx'
import Tasks from './components/Tasks.jsx'

const App = () => {
  const [Todos,setTodos]=useState([])

  useEffect(()=>{
    const todos = JSON.parse(localStorage.getItem("Todos"))

    if (todos && todos.length>0){
      setTodos(todos)
    }
  },[])

  useEffect(() => {
    localStorage.setItem("Todos",JSON.stringify(Todos))
    
  }, [Todos])
  
  const addTodo=(todo)=>{
    setTodos((prev)=>[{id:Date.now(),...todo}, ...prev])
  }
  const updateTodo=(id,todo)=>{
    setTodos((prev)=>(prev.map((prevtodo)=>prevtodo.id===id?todo:prevtodo)))
  }

  const deleteTodo=(id)=>{
setTodos(prev=>prev.filter((todo)=>todo.id!==id))
  }

  const toggleComplete= (id)=>{
    setTodos((prev)=>(prev.map((prevtodo)=>(prevtodo.id===id? {...prevtodo, completed: !prevtodo.completed} : prevtodo ))))
  }

  return (
  <TodoProvider value={{Todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
    <div className='Main'>
      <h1 className='Heading'>QuadB Tech Assignment</h1>
      <InputComp />
      {Todos.map((todo)=>{
        return <Tasks key={todo.id} myprop={todo}/>
      })}
      </div>
    </TodoProvider>
    )
}

export default App