import React from 'react';

class EventHandler extends React.Component {
  render() {
    return <button onClick={this.alertMessage}>Click</button>;
  }

  alertMessage() {
    alert('Clicked');
  }
}

export default EventHandler;
