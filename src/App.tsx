import React, { useState } from "react";
import Todo from "./Component/Todo";
import todos from "./model";

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
  console.log(Todos)
  return (
    <div
      className="h-screen w-screen bg-blue-500 flex flex-col  items-center
    "
    >
      <Todo
        inputdat={inputdat}
        setinputdat={setinputdat}
        handlechange={handlechange}
      />
    </div>
  );
};

export default App;
