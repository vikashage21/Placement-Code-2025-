import React, { useState } from "react";

const TodoComponetes = () => {
  const [data, setData] = useState([]);
  const [inputData, setInputData] = useState("");

  const handelInput = (e) => {
    setInputData(e.target.value);
  };

  const handelData = () => {
    if (inputData.trim() === "") return; // avoid empty task

    setData((pre) => [
      ...pre,
      {
        id: Math.floor(Math.random() * 10000),
        content: inputData,
        checked: false,
      },
    ]);
    setInputData("");
  };

  const handelRemove = (event) => {
    const targetElement = Number(event.target.id);
    setData(data.filter((item) => item.id !== targetElement));
  };

  const handelChecked = (itemsId) => {
    const updatedData = data.map((item) =>
      item.id === itemsId ? { ...item, checked: !item.checked } : item
    );

    setData(updatedData);
  };

  return (
    <div className="container d-flex justify-content-center flex-column m-auto align-items-center h-100 w-100">
      <h1 className="m-2 ">Todo App</h1>

      <input
        className="p-2 m-2 w-50 rounded-sm"
        type="text"
        placeholder="Enter something to Add"
        value={inputData}
        onChange={handelInput}
      />
      <button className="btn btn-primary text-white" onClick={handelData}>
        Add
      </button>

      {data.length === 0 ? (
        <p style={{ color: "black" }}>You didn't write anything yet</p>
      ) : (
        data.map((items) => (
          <div key={items.id} className="">
            <span className="d-flex gap-3 bg-body-tertiary p-2 m-2 rounded w-50 align-items-center">
              <h3
                style={{
                  textDecoration: items.checked ? "line-through" : "none",
                }}
              >
                {items.content}
              </h3>

              <button
                className={`btn ${
                  items.checked ? "btn-success" : "btn-warning"
                }`}
                onClick={() => handelChecked(items.id)}
              >
                {items.checked ? "Checked" : "Check"}
              </button>

              <button
                className="btn btn-danger"
                id={items.id}
                onClick={handelRemove}
              >
                Remove
              </button>
            </span>
          </div>
        ))
      )}
    </div>
  );
};

export default TodoComponetes;
