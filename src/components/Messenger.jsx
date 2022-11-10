import React, { Component } from 'react';

export default class Messenger extends Component {
  render() {
    return (
      <div class="container bootstrap snippets">
        <div class="col-md-7 col-xs-12 col-md-offset-2">
          <div class="panel" id="chat">
            <div class="panel-heading">
              <h3 class="panel-title">
                <i class="icon wb-chat-text" aria-hidden="true"></i> Chat
              </h3>
            </div>
            <div class="panel-body">
              <div class="chats">
                <div class="chat">
                  <div class="chat-avatar">
                    <a
                      class="avatar avatar-online"
                      data-toggle="tooltip"
                      href="#"
                      data-placement="right"
                      title=""
                      data-original-title="June Lane"
                    >
                      <img
                        src="https://bootdey.com/img/Content/avatar/avatar1.png"
                        alt="..."
                      />
                      <i></i>
                    </a>
                  </div>
                  <div class="chat-body">
                    <div class="chat-content">
                      <p>
                        Good morning, sir.
                        <br />
                        What can I do for you?
                      </p>
                      <time class="chat-time" dateTime="2015-07-01T11:37">
                        11:37:08 am
                      </time>
                    </div>
                  </div>
                </div>
                <div class="chat chat-left">
                  <div class="chat-avatar">
                    <a
                      class="avatar avatar-online"
                      data-toggle="tooltip"
                      href="#"
                      data-placement="left"
                      title=""
                      data-original-title="Edward Fletcher"
                    >
                      <img
                        src="https://bootdey.com/img/Content/avatar/avatar2.png"
                        alt="..."
                      />
                      <i></i>
                    </a>
                  </div>
                  <div class="chat-body">
                    <div class="chat-content">
                      <p>Well, I am just looking around.</p>
                      <time class="chat-time" dateTime="2015-07-01T11:39">
                        11:39:57 am
                      </time>
                    </div>
                  </div>
                </div>
                <div class="chat">
                  <div class="chat-avatar">
                    <a
                      class="avatar avatar-online"
                      data-toggle="tooltip"
                      href="#"
                      data-placement="right"
                      title=""
                      data-original-title="June Lane"
                    >
                      <img
                        src="https://bootdey.com/img/Content/avatar/avatar1.png"
                        alt="..."
                      />
                      <i></i>
                    </a>
                  </div>
                  <div class="chat-body">
                    <div class="chat-content">
                      <p>If necessary, please ask me.</p>
                      <time class="chat-time" datetime="2015-07-01T11:40">
                        11:40:10 am
                      </time>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
          </div>
        </div>
      </div>
    );
  }
}
