import React from 'react'

import { useState } from 'react';

function App() {
const [userData , setUserData] = useState({
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    phone:"" 
})

  const handelInputChange = (e) => {
    const { name, value } = e.target;

    setUserData((pre)=>{
      return {
        ...pre,
        [name]:value
      }
    } )


   


  }

  const handelSubmit = (e) => {
    e.preventDefault();
   
    console.log(userData)
  }

  return (

    <div>

      <p>
        hello my name is {userData.firstName ? <span className='text-blue-500'>{userData.firstName} {userData.lastName} </span> : "Username"} . my email is {userData.email ? <span className='text-blue-500'>{userData.email}</span> : "userdefault@gamil.com"} and my phone number is {userData.phone ? <span>{userData.phone}</span> : "xxxxxxx11"}.
      </p>

      <div className='flex item-center gap-2 justify-center m-auto p-5' >

        <div className='flex flex-col gap-2 w-96 p-5 border-2 border-gray-300 rounded-md shadow-lg'>
          <h1 className='text-2xl font-light mb-4'>sign up</h1>
          <p> please fill the form to create an account.</p>
          <form onSubmit={handelSubmit} className='flex flex-col gap-2' >

            <label htmlFor="firstName">FirstName</label>
            <input type="text" id="firstName" name='firstName' value={userData.firstName} onChange={handelInputChange} className='border-2 border-gray-300 rounded-md p-2' />


            <label htmlFor="lastName">lastName</label>
            <input type="text" id="lastName" name='lastName' value={userData.lastName} onChange={handelInputChange} className='border-2 border-gray-300 rounded-md p-2' />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" name='email' value={userData.email} onChange={handelInputChange} className='border-2 border-gray-300 rounded-md p-2' />

            <label htmlFor="password">Password</label>
            <input type="password" id="password" name='password' value={userData.password} onChange={handelInputChange} className='border-2 border-gray-300 rounded-md p-2' />

            <label htmlFor="phone">Phone</label>
            <input type='phone' id='phone' name='phone' value={userData.phone} onChange={handelInputChange} className='border-2 border-gray-300 rounded-md p-2' />

            <p className='p-2'>by creating an account  you agree to our <a className='text-blue-500' href="#">Term & privacy</a> </p>

            <button className='bg-blue-500 text-white p-2 rounded-md'>Signup</button>

          </form>

        </div>

      </div>
    </div>


  )
}

export default App
