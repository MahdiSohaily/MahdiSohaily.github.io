import React from 'react';

export default function Heading({ heading }) {
  return (
    <div class="panel-heading">
      <h3 class="panel-title">
        <i class="icon wb-chat-text" aria-hidden="true"></i> {heading}
      </h3>
    </div>
  );
}
