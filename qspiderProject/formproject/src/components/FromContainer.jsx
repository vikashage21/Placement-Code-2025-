import React, { useState } from "react";
import { BrowserRouter, Link, Routes  , Route} from "react-router-dom";
import {FirstPage} from './FristPage'
import { SecondPage } from "./SecondPage";
import { ThirdPage } from "./ThirdPage";
const FromContainer = () => {
  
  const [data, setData] = useState({
    name: "",
    age: "",
    password: "",
    email: "",
  });
  const handleInput = (e) => {
    const {name , value} = e.target
    setData((pre) => {
      return {
        ...pre,
        [name]: value
      };
    });
  };
  const handelForm = (e) => {
    e.preventDefault();
    console.log(data)
    if(!data.name || !data.age || !data.email || !data.password){
        alert('enter valid details')
      return;

    }
  };
  return (
    <div>
     <BrowserRouter>

     <Routes>
       <Route path='/' element={<FirstPage data={data} handleInput={handleInput}/>}/>
       <Route path='/page2' element={<SecondPage data={data} handleInput={handleInput}/>}/>

       <Route path='/page3' element={<ThirdPage data={data} handleInput={handleInput} handelForm={handelForm}/>}/>

     </Routes>
     </BrowserRouter>
    </div>
  );
};

export default FromContainer;





