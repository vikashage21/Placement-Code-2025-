import React, { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  return (

    <div className='App'>
      <header>
        <h1>
          Counter  app using State
        </h1>

        <h2>
          current count is {count}
        </h2>

        <button onClick={() => setCount(0)}>reset counter</button>
        <button onClick={() => setCount(count + 1)}
        >increase counter</button>
        <button onClick={() => {
          if (count > 0) {
            setCount(count - 1)
          } else if (count === 0) {
            alert("counter can't be negative")
          }
        }}>decrease counter</button>
      </header>


    </div>
  )
}

export default App
