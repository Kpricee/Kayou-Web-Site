// src/components/Header.tsx
import React from 'react';
import { Link } from 'react-router-dom'; // Importez le composant Link
import logoImage from '../assets/logo.png';

function Header() {
    return (
        <header className="bg-black/20 p-4 sticky top-0 z-50 border-b border-white/10 backdrop-blur-sm">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <img src={logoImage} alt="Logo de la guilde" className="h-10 mr-4" />
                    <Link to="/" className="text-2xl font-bold text-secondary font-noto-serif no-underline hover:text-primary">The Lithic Guild</Link> {/* Utilisez Link pour le logo */}
                </div>
                <nav>
                    <ul className="flex space-x-6">
                        {/* Utilisez Link pour tous vos liens de navigation */}
                        <li><Link to="/" className="text-primary font-bold hover:text-secondary">Dashboard</Link></li>
                        <li><Link to="/roster" className="text-white/70 hover:text-secondary">Directory</Link></li>
                        <li><Link to="/recrutement" className="text-white/70 hover:text-secondary">Recrutement</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;