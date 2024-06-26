import React, { useState } from "react";
import Todo from "./Component/Todo";
import todos from "./model";
import TodoList from "./Component/TodoList";

const App = () => {
  const [inputdat, setinputdat] = useState<string>("");
  const [Todos, setTodos] = useState<todos[]>([]);
  const handlechange = (e: React.FormEvent) => {
    e.preventDefault();
if(inputdat){

    setTodos([
      ...Todos,
      {
        id: Date.now(),
        iscompleated: false,
        todo: inputdat,
      },
    ]);
    setinputdat("")
}


  };
  
  return (
    <div
      className=" min-h-screen max-h-auto  w-screen bg-blue-500 flex flex-col   items-center
    "
    >
      <div className=" flex flex-col  items-center
    ">
      <Todo
        inputdat={inputdat}
        setinputdat={setinputdat}
        handlechange={handlechange}
      />
      </div>
      <div>
      <TodoList Todos={Todos} setTodos={setTodos}/>

      </div>
     
      
    </div>
  );
};

export default App;
