import React from "react";
import { useState } from "react";

// create a textarea that show how many character the user has typed in real time
// limit text length to 200 characters (show a warning if exceeded)

const CharacterCount = () => {
  const [inputData, setInputData] = useState("");
  const [exceed, isExceed] = useState(false);

  const handelChar = (e) => {
    // handing the textarea
    let maxLength = 200;

    setInputData(e.target.value);
    let words = inputData.length;

   
    if (words >= maxLength) {
      isExceed(true);
    } else {
      isExceed(false);
    }
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
      }}
    >
      <p>Enter Your feedback!</p>
      <textarea
        style={{
          width: "50%",
          height: "50%",
          padding: "1.2rem",
        }} 
        
        name=""
        id=""
        placeholder="write something here"
        onChange={(e) => handelChar(e) }
      ></textarea>
      <p>{`${inputData.length}/200`}</p>
      <h1>{exceed ? "you have exceed the limit " : ""}</h1>
    </div>
  );
};

export default CharacterCount;
