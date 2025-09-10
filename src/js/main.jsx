import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';

function Main() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setCounter(c => c + 1), 1000);
    return () => clearInterval(id);
  }, []);

  const uno = Math.floor(counter / 1) % 10;
  const dos = Math.floor(counter / 10) % 10;
  const tres = Math.floor(counter / 100) % 10;
  const cuatro = Math.floor(counter / 1000) % 10;
  const cinco = Math.floor(counter / 10000) % 10;
  const seis = Math.floor(counter / 100000) % 10;

  const box = { display: 'inline-block', fontSize: '72px', lineHeight: '96px', background: '#101010', color: '#fff', padding: '8px 16px', margin: '3px', minWidth: '48px', textAlign: 'center' };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', paddingTop: '6vh', background: '#f5f5f5' }}>
      <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
        <div style={box}>{seis}</div>
        <div style={box}>{cinco}</div>
        <div style={box}>{cuatro}</div>
        <div style={box}>{tres}</div>
        <div style={box}>{dos}</div>
        <div style={box}>{uno}</div>
      </div>
    </div>
  );
} 

export default Main;
