// import { useState } from "react";
// import "./App.css";
// import Cards from "./components/Cards";
// import Employment from "./employment";
// import Forms from "./Forms";
// function App() {
//   const [count, setCount] = useState(0);

//   function increment() {
//     setCount((pre) => pre + 2);
//   }

//   function decrement() {
//     if (count < 1) {
//       return setCount(0);
//     } else {
//       setCount((pre) => pre - 1);
//     }
//   }

//   //  handing a form

//   const [data, setData] = useState({
//     userName: "",
//     password: "",
//     job: "",
//     desc: "",
//     term: false,
//   });

//   function handelInput(e) {
//     const { name, value } = e.target;
//     setData((pre) => {
//       return {
//         ...pre,
//         [name]: value,
//       };
//     });
//   }
//   function handleChecked(e) {
//     setData((pre) => {
//       return {
//         ...pre,
//         [e.target.name]: e.target.checked,
//       };
//     });
//   }
//   function handelForm(e) {
//     e.preventDefault();
//     console.log(data);
//     setData({
//       userName: "",
//       password: "",
//       job: "",
//       desc: "",
//       term: false,
//     });
//   }

//   return (
//     <>
//       <div>
//         <Employment />
//         <h1>{count}</h1>

//         <button onClick={increment}>increment</button>
//         <button onClick={decrement}>decrement</button>
//         <Cards></Cards>

//         {/*  creating a form  */}

//         <form action="" onSubmit={handelForm}>
//           <input
//             type="text"
//             name="username"
//             placeholder="Enter your userName"
//             onChange={handelInput}
//             value={data.userName}
//             name="userName"
//           />
//           <input
//             type="text"
//             name="username"
//             placeholder="Enter your password"
//             onChange={handelInput}
//             value={data.password}
//             name="password"
//           />

//           <textarea
//             type="text"
//             name="desc"
//             placeholder="Enter your desc"
//             onChange={handelInput}
//             value={data.desc}
//             name="desc"
//           />

//           <select name="job" id="job" onChange={handelInput} value={data.job}>
//             <option>developer</option>
//             <option>programmer</option>
//             <option>devOps</option>
//           </select>
//           <input
//             type="checkbox"
//             name="term"
//             value={data.term}
//             id=""
//             onChange={handleChecked}
//           />
//           <input type="submit" value="login" />
//         </form>
//       </div>
//       <Forms />
//       <Employment />
//     </>
//   );
// }
// // what is children props

// // -> in react props.children is a special properties which is react by react ,
// // the value of children properties the content which is present btw opening and closing jsx tags,
// // <button> {props.children} <button>
// //
// export default App;


import React from 'react'
import Parent from './Parent'

function App() {
  return (
    <div>
      <Parent/>
      
    </div>
  )
}

export default App

