import React from "react";
import { useState } from "react";

// create a login form with a password input an toggle icon to show / hide the password

const PasswordContainer = () => {
  const [password, setPassword] = useState(true);
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  // handling the form submit

  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };
  const handelInput = (e) => {
    const { name, value } = e.target;
    setData((pre) => {
      return {
        ...pre,
        [name]: value,
      };
    });
  };

  //   defining the style

  const divStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  const formInputStyle = {
    padding: "0.5rem 3.2rem",
    borderRadius: "0.2rem",
    margin: "0.5rem",
  };

  const buttonStyle = {
    backgroundColor: "blue",
    padding: "0.5 rem 0.2rem",
    color: "white",
    borderRadius: "1rem",
    margin: "5px",
  };

  return (
    <div style={{ ...divStyle, flexDirection: "row", height: "100vh" }}>
      <form style={{ ...divStyle }} onSubmit={handelSubmit}>
        <input
          style={{ ...formInputStyle }}
          type="text"
          placeholder="Enter your Email"
          required
          name="username"
          value={data.username}
          onChange={handelInput}
        />
        <input
          style={{ ...formInputStyle }}
          type={`${password ? "password" : "text"}`}
          placeholder="Enter your password "
          required
          name="password"
          value={data.password}
          onChange={handelInput}
        />
        {/* adding cursor pointer in css  */}
        <span onClick={() => setPassword((pre) => !pre)}>
          {password ? "show password" : "hide password"}
        </span>

        <button style={{ ...buttonStyle }}>submit</button>
      </form>
    </div>
  );
};

export default PasswordContainer;
