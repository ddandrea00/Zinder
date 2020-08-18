import React from 'react';
import Chat from "./Chat"
import "./Chats.css"

const Chats = () => {
  return (
    <div className="chats">
      <Chat
        name="Beyonce Knowles"
        message="Let's be honest, I swiped right by mistake..."
        timestamp="40 seconds ago"
        profilePic="https://i.pinimg.com/originals/45/12/8e/45128e3b44384f020b47a47a43dd46a9.jpg"
      />
      <Chat
        name="Jessica Alba"
        message="Hey looks like we both have Fantastic 4 in common!"
        timestamp="1 day ago"
        profilePic="https://i.pinimg.com/originals/02/86/c1/0286c1d08e8a696638d84804b7348c42.jpg"
      />
      <Chat
        name="Emma Watson"
        message="You like Harry Potter or naw??"
        timestamp="3 days ago"
        profilePic="https://i.pinimg.com/originals/c4/34/b7/c434b70952d46ed4187cbda7e93eefc7.jpg"
      />
      <Chat
        name="Selena Gomez"
        message="Sooo....you're just gonna leave me on read..? Ok..."
        timestamp="5 days ago"
        profilePic="https://pbs.twimg.com/profile_images/1293940724153507840/-JfW_15a_400x400.jpg"
      />
    </div>
  );
}

export default Chats
