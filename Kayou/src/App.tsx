// src/App.tsx
import React from 'react';
import './App.css'; // Pour les styles spécifiques à ce composant (optionnel)

function App() {
    return (
        <div className="app-container">
            {/* Ici, on mettra le Header, le contenu principal, le Footer */}
            <header>
                <h1>Bienvenue sur le Site de la Guilde !</h1>
            </header>
            <main>
                <p>Le contenu principal de votre site viendra ici.</p>
            </main>
            <footer>
                <p>&copy; 2026 Kayou</p>
            </footer>
        </div>
    );
}

export default App;