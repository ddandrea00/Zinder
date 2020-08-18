import React, { useState } from "react";
import "./ChatScreen.css";
import { Avatar } from "@material-ui/core";

const ChatScreen = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    {
      name: "Beyonce",
      image:
        "https://i.pinimg.com/originals/45/12/8e/45128e3b44384f020b47a47a43dd46a9.jpg",
      message: "Yoo whats up, it's Queen-B",
    },
    {
      name: "Beyonce",
      image:
        "https://i.pinimg.com/originals/45/12/8e/45128e3b44384f020b47a47a43dd46a9.jpg",
      message: "Let's be honest, I swiped right by mistake...",
    },
    {
      message: "What up",
    },
  ]);

  const handleSend = e => {
    e.preventDefault();

    setMessages([...messages, { message: input }]);
    setInput("");
  };

  return (
    <div className="chatScreen">
      <p className="chatScreen_timestamp">
        YOU MATCHED WITH BEYONCE ON 08/10/2020
      </p>
      {messages.map((message) =>
        message.name ? (
          <div className="chatScreen_message">
            <Avatar
              className="chatScreen_image"
              alt={message.name}
              src={message.image}
            />
            <p className="chatScreen_text">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen_message">
            <p className="chatScreen_textUser">{message.message}</p>
          </div>
        )
      )}
      <form className="chatScreen_input">
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          className="chatScreen_inputField"
          type="text"
          placeholder="Type a message..."
        />
        <button onClick={handleSend} type="submit" className="chatScreen_inputButton">SEND</button>
      </form>
    </div>
  );
};

export default ChatScreen;
