// src/index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx'; // Importa el componente App
import './styles/index.css'; // Asegúrate de que esta ruta sea correcta

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);