// src/components/Header.tsx
import React from 'react';
import logoImage from '../assets/logo.png'; // Assurez-vous que logo.png est dans src/assets/

function Header() {
    return (
        <header className="bg-black/20 p-4 sticky top-0 z-50 border-b border-white/10 backdrop-blur-sm">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <img src={logoImage} alt="Logo de la guilde" className="h-10 mr-4" />
                    <a href="/" className="text-2xl font-bold text-orange-500 font-noto-serif no-underline hover:text-purple-700">NomDeVotreGuilde</a>
                </div>
                <nav>
                    <ul className="flex space-x-6">
                        <li><a href="/" className="text-white font-bold hover:text-orange-500">Accueil</a></li>
                        <li><a href="/roster" className="text-white/70 hover:text-orange-500">Roster</a></li>
                        <li><a href="/recrutement" className="text-white/70 hover:text-orange-500">Recrutement</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;