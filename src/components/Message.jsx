import React, { Component } from 'react';

export default class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
  }

  handleChange = (e) => {
    this.setState({ name: e.target.value });
  };

  componentDidUpdate() {
    console.log('updated');
  }

  render() {
    return (
      <form>
        <textarea value={this.name} onChange={this.handleChange} />
      </form>
    );
  }
}
