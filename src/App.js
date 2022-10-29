import React, { Component } from 'react';
import Message from './components/Message';
import Button from './components/Button';
import './styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isLogin: false };
  }

  // componentDidMount() {
  //   this.timerID = setInterval(() => this.tick(), 1000);
  // }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick = () => {
    this.setState({
      isLogin: true,
    });
  };

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        {this.state.isLogin && <Message />}
        <Button title="change state" handleState={this.tick} />
      </div>
    );
  }
}

export default App;
