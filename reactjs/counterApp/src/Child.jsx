import React, { useState } from "react";

function Child({ parentData, sendData }) {
  const [data, setData] = useState("");
  const handelInput = (e) => {
    const inputData = e.target.value;
    setData(inputData);
  };
  //    defining form handel

  const handelForm = (e) => {
    e.preventDefault();
    
  };

  sendData(data)

  return (
    <div>
      <h1>child block</h1>
      {parentData}

      <form action="" onSubmit={handelForm}>
        <input type="text" placeholder="enter something here"  value={data} onChange={handelInput} />
      </form>
    </div>
  );
}

export default Child;
