import React, { useState } from 'react';

export default function Message() {
  const [name, setName] = useState('');

  const handleChange = (e) => {
    setName(e.target.value);
  };
  return (
    <form>
      <input type="test" name="username" value={name} onChange={handleChange} />
    </form>
  );
}
