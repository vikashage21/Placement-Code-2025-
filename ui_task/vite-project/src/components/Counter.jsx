    import React, { useState } from "react";

    // make a simple counter with increment and decrement and rest button

    const Counter = () => {
    const [count, setCount] = useState(0);

    const buttonStyle = {
        backgroundColor: "blue",
        padding: "0.5 rem  1.2rem",
        color: "white",
        borderRadius:"1rem",
        margin:"5px"
    };
    return (
        <div style={{
            display:"flex",
        
            justifyContent:"center",
            alignItems:"center",
            height: "100vh",
            width: "100vw",
        }}>
        <h1> count :{count}</h1>
        <button style={{...buttonStyle}} onClick={() => setCount((pre) => pre + 1)}>+</button>
        <button style={{...buttonStyle}} onClick={() => setCount((pre) => (pre > 0 ? pre - 1 : 0))}>
            -
        </button>
        <button style={{...buttonStyle}} onClick={() => setCount(0)}>reset</button>
        </div>
    );
    };

    export default Counter;
