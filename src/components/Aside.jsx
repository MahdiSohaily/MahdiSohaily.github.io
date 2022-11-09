import React, { Component } from 'react';
import Toggle from './Toggle';

export default class Aside extends Component {
  render() {
    return (
      <aside>
        {this.props.items.map((item) => (
          <Toggle
            key={item.id}
            id={item.id}
            title={item.title}
            checked={item.checked}
            toggler={this.props.toggler}
          />
        ))}
      </aside>
    );
  }
}
