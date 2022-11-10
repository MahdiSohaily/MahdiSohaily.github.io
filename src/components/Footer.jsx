import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <div class="panel-footer">
        <form>
          <div class="input-group">
            <input
              type="text"
              class="form-control"
              placeholder="Say something"
            />
            <span class="input-group-btn">
              <button class="btn btn-primary" type="button">
                Send
              </button>
            </span>
          </div>
        </form>
      </div>
    );
  }
}
