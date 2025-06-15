import React, { useState } from 'react';
import { RxCross1 } from "react-icons/rx";

import { IoIosDoneAll } from "react-icons/io";

function Todo() {
  const [inputValue, setInputValue] = useState('');
  const [todoList, setTodoList] = useState([]);
  const [date, setDate] = useState('')

  const handleChangeValue = (event) => {
    setInputValue(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (!inputValue.trim()) return;

    if (todoList.includes(inputValue.trim())) {
      setInputValue('');
      return;
    }

    setTodoList((prev) => [...prev, inputValue.trim()]);
    setInputValue('');
  };

  // todo date





  setInterval(() => {


    const now = new Date();
    const formateDate = now.toLocaleDateString()
    const formateTime = now.toLocaleTimeString()

    setDate(`${formateDate} - ${formateTime}`)

  }, 1000);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
        <header className="mb-4">
          <h1 className="text-2xl font-bold text-center text-gray-800">Todo List</h1>

          <h2 className='flex justify-center items-center m-2'>
            {
              date
              
            }
           

          </h2>
        </header>

        <form onSubmit={handleFormSubmit} className="flex gap-2 mb-4">
          <input
            type="text"
            value={inputValue}
            onChange={handleChangeValue}
            placeholder="Enter task"
            className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 hover:bg-yellow-500"
          >
            Add Task
          </button>
        </form>

        <div className="space-y-2 ">
          {todoList.map((item, index) => (
            <div
              key={index}
              className="bg-gray-200 p-2 rounded-md text-gray-800 shadow-sm  justify-between items-center m-auto flex "
            >
              {item}

              <div className="btn container flex m-auto text-center items-center justify-center gap-5">
                <button className='bg-red-300 py-1 px-5 rounded-sm hover:bg-red-500 '> <span> <RxCross1 /> </span> </button>
                <button className='bg-blue-500 py-1 px-5 rounded-sm hover:bg-blue-700 '> <span> <IoIosDoneAll /> </span> </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Todo;
