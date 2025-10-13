import React from "react";

import { RxCross1 } from "react-icons/rx";

import { IoIosDoneAll } from "react-icons/io";

function TodoList({
  index,
  item,
  onHandeldeleteTodo,
  onHandelChekckedTodo,
  checked,
}) {
  return (
    <div
      key={index}
      className="bg-gray-200 p-2 rounded-md text-gray-800 shadow-sm  justify-between items-center  flex"
    >
      <span className={`${checked ? "line-through" : " "} `}>{item}</span>

      <div className="btn container flex m-auto text-center items-center justify-center gap-5">
        <button
          className="bg-red-300 py-2 px-2 rounded-full hover:bg-red-500 "
          onClick={() => onHandeldeleteTodo(item)}
        >
          {" "}
          <span>
            {" "}
            <RxCross1 />{" "}
          </span>{" "}
        </button>
        <button
          className="bg-blue-500 py-2 px-2 rounded-full hover:bg-blue-700 "
          onClick={() => onHandelChekckedTodo(item)}
        >
          {" "}
          <span>
            {" "}
            <IoIosDoneAll />{" "}
          </span>{" "}
        </button>
      </div>
    </div>
  );
}

export default TodoList;
