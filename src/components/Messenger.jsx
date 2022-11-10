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
  render() {
    return (
      <div class="container bootstrap snippets">
        <div class="col-md-7 col-xs-12 col-md-offset-2">
          <div class="panel" id="chat">
            <Heading heading="chat" />
            <Body />
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}
