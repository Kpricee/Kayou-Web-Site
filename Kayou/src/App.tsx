// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Pour la navigation

// Importez vos composants
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './features/HomePage'; // Créez ce fichier

// Assurez-vous que main.tsx importe bien index.css (ce qui est fait par défaut avec Vite)
// import './index.css'; // Déjà importé dans main.tsx par défaut

function App() {
    return (
        <Router> {/* Le routeur englobe toute l'application */}
            <div className="app-container bg-[#0e1419] text-[#dde3eb] font-manrope flex flex-col min-h-screen">
                <Header />
                <main className="flex-1 pt-20 pb-40"> {/* flex-1 fait que main prend toute la place dispo */}
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        {/* <Route path="/roster" element={<RosterPage />} /> */}
                        {/* <Route path="/recrutement" element={<RecrutementPage />} /> */}
                        {/* Ajoutez ici vos autres routes */}
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;