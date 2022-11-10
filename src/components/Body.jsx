import React from 'react'

export default function Body({}) {
  return (
    <div class="panel-body">
    <div class="chats">
      <div class="chat">
        <div class="chat-avatar">
          <a
            class="avatar avatar-online"
            data-toggle="tooltip"
            href="#top"
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
            href="#top"
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
            href="#top"
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
  )
}
