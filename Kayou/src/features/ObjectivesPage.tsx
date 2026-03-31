// src/features/ObjectivesPage.tsx
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'; // Pour le bouton de retour

function ObjectivesPage() {
    useEffect(() => {
        document.title = "Guilde KAYOU | Objectifs";
    }, []);

    return (
        <div className="container mx-auto px-8 py-12">
            <h1 className="text-5xl font-noto-serif font-bold text-secondary text-center mb-6">Nos Objectifs</h1>
            <p className="text-lg text-white/70 text-center max-w-3xl mx-auto mb-16">Ce que nous visons ensemble pour faire grandir notre guilde.</p>

            {/* Liste des objectifs */}
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Objectif 1 */}
                <div className="bg-surface-container-high p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
                    <span className="material-symbols-outlined text-primary text-4xl mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>military_tech</span>
                    <h3 className="text-3xl font-noto-serif font-bold text-primary mb-3">Dominer le PvE</h3>
                    <p className="text-white/70 mb-4">Vaincre les boss de raid les plus redoutables et progresser dans les donjons les plus difficiles.</p>
                    <p className="text-sm text-primary/70 italic">Priorité: Élevée</p>
                </div>

                {/* Objectif 2 */}
                <div className="bg-surface-container-high p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
                    <span className="material-symbols-outlined text-secondary text-4xl mb-4">leaderboard</span>
                    <h3 className="text-3xl font-noto-serif font-bold text-secondary mb-3">Dominer le PvP</h3>
                    <p className="text-white/70 mb-4">Participer activement aux champs de bataille et aux arènes pour prouver notre valeur.</p>
                    <p className="text-sm text-secondary/70 italic">Priorité: Moyenne</p>
                </div>

                {/* Objectif 3 */}
                <div className="bg-surface-container-high p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
                    <span className="material-symbols-outlined text-tertiary text-4xl mb-4">groups</span>
                    <h3 className="text-3xl font-noto-serif font-bold text-tertiary mb-3">Développer la Communauté</h3>
                    <p className="text-white/70 mb-4">Faire grandir notre guilde, accueillir de nouveaux membres et maintenir une ambiance positive.</p>
                    <p className="text-sm text-tertiary/70 italic">Priorité: Élevée</p>
                </div>
            </div>

            {/* Bouton pour retourner à l'accueil */}
            <div className="text-center mt-16">
                <Link to="/" className="pebble-button bg-primary text-black px-8 py-4 rounded-full font-bold uppercase text-sm flex items-center gap-2 mx-auto shadow-md">
                    Retour à l'accueil <span className="material-symbols-outlined">arrow_back</span>
                </Link>
            </div>
        </div>
    );
}

export default ObjectivesPage;