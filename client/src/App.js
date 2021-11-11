import React from "react";
import io from "socket.io-client";

const socket = io.connect("http://localhost:5001");

const App = () => {
  const [username, setusername] = useState("");
  const [room, setroom] = useState("");

  const joinRoom = () => {};
  return (
    <div>
      <h3>Join A chat</h3>
      <input type="text" placeholder="John..." />
      <input type="text" placeholder="Room ID..." />
      <button>Join A Room</button>
    </div>
  );
};

export default App;
