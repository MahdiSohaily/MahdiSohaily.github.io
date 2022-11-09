import React, { Component } from 'react';
import Toggle from './Toggle';

export default class Aside extends Component {
  render() {
    const { id, title, checked } = this.props;
    return <Toggle />;
  }
}
