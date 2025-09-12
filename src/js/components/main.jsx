import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import './styles/index.css';
import ContadorUI from './index.jsx';

function Contador({ numerouno, numerodos, numerotres, numerocuatro, numerocinco, numeroseis }) {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', background: '#f5f5f5', paddingTop: '6vh' }}>
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px'}}>
  <ContadorUI
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


const root = ReactDOM.createRoot(document.getElementById('root'));
let contador = 0;

function digitos(contador) {
  return {
    numerouno: Math.floor(contador / 1) % 10,
    numerodos: Math.floor(contador / 10) % 10,
    numerotres: Math.floor(contador / 100) % 10,
    numerocuatro: Math.floor(contador / 1000) % 10,
    numerocinco: Math.floor(contador / 10000) % 10,
    numeroseis: Math.floor(contador / 100000) % 10,
  };
}

root.render(<Contador {...digitos(contador)} />);

setInterval(() => {
  contador += 1;
  root.render(<Contador {...digitos(contador)} />);
}, 1000);
