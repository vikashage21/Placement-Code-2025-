import React, { useState } from "react";
// add , display and delete tasks , store them temporarily in state (no backend)

const Todo = () => {
  const [data, setData] = useState([]);
  const [inputData, setInputData] = useState("");

  const handelInput = (e) => {
    setInputData(e.target.value);
  };

  const handelData = () => {
    setData((pre) => {
      return [
        ...pre,
        {
          id: Math.floor(Math.random() * 100),
          content: inputData,
        },
      ];
    });
    setInputData("");
  };

  const handelRemove = (event) => {
    let targetElement = Number(event.target.id);

    const filterElement = data.filter((item) => item.id !== targetElement);

    setData(filterElement);
  };

  return (
    <div>
      {/* input button for getting data */}
      <h1>todo app</h1>

      <input
        type="text"
        placeholder="Enter something to Add "
        value={inputData}
        onChange={handelInput}
      />
      <button onClick={handelData}>Add </button>
      {data.length == 0 ? (
        <>
          <p
            style={{
              color: "black",
            }}
          >
            you don't write yet something
          </p>
        </>
      ) : (
        data.map((items, id) => {
          return (
            <div key={items.id}>
              <span>
                <h1 key={id}>{items.content} </h1>

                <button
                  id={items.id}
                  onClick={(event) => {
                    handelRemove(event);
                  }}
                >
                  remove{" "}
                </button>
              </span>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Todo;
