import React from 'react'
import todos from '../model'
import {MdEditDocument, MdDelete } from "react-icons/md"
import {FaCheck} from "react-icons/fa"
import "./style.css"
type singletodo ={

    todo:todos,
    Todos:todos[],
    setTodos:React.Dispatch<React.SetStateAction<todos[]>>

}

const SingleTodo = ({todo,Todos,setTodos}:singletodo) => {
  const edithandler=(id:number)=>{


  }
  const deletetodo=(id:number)=>{
setTodos(Todos.filter(todo=>todo.id!==id))
  }
  const isCompleated=(id:number)=>{
    setTodos(Todos.map((todo)=>{
      return todo.id===id ? {...todo,iscompleated:!todo.iscompleated}:todo
    }))
   
 
  }

  
  return (

<div>

{
  todo.iscompleated ? (
    
    <div className='todo m-5 p-5' >
      <h1 className='line-through'>{todo.todo}</h1>
<div className="text-xl flex flex-row">
  <div onClick={()=>{edithandler(todo.id)}}>
  <MdEditDocument  />

  </div>

  <div onClick={()=>{deletetodo(todo.id)}} >
  <MdDelete />

  </div>

  <div onClick={()=>{isCompleated(todo.id)}}>
  <FaCheck />
  </div>
 
</div>
    </div>
  ):(
    
    <div className='todo m-5 p-5' >
      <h1>{todo.todo}</h1>
<div className="text-xl flex flex-row">
  <div onClick={()=>{edithandler(todo.id)}}>
  <MdEditDocument  />

  </div>

  <div onClick={()=>{deletetodo(todo.id)}} >
  <MdDelete />

  </div>

  <div onClick={()=>{isCompleated(todo.id)}}>
  <FaCheck />
  </div>
 
</div>
    </div>
  )
}



    </div>
  )
}

export default SingleTodo
