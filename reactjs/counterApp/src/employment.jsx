import React, { useState } from "react";

function employment() {
  const [emp, setEmp] = useState(["bhanu", "jyoti", "soni"]);

  const employess = [
    {
      id: 1,
      ename: "Bhanu",
    },
    {
      id: 2,
      ename: "vibhu",
    },
    {
      id: 3,
      ename: "soniya",
    },
  ];
  return (
    // here we are using index as identify the unique child.
    // <div>
    //   {emp.map((eName, i) => {
    //     return <h1 key={i}>{eName}</h1>;
    //   })}
    // </div>

    // using id as keys
//  note - we have return atleast one value .

    <div className="container">
      {employess.map((emp) => {
        return <h1 key={emp.id}>{emp.ename}</h1>;
      })}
    </div>
  );
}

export default employment;
