import React, { Component } from 'react';
import '../App.css';
import Aside from './Aside';

export default class Main extends Component {
  state = {
    toggle: [
      { id: 1, title: 'Box 1', checked: false },
      { id: 2, title: 'Box 2', checked: false },
      { id: 3, title: 'Box 3', checked: true },
      { id: 4, title: 'Box 4', checked: false },
    ],
  };

  newState = (id) => {
    return function (elem) {
      if (elem.id === id) {
        elem.checked = !elem.checked;
      }
      return elem;
    };
  };

  toggler = (id) => {
    this.setState({
      toggle: this.state.toggle.map(this.newState(id)),
    });
  };

  render() {
    return (
      <>
        <Aside items={this.state.toggle} toggler={this.toggler} />
      </>
    );
  }
}
