import React from 'react';

class EventHandler extends React.Component {
  constructor(props) {
    super(props);
    this.state = { state: 'active' };
  }

  static getDerivedStateFromProps(props, state) {

  }

  static getD
  render() {
    return <button onClick={this.alertMessage}>Click</button>;
  }

  alertMessage() {
    alert('Clicked');
  }
}

export default EventHandler;
