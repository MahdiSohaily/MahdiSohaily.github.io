import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <div className="panel-footer">
        <form>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Say something"
            />
            <span className="input-group-btn">
              <button className="btn btn-primary" type="button">
                Send
              </button>
            </span>
          </div>
        </form>
      </div>
    );
  }
}
