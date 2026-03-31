// src/components/Header.tsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { supabase } from '../main';
import type { Session } from '@supabase/supabase-js'; // <--- CORRECTION ICI
import logoImage from '../assets/logo.png';

interface HeaderProps {
    session: Session | null;
    onLoginClick: () => void;
}

function Header({ session, onLoginClick }: HeaderProps) {
    const location = useLocation();

    const handleLogout = async () => {
        const { error } = await supabase.auth.signOut();
        if (error) console.error('Erreur déconnexion:', error.message);
    };

    const isActive = (path: string) => {
        if (path === '/') {
            return location.pathname === '/' ? 'text-primary font-bold border-b-2 border-primary pb-1' : 'text-white/70 hover:text-secondary';
        }
        return location.pathname.startsWith(path) ? 'text-primary font-bold border-b-2 border-primary pb-1' : 'text-white/70 hover:text-secondary';
    };

    return (
        <header className="bg-black/20 p-4 sticky top-0 z-40 border-b border-white/10 backdrop-blur-sm">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <img src={logoImage} alt="Logo de la Guilde KAYOU" className="h-10 mr-4" />
                    <Link to="/" className="text-2xl font-bold text-secondary font-noto-serif no-underline hover:text-primary">KAYOU</Link>
                </div>

                <nav>
                    <ul className="flex items-center space-x-8">
                        <li><Link to="/" className={`${isActive('/')} transition-all duration-300 font-noto-serif tracking-tight`}>Accueil</Link></li>
                        <li><Link to="/roster" className={`${isActive('/roster')} transition-all duration-300 font-noto-serif tracking-tight`}>Roster</Link></li>
                        <li><Link to="/recrutement" className={`${isActive('/recrutement')} transition-all duration-300 font-noto-serif tracking-tight`}>Recrutement</Link></li>
                        <li><Link to="/wiki" className={`${isActive('/wiki')} transition-all duration-300 font-noto-serif tracking-tight`}>Wiki</Link></li>
                        <li><Link to="/quests" className={`${isActive('/quests')} transition-all duration-300 font-noto-serif tracking-tight`}>Quêtes</Link></li>
                        <li><Link to="/objectives" className={`${isActive('/objectives')} transition-all duration-300 font-noto-serif tracking-tight`}>Objectifs</Link></li>
                        <li><Link to="/alliances" className={`${isActive('/alliances')} transition-all duration-300 font-noto-serif tracking-tight`}>Alliances</Link></li>
                    </ul>
                </nav>

                <div className="flex items-center gap-4 border-l border-outline-variant/20 pl-8">
                    {session ? (
                        <div className="flex items-center gap-4">
                            <span className="text-white/80 text-sm font-medium">
                                {session.user.email?.split('@')[0]}
                            </span>
                            <button
                                onClick={handleLogout}
                                className="pebble-button bg-red-500/20 hover:bg-red-500/40 text-red-400 border border-red-500/50 px-6 py-2 rounded-full font-bold uppercase text-xs transition-all duration-300"
                            >
                                <span className="material-symbols-outlined text-base align-middle mr-1">logout</span>
                                Déconnexion
                            </button>
                        </div>
                    ) : (
                        <button
                            onClick={onLoginClick}
                            className="pebble-button bg-primary text-black px-6 py-3 rounded-full font-bold uppercase text-sm flex items-center gap-2 shadow-md hover:shadow-lg transition-shadow duration-300"
                        >
                            <span className="material-symbols-outlined text-base">login</span>
                            Se connecter
                        </button>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;