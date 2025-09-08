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

  const numeroUno = Math.floor(count / 1) % 10;
  const numeroDos = Math.floor(count / 10) % 10;
  const numeroTres = Math.floor(count / 100) % 10;
  const numeroCuatro = Math.floor(count / 1000) % 10;
  const numeroCinco = Math.floor(count / 10000) % 10;
  const numeroSeis = Math.floor(count / 100000) % 10;

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', background: '#f5f5f5', paddingTop: '6vh' }}>
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px'}}>
        <Contador
          numeroUno={numeroUno}
          numeroDos={numeroDos}
          numeroTres={numeroTres}
          numeroCuatro={numeroCuatro}
          numeroCinco={numeroCinco}
          numeroSeis={numeroSeis}
        />
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
