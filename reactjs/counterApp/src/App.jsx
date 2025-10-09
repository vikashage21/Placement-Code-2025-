import { useState } from "react";
import "./App.css";
import Cards from "./components/Cards";
import Employment from "./employment";
function App() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount((pre) => pre + 2);
  }

  function decrement() {
    if (count < 1) {
      return setCount(0);
    } else {
      setCount((pre) => pre - 1);
    }
  }

  return (
    <>
      <div>
        <Employment />
        <h1>{count}</h1>

        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
        <Cards></Cards>
      </div>

      <Employment/>
    </>
  );
}
// what is children props

// -> in react props.children is a special properties which is react by react ,
// the value of children properties the content which is present btw opening and closing jsx tags,
// <button> {props.children} <button>
//
export default App;
