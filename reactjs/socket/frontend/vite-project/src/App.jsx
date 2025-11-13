import React, { useEffect, useState } from "react";
import io from "socket.io-client";
const socket = io.connect("http://localhost:3000");
const App = () => {
  const [message, setMessage] = useState("");
  const [receiveMessage, setReceiveMsg] = useState([]);
  const config = {
    text: "Enter you message..",
    button: {
      value: "send message",
    },
  };

  const sendMessage = () => {
    socket.emit("send_message", {
      message,
    });
    setMessage("")
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setReceiveMsg((pre) => {
      return  [...pre, data];
      });
    });
  }, [socket]);
  return (
    <>
      <div>
        <input
          type="text"
          placeholder={config.text} value={message}
          onChange={(event) => setMessage(event.target.value)}
        />
        <button onClick={sendMessage}>{config.button.value}</button>
      </div>

      <h1>
        {receiveMessage.map((m) => {
          return <p>{"message : " + m.message}</p>;
        })}
      </h1>
    </>
  );
};

export default App;
