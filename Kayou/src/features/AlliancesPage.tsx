// src/features/AlliancesPage.tsx
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'; // Pour le bouton de retour

function AlliancesPage() {
    useEffect(() => {
        document.title = "Guilde KAYOU | Alliances";
    }, []);

    return (
        <div className="container mx-auto px-8 py-12">
            <h1 className="text-5xl font-noto-serif font-bold text-primary text-center mb-6">Nos Alliances</h1>
            {/* Message simple indiquant que la page est en construction */}
            <p className="text-lg text-white/70 text-center max-w-3xl mx-auto mb-16">
                Nous forgeons des liens solides avec d'autres communautés pour renforcer notre présence et partager nos aventures. Cette section est en cours de construction, bientôt plus d'informations sur nos frères d'armes !
            </p>

            {/* Bouton pour retourner à l'accueil */}
            <div className="text-center mt-16">
                <Link to="/" className="pebble-button bg-primary text-black px-8 py-4 rounded-full font-bold uppercase text-sm flex items-center gap-2 mx-auto shadow-md">
                    Retour à l'accueil <span className="material-symbols-outlined">arrow_back</span>
                </Link>
            </div>
        </div>
    );
}

export default AlliancesPage;