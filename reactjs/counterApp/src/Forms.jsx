import React, { useRef } from "react";

function Forms() {
  const obj = useRef(10);
  console.log(obj);

  let { current } = obj;
  return (
    <div>
      {<h1>{current }</h1>}
      <input type="text" ref={obj} />
    </div>
  );
}

export default Forms;
