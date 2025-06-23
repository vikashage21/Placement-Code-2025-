import React, { useEffect, useState } from 'react'

function App() {
  // todo  in this challenge , you will create a react component that dynamically manages state using useState and useEffect hooks. your component will include:
  //  1 a counter that increments when a button is clicked
  //  2 an input filed where users can type their name.
  //  the document title will update to show the current count.
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {


    // update the title
    document.title = `Count is ${count}`

    // cleanup function
    return () => {
      document.title = 'React App'
    }
  }, [count])

  // handel the increment of the count

  const handelIncrement = () => {
    setCount(pre => pre + 1)
  }

  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gray-100 gap-5'>
      <h1 className='text-3xl font-bold mb-4'>UseEffect Challenge</h1>
      <h1 className='text-2xl font-bold'>Counter: {count}</h1>
      <button
        onClick={handelIncrement}
        className='bg-blue-500 text-white px-4 py-2 rounded'
      >
        Increment
      </button>
      <input
        type="text"
        placeholder='Enter your text'
        value={inputValue}
        onChange={(e)=> setInputValue(e.target.value)}
      
        className='border border-gray-300 p-2 mt-4'
      />

      <h1>
        {
          inputValue
        }
      </h1>



    </div>
  )
}

export default App
