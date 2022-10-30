import React from 'react';

export default function Contact() {
  const address = ['afghanistan', 'kabul', 'brchi', 'shahrak-e-jafariea'];
  const display = address.map((item, index) => (
    <li key={index.toString()}>item</li>
  ));
  return (
    <React.Fragment>
      <div>contact</div>
      <ul>{display}</ul>
    </React.Fragment>
  );
}
