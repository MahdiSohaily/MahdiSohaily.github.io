import React, { Component } from 'react';
import Box from './Box';

export default class Boxes extends Component {
  render() {
    return (
      <div className="box-wrapper">
        {this.props.items.map(
          (item) => item.checked && <Box key={item.id} title={item.title} />
        )}
      </div>
    );
  }
}
