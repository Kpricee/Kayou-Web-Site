// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css'; // Styles globaux avec Tailwind
import './App.css'; // Si vous avez des styles spécifiques à App.tsx
import { BrowserRouter } from 'react-router-dom'; // Pour le routing

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>,
);