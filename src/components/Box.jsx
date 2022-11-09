import React, { Component } from 'react';

export default class Box extends Component {
  render() {
    return <div className="box">{this.props.title}</div>;
  }
}
