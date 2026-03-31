// src/features/RecrutementPage.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Pour le bouton de retour ou vers Discord

function RecrutementPage() {
    // State pour gérer les valeurs du formulaire
    const [formData, setFormData] = useState({
        nom: '',
        classe: '',
        experience: '',
        message: '',
    });
    const [submitMessage, setSubmitMessage] = useState('');

    // Gestionnaire pour mettre à jour les states quand l'utilisateur tape dans les champs
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    // Gestionnaire pour la soumission du formulaire
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Empêche le rechargement de la page

        // Ici, tu peux ajouter la logique pour envoyer les données à un backend ou une API
        // Pour l'instant, on simule une soumission avec un message de succès.

        console.log('Données du formulaire :', formData); // Afficher dans la console du navigateur

        // Simuler un message de succès et une redirection vers Discord
        setSubmitMessage('Merci pour ta candidature ! Tu seras redirigé vers notre Discord pour la suite.');

        // Optionnel : Redirection automatique après un délai
        setTimeout(() => {
            window.open('https://discord.gg/YE6bFJH4Uv', '_blank'); // Remplace par ton lien Discord
        }, 3000); // Redirige après 3 secondes
    };

    return (
        <div className="container mx-auto px-8 py-12 text-center">
            <h1 className="text-5xl font-noto-serif font-bold text-primary mb-6">Recrutement Ouvert</h1>
            <p className="text-lg text-white/70 max-w-3xl mx-auto mb-12">Rejoins l'aventure KAYOU ! Nous recherchons des joueurs passionnés et motivés pour compléter notre effectif.</p>

            {/* Formulaire de Candidature */}
            <div className="max-w-3xl mx-auto bg-surface-container-high p-8 rounded-xl shadow-xl">
                {submitMessage ? (
                    <div className="text-center p-6 mb-8 border-2 border-green-500/30 rounded-lg">
                        <p className="text-lg text-green-400 font-bold">Succès !</p>
                        <p className="text-white/70 mt-2">{submitMessage}</p>
                        <Link to="/" className="mt-4 inline-block text-primary hover:text-secondary transition-colors">Retour à l'accueil</Link>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit}>
                        {/* Champ Nom */}
                        <div className="mb-6 text-left">
                            <label htmlFor="nom" className="block text-lg font-medium text-primary mb-2">Nom de ton personnage</label>
                            <input
                                type="text"
                                id="nom"
                                name="nom"
                                value={formData.nom}
                                onChange={handleChange}
                                required
                                className="w-full p-3 rounded-lg bg-surface-container-low border border-surface-container-high focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                placeholder="Ex: Arathorn"
                            />
                        </div>

                        {/* Champ Classe / Spécialisation */}
                        <div className="mb-6 text-left">
                            <label htmlFor="classe" className="block text-lg font-medium text-primary mb-2">Ta classe / spécialisation</label>
                            <select
                                id="classe"
                                name="classe"
                                value={formData.classe}
                                onChange={handleChange}
                                required
                                className="w-full p-3 rounded-lg bg-surface-container-low border border-surface-container-high focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent appearance-none"
                            >
                                <option value="" disabled>Sélectionne ta classe</option>
                                <option value="Guerrier">Guerrier</option>
                                <option value="Mage">Mage</option>
                                <option value="Archer">Archer</option>
                                <option value="Shaman">Shaman</option>
                                <option value="Assassin">Assassin</option>
                            </select>
                        </div>

                        {/* Champ Expérience / Style de jeu */}
                        <div className="mb-6 text-left">
                            <label htmlFor="experience" className="block text-lg font-medium text-primary mb-2">Ton style de jeu</label>
                            <input
                                type="text"
                                id="experience"
                                name="experience"
                                value={formData.experience}
                                onChange={handleChange}
                                required
                                className="w-full p-3 rounded-lg bg-surface-container-low border border-surface-container-high focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                placeholder="Ex: PvE, PvP, Raid Leader, Casual..."
                            />
                        </div>

                        {/* Champ Message / Motivation */}
                        <div className="mb-8 text-left">
                            <label htmlFor="message" className="block text-lg font-medium text-primary mb-2">Pourquoi KAYOU ?</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                className="w-full p-3 rounded-lg bg-surface-container-low border border-surface-container-high focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                                placeholder="Dis-nous pourquoi tu veux nous rejoindre !"
                            ></textarea>
                        </div>

                        {/* Bouton de soumission */}
                        <button
                            type="submit"
                            className="pebble-button bg-primary text-black px-10 py-4 rounded-full font-bold uppercase text-lg flex items-center gap-3 mx-auto shadow-lg hover:shadow-2xl transition-shadow duration-300"
                        >
                            Envoyer ma candidature <span className="material-symbols-outlined text-2xl">send</span>
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
}

export default RecrutementPage;