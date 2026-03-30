// src/App.tsx
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './features/HomePage'; // Assure-toi que ce composant existe bien et a du contenu
import RosterPage from './features/RosterPage'; // Assure-toi que ce composant existe bien et a du contenu
import RecrutementPage from './features/RecrutementPage'; // Assure-toi que ce composant existe bien et a du contenu

import './index.css';
import {Route, Routes} from "react-router-dom";

function App() {
    return (
        <div className="app-container bg-background text-on-background font-manrope flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">
                <Routes>
                    <Route path="/" element={<HomePage />} /> {/* Doit afficher le contenu du Hero, etc. */}
                    <Route path="/roster" element={<RosterPage />} />
                    <Route path="/recrutement" element={<RecrutementPage />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}

export default App;