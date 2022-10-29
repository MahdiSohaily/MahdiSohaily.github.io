import React, { Component } from 'react';
import Message from './components/Message';
import Button from './components/Button';
import './styles/App.css';

class App extends Component {
  state = { date: new Date() };

  changeCondition() {
    console.log(this.state.date);
  }

  render() {
    return (
      <>
        {this.state.isLogin && <Message />}
        <Button title="change state" handleState={this.changeCondition} />
      </>
    );
  }
}

export default App;
