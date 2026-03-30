// src/App.tsx
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './features/HomePage';
import RosterPage from './features/RosterPage'; // Créez ce fichier
import RecrutementPage from './features/RecrutementPage'; // Créez ce fichier

// Importez les styles globaux (si ce n'est pas déjà fait dans main.tsx)
import './index.css';
import {Route, Routes} from "react-router-dom";

function App() {
    return (
        <div className="app-container bg-background text-on-background font-manrope flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 pt-20 pb-40">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/roster" element={<RosterPage />} />
                    <Route path="/recrutement" element={<RecrutementPage />} />
                    {/* Ajoutez d'autres routes ici si nécessaire */}
                </Routes>
            </main>
            <Footer />
        </div>
    );
}

export default App;