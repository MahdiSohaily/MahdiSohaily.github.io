import React from 'react'

export default function Chat() {
  return (
    <div className={`chat ${item.type === 'receive' && 'chat-left'}`}>
    <div
      className='chat-avatar'
    >
      <a
        className="avatar avatar-online"
        data-toggle="tooltip"
        href="#top"
        data-placement="right"
        title=""
        data-original-title="June Lane"
      >
        <img src={item.type === 'receive' ? receiver : sender} alt="..." />
        <i></i>
      </a>
    </div>
    <div className="chat-body">
      <div className="chat-content">
        <p>{item.message}</p>
        <time className="chat-time" dateTime="2015-07-01T11:37">
          {item.time}
        </time>
      </div>
    </div>
  </div>
  )
}
