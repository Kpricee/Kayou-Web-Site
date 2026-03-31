// src/App.tsx
import React, { useState, useEffect } from 'react'; // Ajoute useEffect
import { Routes, Route, Navigate } from 'react-router-dom'; // Ajoute Navigate pour la redirection
import { supabase } from './main'; // Importe le client Supabase depuis main.tsx
import type { Session } from '@supabase/supabase-js'; // <--- CORRECTION ICI

// --- Importe tes composants de structure ---
import Header from './components/Header';
import Footer from './components/Footer';
import AuthPage from './features/AuthPage';

// --- Importe tes composants de page ---
import HomePage from './features/HomePage';
import RosterPage from './features/RosterPage';
import RecrutementPage from './features/RecrutementPage';
import WikiPage from './features/WikiPage';
import QuestsPage from './features/QuestsPage';
import ObjectivesPage from './features/ObjectivesPage';
import AlliancesPage from './features/AlliancesPage';

// --- Styles globaux ---
import './index.css';

// Un composant simple pour créer des routes protégées
const ProtectedRoute = ({ session, children }: { session: Session | null; children: JSX.Element }) => {
    if (!session) {
        // Redirige vers la page d'accueil si l'utilisateur n'est pas connecté
        return <Navigate to="/" replace />;
    }
    return children; // Affiche le contenu de la page si l'utilisateur est connecté
};

function App() {
    const [session, setSession] = useState<Session | null>(null);
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const [loadingSession, setLoadingSession] = useState(true); // Pour éviter un "flash" au chargement

    // Gère la session utilisateur
    useEffect(() => {
        // Récupère la session existante au chargement initial
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session);
            setLoadingSession(false); // La session a été vérifiée
        });

        // Écoute les changements d'état d'authentification (connexion, déconnexion)
        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session);
        });

        // Nettoie l'écouteur quand le composant est démonté
        return () => subscription.unsubscribe();
    }, []);

    // Si la session est en cours de chargement, on peut afficher un loader ou rien
    if (loadingSession) {
        return (
            <div className="bg-background min-h-screen flex items-center justify-center">
                <p className="text-white">Chargement...</p>
            </div>
        );
    }

    return (
        <div className="app-container bg-background text-on-background font-manrope flex flex-col min-h-screen">

            {/* Le Header reçoit la session et une fonction pour ouvrir le modal */}
            <Header
                session={session}
                onLoginClick={() => setIsLoginModalOpen(true)}
            />

            {/* Le contenu principal */}
            <main className="flex-1">
                <Routes>
                    {/* Routes publiques accessibles à tous */}
                    <Route path="/" element={<HomePage />} />
                    <Route path="/roster" element={<RosterPage />} />
                    <Route path="/recrutement" element={<RecrutementPage />} />

                    {/* Routes protégées, accessibles uniquement si une session est active */}
                    <Route path="/wiki" element={<ProtectedRoute session={session}><WikiPage /></ProtectedRoute>} />
                    <Route path="/quests" element={<ProtectedRoute session={session}><QuestsPage /></ProtectedRoute>} />
                    <Route path="/objectives" element={<ProtectedRoute session={session}><ObjectivesPage /></ProtectedRoute>} />
                    <Route path="/alliances" element={<ProtectedRoute session={session}><AlliancesPage /></ProtectedRoute>} />

                    {/* Route "catch-all" : si aucune route ne correspond, redirige vers l'accueil */}
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </main>

            {/* Le Footer */}
            <Footer />

            {/* Le Modal d'Authentification ne s'affiche que si l'utilisateur n'est pas connecté */}
            {!session && (
                <AuthPage
                    isOpen={isLoginModalOpen}
                    onClose={() => setIsLoginModalOpen(false)}
                />
            )}
        </div>
    );
}

export default App;