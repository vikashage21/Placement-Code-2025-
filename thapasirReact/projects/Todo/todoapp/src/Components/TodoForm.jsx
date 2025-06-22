import React from 'react'
import { useState } from 'react';


function TodoForm({ todoHandel }) {

    const [inputValue, setInputValue] = useState({});

    const handleChangeValue = (value) => {
        setInputValue({
            id: value,
            content: value,
            checked: false
        });
    };

    const handleFormSubmit = (event) => {
        event.preventDefault()
        todoHandel(inputValue, setInputValue)
    }

    return (
        <div>

            <form onSubmit={handleFormSubmit} className="flex gap-2 mb-4">
                <input
                    type="text"
                    value={inputValue.content}
                    onChange={(event)=> handleChangeValue(event.target.value)}
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

        </div>
    )
}

export default TodoForm
