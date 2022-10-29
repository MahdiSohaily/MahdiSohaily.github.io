import React, { Component } from 'react';

export default class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'This is a textarea example in the React Library',
    };
  }

  handleChange = (e) => {
    this.setState({ name: e.target.value });
  };

  componentDidUpdate(props, state) {
    console.log(state.name);
  }

  render() {
    return (
      <form>
        <textarea value={this.name} onChange={this.handleChange} />
      </form>
    );
  }
}
