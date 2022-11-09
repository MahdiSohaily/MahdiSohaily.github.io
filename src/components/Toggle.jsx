import React, { Component } from 'react';

export default class Toggle extends Component {
  toggleHandler = () => {
    this.props.toggler(this.props.id);
  };
  render() {
    return (
      <div className="toggle">
        <span>{this.props.title}</span>
        <label className="toggle-control">
          <input
            type="checkbox"
            onChange={this.toggleHandler}
            checked={this.props.checked ? true : false}
          />
          <span className="control"></span>
        </label>
      </div>
    );
  }
}
