import React from 'react'
import { useState } from 'react'

function App() {
  const [userData, setUserData] = useState({
    UserName: "",
    Password: ""
  })
  const handelInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((pre) => {
      return {
        ...pre,
        [name]: value
      }
    })
  }
  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(userData);
  }
  return (
    <div className="flex flex-col gap-4 items-center justify-center min-h-screen bg-gray-100 p-4" >
      <h1 className='text-2xl font-bold mb-4 text-gray-800'>
        login form
      </h1>
      <form action="#" onSubmit={handelSubmit}>
        <label htmlFor="UserName"></label>
        <input type="text" id="UserName" onChange={handelInputChange} name="UserName" placeholder="Username" className="border-2 border-gray-300 rounded-md p-2 mb-4 w-full" required />
        <label htmlFor="Password"></label>
        <input type="password" id="Password" onChange={handelInputChange} name="Password" placeholder="Password" className="border-2 border-gray-300 rounded-md p-2 mb-4 w-full" required />
        <button type="submit" className="bg-blue-500 text-white rounded-md p-2 w-full hover:bg-blue-600 transition-colors">Login</button>
      </form>

    </div>
  )
}

export default App
