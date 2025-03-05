import React from 'react';
import ReactDOM from 'react-dom/client';  // Nota el cambio aquí
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));  // Usamos createRoot
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);