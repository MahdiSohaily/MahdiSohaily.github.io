import React, { Component } from 'react';
import Body from './Body';
import Footer from './Footer';
import Heading from './Heading';

export default class Messenger extends Component {
  state = {
    chatList: [
      {
        message: 'Good morning, sir What can I do for you?',
        type: 'send',
        time: '11:37:08 am',
      },
      {
        message: 'Well, I am just looking around.',
        type: 'receive',
        time: '11:39:57 am',
      },
      {
        message: 'If necessary, please ask me.',
        type: 'send',
        time: '11:40:10 am',
      },
    ],
    users: {
      sender: 'https://bootdey.com/img/Content/avatar/avatar1.png',
      receiver: 'https://bootdey.com/img/Content/avatar/avatar2.png',
    },
  };

  handleChat = (message) => {
    const chats = [...this.state.chatList];
    chats.push({
      message,
      type: 'send',
      time: 'just now',
    });
    this.setState({
      chatList: chats,
    });
  };

  render() {
    return (
      <div className="container bootstrap snippets">
        <div className="col-md-7 col-xs-12 col-md-offset-2">
          <div className="panel" id="chat">
            <Heading heading="chat" />
            <Body chatList={this.state.chatList} users={this.state.users} />
            <Footer handleChat={this.handleChat} />
          </div>
        </div>
      </div>
    );
  }
}
