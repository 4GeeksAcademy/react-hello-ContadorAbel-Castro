import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import './styles/index.css';
import Contador from './js/components/index.jsx';

function Main() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setCount(c => c + 1), 1000);
    return () => clearInterval(id);
  }, []);

  const numerouno = Math.floor(count / 1) % 10;
  const numerodos = Math.floor(count / 10) % 10;
  const numerotres = Math.floor(count / 100) % 10;
  const numerocuatro = Math.floor(count / 1000) % 10;
  const numerocinco = Math.floor(count / 10000) % 10;
  const numeroseis = Math.floor(count / 100000) % 10;

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', background: '#f5f5f5', paddingTop: '6vh' }}>
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px'}}>
        <Contador
          numerouno={numerouno}
          numerodos={numerodos}
          numerotres={numerotres}
          numerocuatro={numerocuatro}
          numerocinco={numerocinco}
          numeroseis={numeroseis}
        />
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <Main />
);
