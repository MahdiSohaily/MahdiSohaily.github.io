import React from 'react';

export default function Contact() {
  const address = ['afghanistan', 'kabul', 'brchi', 'shahrak-e-jafariea'];
  const display = address.map((item, index) => (
    //we have to pass unique key values while rendering items of an array
    // the key value should be a unique string value among this array block
    // so we can the same key value in different array blocks
    <li key={index.toString()}>{item}</li>
  ));
  return (
    <React.Fragment>
      <div>contact</div>
      <ul>{display}</ul>
    </React.Fragment>
  );
}
