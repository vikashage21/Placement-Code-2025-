import React, { useState } from "react";
import Child from "./Child";

function Parent() {
  const [data, setData] = useState("");
  const handelInput = (e) => {
    const inputData = e.target.value;
    setData(inputData);
  };
  //    defining form handel

  const handelForm = (e) => {
    e.preventDefault();
  };

  const [childData, setChildData] = useState("");
  //   defining a function for receiving data form child

  const handelChild = (val) => {
    console.log(val);
    setChildData(val);
  };
  return (
    <div>
      <h1>parent block</h1>
      {childData}
      <form action="" onSubmit={handelForm}>
        <input
          type="text"
          placeholder="enter something here"
          name="data"
          value={data}
          onChange={handelInput}
        />

        <Child parentData={data} sendData={handelChild} />
      </form>
    </div>
  );
}

export default Parent;
