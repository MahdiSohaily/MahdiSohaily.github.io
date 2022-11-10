import React, { Component } from 'react';
import Body from './Body';
import Footer from './Footer';
import Heading from './Heading';

export default class Messenger extends Component {
  render() {
    return (
      <div class="container bootstrap snippets">
        <div class="col-md-7 col-xs-12 col-md-offset-2">
          <div class="panel" id="chat">
           <Heading />
            <Body />
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}
