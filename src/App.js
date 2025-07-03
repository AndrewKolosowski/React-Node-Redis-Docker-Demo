import React, { useState } from 'react';

function App() {
  const [msg, setMsg] = useState('');

  const handleClick = async () => {
    // Call your backend REST API
    const res = await fetch('http://localhost:4000/text');
    const data = await res.json();
    setMsg(data.text); // This will be "hello world"
  };

  return (
    <div style={{ padding: 40 }}>
      <button onClick={handleClick}>Click Me</button>
      <p>{msg}</p>
    </div>
  );
}

export default App;