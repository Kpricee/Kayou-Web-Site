// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx'; // Importe le composant App
import './index.css'; // Les styles globaux

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App /> {/* Affiche le composant App */}
    </React.StrictMode>,
)