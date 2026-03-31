// src/features/AuthPage.tsx
import React, { useState } from 'react';
import { supabase } from '../main'; // Assure-toi que supabase est bien exporté
import { useNavigate } from 'react-router-dom';

interface AuthPageProps {
    isOpen: boolean;        // Gère l'affichage du modal
    onClose: () => void;    // Fonction pour fermer le modal
}

function AuthPage({ isOpen, onClose }: AuthPageProps) {
    // --- States pour les champs du formulaire ---
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [isLoginView, setIsLoginView] = useState(true); // Pour basculer entre login et signup
    const [submitMessage, setSubmitMessage] = useState('');

    const navigate = useNavigate();

    // --- Gestionnaires pour les champs ---
    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };
    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    // --- Fonctions de soumission ---
    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });
        setLoading(false);
        if (error) {
            setError(error.message);
        } else {
            onClose(); // Ferme le modal après connexion réussie
            navigate('/'); // Redirige vers l'accueil
        }
    };

    const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setSubmitMessage('');

        if (password.length < 6) {
            setError("Le mot de passe doit faire au moins 6 caractères.");
            setLoading(false);
            return;
        }

        const { error } = await supabase.auth.signUp({
            email,
            password,
        });
        setLoading(false);
        if (error) {
            setError(error.message);
        } else {
            setSubmitMessage('Inscription réussie ! Vérifie tes mails pour confirmer ton compte.');
            // On pourrait aussi réinitialiser les champs ici
        }
    };

    // Si le modal n'est pas ouvert, on ne rend rien
    if (!isOpen) {
        return null;
    }

    return (
        // --- L'overlay qui couvre toute la page et assombrit le fond ---
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm">

            {/* --- Le conteneur du modal, centré et stylisé --- */}
            <div className="relative w-full max-w-md p-8 bg-surface-container-high rounded-xl shadow-xl border border-outline-variant/30">

                {/* Bouton pour fermer le modal */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors"
                    aria-label="Fermer le modal"
                >
                    <span className="material-symbols-outlined text-2xl">close</span>
                </button>

                {/* Contenu conditionnel : message de succès ou formulaire */}
                {submitMessage ? (
                    <div className="text-center p-6 border-2 border-green-500/30 rounded-lg">
                        <p className="text-lg text-green-400 font-bold">Succès !</p>
                        <p className="text-white/70 mt-2">{submitMessage}</p>
                        <button
                            onClick={() => {
                                setIsLoginView(true);
                                setSubmitMessage('');
                            }}
                            className="mt-4 text-primary hover:underline transition-colors"
                        >
                            Retour à la connexion
                        </button>
                    </div>
                ) : isLoginView ? (
                    // --- Vue Connexion ---
                    <form onSubmit={handleLogin} className="space-y-6"> {/* Ajout de 'space-y-6' pour espacer les éléments */}
                        <h2 className="text-3xl font-noto-serif font-bold text-primary text-center">Connexion</h2>

                        <div>
                            <label htmlFor="email" className="block text-lg font-medium text-primary mb-1">Email</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={handleEmailChange}
                                required
                                className="w-full p-3 rounded-lg bg-surface-container-low border border-surface-container-high focus:outline-none focus:ring-2 focus:ring-primary"
                                placeholder="votre@email.com"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-lg font-medium text-primary mb-1">Mot de passe</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={handlePasswordChange}
                                required
                                className="w-full p-3 rounded-lg bg-surface-container-low border border-surface-container-high focus:outline-none focus:ring-2 focus:ring-primary"
                                placeholder="Votre mot de passe"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className={`pebble-button px-8 py-3 rounded-full font-bold uppercase text-sm flex items-center gap-2 mx-auto shadow-md w-full justify-center ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                            style={{ backgroundColor: 'var(--color-secondary)', color: '#0e1419' }}
                        >
                            {loading ? 'Connexion...' : 'Se connecter'}
                        </button>

                        <p className="text-center text-sm">Pas encore de compte ? <button type="button" onClick={() => setIsLoginView(false)} className="text-primary hover:underline">S'inscrire</button></p>

                        {error && <p className="text-red-500 text-center">{error}</p>}
                    </form>
                ) : (
                    // --- Vue Inscription ---
                    <form onSubmit={handleSignUp} className="space-y-6">
                        <h2 className="text-3xl font-noto-serif font-bold text-primary text-center">Inscription</h2>

                        <div>
                            <label htmlFor="email" className="block text-lg font-medium text-primary mb-1">Email</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={handleEmailChange}
                                required
                                className="w-full p-3 rounded-lg bg-surface-container-low border border-surface-container-high focus:outline-none focus:ring-2 focus:ring-primary"
                                placeholder="votre@email.com"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-lg font-medium text-primary mb-1">Mot de passe</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={handlePasswordChange}
                                required
                                className="w-full p-3 rounded-lg bg-surface-container-low border border-surface-container-high focus:outline-none focus:ring-2 focus:ring-primary"
                                placeholder="Votre mot de passe (minimum 6 caractères)"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className={`pebble-button px-8 py-3 rounded-full font-bold uppercase text-sm flex items-center gap-2 mx-auto shadow-md w-full justify-center ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                            style={{ backgroundColor: 'var(--color-primary)', color: '#0e1419' }}
                        >
                            {loading ? 'Inscription...' : 'S\'inscrire'}
                        </button>

                        <p className="text-center text-sm">Déjà un compte ? <button type="button" onClick={() => setIsLoginView(true)} className="text-primary hover:underline">Se connecter</button></p>

                        {error && <p className="text-red-500 text-center">{error}</p>}
                    </form>
                )}
            </div>
        </div>
    );
}

export default AuthPage;