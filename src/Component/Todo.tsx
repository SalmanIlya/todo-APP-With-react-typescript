import React, { useRef, useState } from "react";
import "./style.css";
interface propsdata {
  inputdat: string;
  setinputdat: React.Dispatch<React.SetStateAction<string>>;
  handlechange: (e: React.FormEvent) => void;
}

const Todo: React.FC<propsdata> = ({ inputdat, setinputdat, handlechange }) => {

const inputelement = useRef<HTMLInputElement>(null)

  return (
    <div>
      <h1 className=" text-2xl bolder text-white text-center my-10 ">
        TODO APP
      </h1>
      <form className="relative shadow-inner " onSubmit={handlechange}>
        <input
        ref={inputelement}
          value={inputdat}
          onChange={(e) => {
            setinputdat(e.target.value);
          }}
          type="text"
          placeholder="write a massage"
          className="inp  outline-none h-14 w-96 text-xl  rounded-full px-5"
          name=""
          id=""
        />
        <button
          type="submit"
          className="rounded-full h-12 w-12 mt-1 bg-blue-500 absolute  right-2 text-white active:scale-90 active:ease-in-out outline-none hover:bg-blue-700 "
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default Todo;
