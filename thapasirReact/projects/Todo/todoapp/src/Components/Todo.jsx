import React, { useState } from 'react';

import TodoForm from './TodoForm';
import TodoDate from './TodoDate';
import TodoList from './TodoList';

const todokey = "reactTodo"

function Todo() {

  const [todoList, setTodoList] = useState(
    () => {
      const rawTodos = localStorage.getItem(todokey)

      if (!rawTodos) return [];

      return JSON.parse(rawTodos)
    }
  );


  const handleFormSubmit = (inputValue, setInputValue) => {

    const { id, content, checked } = inputValue

    if (!content) return;


    // if (todoList.includes(inputValue.trim())) {
    //   setInputValue('');
    //   return;
    // }

    const ifTodoContentMatched = todoList.find((curTask) => curTask.content == content
    );
    if (ifTodoContentMatched) return;

    setTodoList((prev) => [...prev, { id, content, checked }]);
    setInputValue({
      id: '',
      content: '',
      checked: false
    });
  };


  // todo adding data localstorage

  localStorage.setItem(todokey, JSON.stringify(todoList))


  const handelDeleteHandle = (value) => {




    // filter the todoList to remove the item that matches the value
    const updatedTask =
      todoList.filter((item) => item.content
        != value)


    // pop will not because it is method of arrays

    setTodoList(updatedTask)

  }


  const handelDeleteAll = () => {
    setTodoList([])
  }


  // handelCheckedTodo functionality

  const handelCheckedTodo = (content) => {

    const updatedTask = todoList.map((curTask) => {
      if (curTask.content == content) {
        return { ...curTask, checked: !curTask.checked }
      } else {
        return curTask
      }
    })

    setTodoList(updatedTask)

  }
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
        <header className="mb-4">
          <h1 className="text-2xl font-bold text-center text-gray-800">Todo List</h1>

          <h2 className='flex justify-center items-center m-2'>
            <TodoDate />


          </h2>
        </header>

        <TodoForm todoHandel={handleFormSubmit} />


        <div className="space-y-2 ">
          {todoList.map((item, index) => (
            <TodoList item={item.content}

              key={item.id}


              checked={item.checked}

              onHandelChekckedTodo={handelCheckedTodo}

              onHandeldeleteTodo={handelDeleteHandle} />
          ))}




          <div className="btn flex justify-center items-center ">
            <button className='bg-blue-500 p-2 rounded-sm text-white font-light' onClick={handelDeleteAll}>
              Clear All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Todo;
