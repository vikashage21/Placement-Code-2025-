import React, { useState } from "react";
// create a button that change its background color randomly each time

const ColorChanger = () => {
  let [color, setColor] = useState("white");
  const changeColor = () => {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);

    let b = Math.floor(Math.random() * 255);
    return setColor(`rgb(${r}, ${g} , ${b})`);
  };

  return (
    <div
      style={{
        backgroundColor: color,
        height: "100vh",
        width: "100vw",
        margin: "0",
        padding: "0",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>change background task</h1>
      <button
        style={{
          padding: "0.5rem 1.5rem",
          borderRadius: "1rem",
          background: "blue",
          color: "white",
        }}
        onClick={changeColor}
      >
        click
      </button>
    </div>
  );
};

export default ColorChanger;
