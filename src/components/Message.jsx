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
        <select value={this.state.name} onChange={this.handleChange}>
          <option value="Ford">Ford</option>
          <option value="Volvo">Volvo</option>
          <option value="Fiat">Fiat</option>
        </select>
      </form>
    );
  }
}
