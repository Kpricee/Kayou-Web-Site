// src/features/QuestsPage.tsx
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'; // Pour le bouton de retour

function QuestsPage() {
    useEffect(() => {
        document.title = "Guilde KAYOU | Quêtes Actuelles";
    }, []);

    return (
        <div className="container mx-auto px-8 py-12">
            <h1 className="text-5xl font-noto-serif font-bold text-primary text-center mb-6">Quêtes Actuelles</h1>
            <p className="text-lg text-white/70 text-center max-w-3xl mx-auto mb-12">Découvrez les missions en cours et rejoignez vos frères d'armes pour accomplir les objectifs de la guilde.</p>

            {/* Section pour lister les quêtes */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {/* Exemple de quête 1 */}
                <div className="bg-surface-container-high p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
                    <span className="material-symbols-outlined text-secondary text-4xl mb-4">terrain</span>
                    <h3 className="text-3xl font-noto-serif font-bold text-secondary mb-3">Exploration du Diviseur Sud</h3>
                    <p className="text-white/70 mb-4 text-sm">Collecter 200 kg de Granite Brut pour le raffineur du Sanctuaire.</p>
                    <div className="flex justify-between items-center text-xs font-bold uppercase text-slate-500 mt-6">
                        <span>Statut: En cours</span>
                        <span className="text-secondary">4h 12m Left</span>
                    </div>
                </div>

                {/* Exemple de quête 2 */}
                <div className="bg-surface-container-high p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
                    <span className="material-symbols-outlined text-primary text-4xl mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>token</span>
                    <h3 className="text-3xl font-noto-serif font-bold text-primary mb-3">Trésors des Profondeurs</h3>
                    <p className="text-white/70 mb-4 text-sm">Trouver 5 Fragments d'Artefact Ancien dans les Ruines Oubliées.</p>
                    <div className="flex justify-between items-center text-xs font-bold uppercase text-slate-500 mt-6">
                        <span>Statut: En attente</span>
                        <span className="text-primary/80">2 jours Left</span>
                    </div>
                </div>

                {/* Exemple de quête 3 */}
                <div className="bg-surface-container-high p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
                    <span className="material-symbols-outlined text-tertiary text-4xl mb-4">auto_stories</span>
                    <h3 className="text-3xl font-noto-serif font-bold text-tertiary mb-3">Le Savoir Perdu</h3>
                    <p className="text-white/70 mb-4 text-sm">Décrypter les parchemins trouvés dans la Bibliothèque Interdite.</p>
                    <div className="flex justify-between items-center text-xs font-bold uppercase text-slate-500 mt-6">
                        <span>Statut: Terminé</span>
                        <span className="text-green-500">Completed</span>
                    </div>
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

export default QuestsPage;