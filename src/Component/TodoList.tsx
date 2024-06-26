import React from 'react'
import todos from '../model'
import SingleTodo from './SingleTodo';
interface todolist{
Todos:todos[],
setTodos: React.Dispatch<React.SetStateAction<todos[]>>;

}
const TodoList = ({Todos,setTodos}:todolist) => {
  return (
    <div className='mx-20 my-10 flex flex-col flex-nowrap   h-auto '>
      {Todos.map((todo)=>{
        return <>
        <SingleTodo todo={todo} Todos={Todos} key={todo.id}
        setTodos={setTodos}
        />
        </>
      })}
    </div>
  )
}

export default TodoList
