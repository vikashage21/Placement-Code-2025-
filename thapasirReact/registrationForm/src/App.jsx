import React from 'react'

import { useState } from 'react';

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');

  const handelInputChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case 'firstName':
        setFirstName(value);
        break;
      case 'lastName':
        setLastName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      default:
        console.log('Invalid input');
        break;
    }


  }

  const handelSubmit = (e) => {
    e.preventDefault();
    const userData = {
      firstName,
      lastName,
      email,
      password,
      phone
    }
    console.log(userData)
  }

  return (

    <div>

      <p>
        hello my name is {firstName ? <span className='text-blue-500'>{firstName} {lastName} </span> : "Username"} . my email is {email ? <span className='text-blue-500'>{email}</span> : "userdefault@gamil.com"} and my phone number is {phone ? <span>{phone}</span> : "xxxxxxx11"}.
      </p>

      <div className='flex item-center gap-2 justify-center m-auto p-5' >

        <div className='flex flex-col gap-2 w-96 p-5 border-2 border-gray-300 rounded-md shadow-lg'>
          <h1 className='text-2xl font-light mb-4'>sign up</h1>
          <p> please fill the form to create an account.</p>
          <form onSubmit={handelSubmit} className='flex flex-col gap-2' >

            <label htmlFor="firstName">FirstName</label>
            <input type="text" id="firstName" name='firstName' value={firstName} onChange={handelInputChange} className='border-2 border-gray-300 rounded-md p-2' />


            <label htmlFor="lastName">lastName</label>
            <input type="text" id="lastName" name='lastName' value={lastName} onChange={handelInputChange} className='border-2 border-gray-300 rounded-md p-2' />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" name='email' value={email} onChange={handelInputChange} className='border-2 border-gray-300 rounded-md p-2' />

            <label htmlFor="password">Password</label>
            <input type="password" id="password" name='password' value={password} onChange={handelInputChange} className='border-2 border-gray-300 rounded-md p-2' />

            <label htmlFor="phone">Phone</label>
            <input type='phone' id='phone' name='phone' value={phone} onChange={handelInputChange} className='border-2 border-gray-300 rounded-md p-2' />

            <p className='p-2'>by creating an account  you agree to our <a className='text-blue-500' href="#">Term & privacy</a> </p>

            <button className='bg-blue-500 text-white p-2 rounded-md'>Signup</button>

          </form>

        </div>

      </div>
    </div>


  )
}

export default App
