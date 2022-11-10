import React from 'react';

export default function Heading({ heading }) {
  return (
    <div className="panel-heading">
      <h3 className="panel-title">
        <i className="icon wb-chat-text" aria-hidden="true"></i> {heading}
      </h3>
    </div>
  );
}
