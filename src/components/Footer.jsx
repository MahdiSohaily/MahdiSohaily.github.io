import React, { Component } from 'react';

export default class Footer extends Component {
  state = {
    input: '',
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleChat(this.state.input);
  };
  render() {
    return (
      <div className="panel-footer">
        <form onSubmit={this.handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              value={this.state.input}
              onChange={(e) =>
                this.setState({
                  input: e.target.value,
                })
              }
              className="form-control"
              placeholder="Say something"
            />
            <span className="input-group-btn">
              <button className="btn btn-primary" type="submit">
                Send
              </button>
            </span>
          </div>
        </form>
      </div>
    );
  }
}
