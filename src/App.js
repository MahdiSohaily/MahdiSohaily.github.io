import React, { Component } from 'react';
import './styles/App.css';
import Clock from './components/Clock';
import EventHandler from './components/EventHandler';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
    };
  }

  render() {
    return (
      <>
        <Clock />
        <EventHandler data="practice" />
      </>
    );
  }
}

export default App;
