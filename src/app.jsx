import React from 'react'; // 유무 무슨차이? => 원래 없었음
import './app.css';

function App() {
  const name = 'ellie';
  return (
    <>
      <h1>Hello</h1>
      {name && <h1>Hello! {name}:)</h1>}
      {['❤️', '🍎'].map((item) => (
        <h1>{item}</h1>
      ))}
    </>
  );
}

export default App;
