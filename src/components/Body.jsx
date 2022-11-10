import React from 'react';
import Chat from './Chat';

export default function Body(props) {
  const { sender, receiver } = props.users;
  const chats = props.chatList.map((item, index) => {
    console.log(item.type);
    return (
        <Chat key={index} />
    );
  });
  return (
    <div className="panel-body">
      <div className="chats">{chats}</div>
    </div>
  );
}
