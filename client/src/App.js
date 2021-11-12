import "./App.css";
import React, { useState, useEffect } from "react";
import Chat from "./Chat";
import io from "socket.io-client";

const socket = io.connect("http://192.168.100.9:5001/");

const App = () => {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);
  const [socketError, setSocketError] = useState("");
  const [welcome, setWelcome] = useState("");

  useEffect(() => {
    socket.on("connect_error", (data) => {
      console.log(data.message);
      setSocketError(data.message);
    });

    socket.on("welcome", (data) => {
      setWelcome(data);
    });
  }, [socket]);

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
      setShowChat(true);
    }
  };

  if (!socketError) {
    return (
      <div className="App">
        <h2>{welcome}</h2>
        {!showChat ? (
          <div className="joinChatContainer">
            <h3>Join A chat</h3>
            <input
              type="text"
              placeholder="John..."
              onChange={(event) => {
                setUsername(event.target.value);
              }}
            />
            <input
              type="text"
              placeholder="Room ID..."
              onChange={(event) => {
                setRoom(event.target.value);
              }}
            />
            <button onClick={joinRoom}>Join A Room</button>
          </div>
        ) : (
          <Chat socket={socket} username={username} room={room} />
        )}
      </div>
    );
  }

  return <h1>Error while trying to connect</h1>;
};

export default App;
