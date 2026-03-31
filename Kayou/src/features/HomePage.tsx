// src/features/HomePage.tsx
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'; // Utilisé pour les liens internes

// --- IMPORTS CORRIGÉS POUR TOUTES LES IMAGES ---
// Logo depuis src/assets/
import logoImage from '../assets/logo.png';
// Photos des membres depuis src/assets/
import kpricePic from '../assets/kprice.png';
import juliettePic from '../assets/juliette.png';
import leFanalierPic from '../assets/le-fanalier.png';
// Icône de groupe depuis src/assets/

function HomePage() {
    useEffect(() => {
        document.title = "Guilde KAYOU | Accueil";
    }, []);

    return (
        <div className="home-page-content">

            {/* Section Hero */}
            <section className="relative h-[70vh] w-full flex items-center justify-center overflow-hidden group">
                <div className="absolute inset-0 z-0" style={{
                    background: `linear-gradient(180deg, rgba(14,20,25,0.8) 0%, rgba(38,43,51,0.6) 50%, rgba(14,20,25,0.8) 100%)`
                }}>
                    <div className="absolute inset-0 opacity-50 animate-pulse">
                        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-secondary rounded-full blur-sm"></div>
                        <div className="absolute top-1/2 left-1/3 w-2 h-2 bg-primary rounded-full blur-sm animation-delay-200"></div>
                        <div className="absolute bottom-1/4 right-1/4 w-4 h-4 bg-secondary rounded-full blur-sm animation-delay-400"></div>
                        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-primary rounded-full blur-sm animation-delay-600"></div>
                    </div>
                </div>

                <div className="relative z-20 text-center px-8 max-w-3xl">
                    <div className="flex justify-center items-center mb-6">
                        {/* Utilisation de logoImage importé */}
                        <img src={logoImage} alt="Logo de la Guilde KAYOU" className="h-32 w-32 object-contain mx-auto" />
                    </div>
                    <h1 className="text-7xl font-black font-noto-serif text-white tracking-tight leading-tight mb-4 drop-shadow-lg">KAYOU</h1>
                    <p className="text-xl text-white/80 leading-relaxed mb-10">Unis par la pierre, guidés par la découverte. Nous ne laissons aucun Kayou derrière.</p>
                    <Link to="/recrutement" className="cta-button-hero pebble-button bg-secondary text-black px-10 py-5 rounded-full font-black uppercase tracking-widest text-lg flex items-center gap-3 mx-auto shadow-xl hover:shadow-2xl transition-shadow duration-300">
                        Rejoignez-nous <span className="material-symbols-outlined text-2xl">arrow_forward</span>
                    </Link>
                </div>
            </section>

            {/* Section "Nos Principes Fondamentaux" */}
            <section className="container mx-auto px-8 py-20 space-y-12 bg-surface-container-low rounded-xl shadow-xl -mt-12 relative z-10">
                <div className="text-center">
                    <h2 className="text-5xl font-noto-serif font-bold text-primary mb-6">Nos Principes Fondamentaux</h2>
                    <p className="text-lg text-white/70 max-w-4xl mx-auto mb-12">Forts de notre histoire et unis par une quête commune, nous adhérons à des valeurs qui définissent qui nous sommes.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Principe 1: Entraide */}
                    <div className="text-center p-6 bg-surface-container-high rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                        <span className="material-symbols-outlined text-primary text-5xl mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>handshake</span>
                        <h3 className="text-3xl font-noto-serif font-bold text-primary mb-3">L'Entraide</h3>
                        <p className="text-white/70">Solides et solidaires, nous aidons chaque membre, sans jamais laisser personne derrière.</p>
                    </div>
                    {/* Principe 2: Respect */}
                    <div className="text-center p-6 bg-surface-container-high rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                        <span className="material-symbols-outlined text-secondary text-5xl mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                        <h3 className="text-3xl font-noto-serif font-bold text-secondary mb-3">Le Respect</h3>
                        <p className="text-white/70">Aucun comportement toxique. La bienveillance guide nos interactions.</p>
                    </div>
                    {/* Principe 3: Plaisir de jouer */}
                    <div className="text-center p-6 bg-surface-container-high rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                        <span className="material-symbols-outlined text-tertiary text-5xl mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>gamepad</span>
                        <h3 className="text-3xl font-noto-serif font-bold text-tertiary mb-3">Le Plaisir Ensemble</h3>
                        <p className="text-white/70">Nous sommes ici pour nous amuser, à notre rythme. L'important est de participer.</p>
                    </div>
                </div>
            </section>

            {/* Section "Notre Histoire" avec les rôles clés */}
            <section className="container mx-auto px-8 py-20 space-y-12">
                <div className="text-center">
                    <h2 className="text-5xl font-noto-serif font-bold text-primary mb-6">Notre Histoire</h2>
                    <p className="text-lg text-white/70 max-w-4xl mx-auto mb-8">
                        Nés de fragments dispersés dans l'Aincrad, nous, les Kayou, avons trouvé notre force non pas dans la puissance individuelle, mais dans l'unité. Notre quête sacrée du Saint Kayou est devenue le symbole de notre promesse : ne jamais abandonner un frère ou une sœur de guilde. Nous sommes une alliance bâtie sur la confiance et la solidarité, une muraille indestructible face à l'adversité.
                    </p>
                    <p className="text-lg text-white/70 max-w-4xl mx-auto mb-8">
                        Chaque membre porte une étincelle de ce Saint Kayou, et ensemble, nous construisons un monde où personne n'est laissé seul. Notre refuge est notre force, notre confiance est notre arme.
                    </p>

                    {/* Section pour présenter les membres clés (Chef, Second) */}
                    <div className="mt-12 flex flex-col md:flex-row justify-center items-center gap-12">
                        {/* Membre 1: Kprice (Second) */}
                        <div className="flex flex-col items-center p-6 bg-surface-container-high rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                            {/* Chemin corrigé pour kprice.png (doit être dans src/assets/) */}
                            <img src={kpricePic} alt="Photo de Kprice" className="h-32 w-32 rounded-full object-cover mb-4 border-2 border-secondary/40"/>
                            <h3 className="text-3xl font-noto-serif font-bold text-secondary mb-2">KPrice</h3>
                            <p className="text-lg text-secondary/80 mb-2 font-bold uppercase tracking-wide">Second</p>
                            <p className="text-white/70 text-sm">Le pilier de notre communauté.</p>
                        </div>
                        {/* Membre 2: JulietteNalda (Chef de Guilde) */}
                        <div className="flex flex-col items-center p-6 bg-primary/10 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-2 border-primary/40">
                            {/* Chemin corrigé pour juliette.png (doit être dans src/assets/) */}
                            <img src={juliettePic} alt="Photo de JulietteNalda" className="h-32 w-32 rounded-full object-cover mb-4 shadow-lg"/>
                            <h3 className="text-3xl font-noto-serif font-bold text-primary mb-2">JulietteNalda</h3>
                            <p className="text-lg text-primary/80 mb-2 font-bold uppercase tracking-wide">Chef de Guilde</p>
                            <p className="text-white/70 text-sm">La visionnaire qui guide et mène notre projet.</p>
                        </div>

                        {/* Membre 3: LeFanalier (Second) */}
                        <div className="flex flex-col items-center p-6 bg-surface-container-high rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                            {/* Chemin corrigé pour le-fanalier.png (doit être dans src/assets/) */}
                            <img src={leFanalierPic} alt="Photo de LeFanalier" className="h-32 w-32 rounded-full object-cover mb-4 border-2 border-secondary/40"/>
                            <h3 className="text-3xl font-noto-serif font-bold text-secondary mb-2">LeFanalier</h3>
                            <p className="text-lg text-secondary/80 mb-2 font-bold uppercase tracking-wide">Second</p>
                            <p className="text-white/70 text-sm">Un vieu mage.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section "Nos Projets" */}
            <section className="container mx-auto px-8 py-20 space-y-12 bg-surface-container-low rounded-xl shadow-xl">
                <div className="text-center">
                    <h2 className="text-5xl font-noto-serif font-bold text-secondary mb-6">Nos Projets : Unification et Structuration</h2>
                    <p className="text-lg text-white/70 max-w-4xl mx-auto mb-12">
                        KAYOU ne cherche pas à dominer, mais à servir, à guider — et à offrir une base solide pour ceux qui le souhaitent. Voici les deux projets clés que nous mettons en place pour avancer ensemble.
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Projet 1: Devenir une Référence */}
                    <div className="bg-surface-container-high p-8 rounded-lg flex flex-col items-center text-center shadow-md hover:shadow-xl transition-shadow duration-300">
                        <span className="material-symbols-outlined text-primary text-5xl mb-6">workspace_premium</span>
                        <h3 className="text-3xl font-noto-serif font-bold text-primary mb-4">Devenir une Référence</h3>
                        <p className="text-white/70 mb-6">Un réseau de savoir-faire et de confiance pour guider les joueurs dans l'Aincrad.</p>
                        <ul className="list-disc list-inside text-white/60 text-left mx-auto max-w-sm">
                            <li>Conseils sur les quêtes, PNJ, farm, stratégies.</li>
                            <li>Un guide collectif où la force est dans l'union.</li>
                            <li>Solidarité active : soutien concret, même hors combat.</li>
                        </ul>
                        <Link to="/recrutement" className="mt-8 pebble-button bg-primary text-black px-8 py-4 rounded-full font-bold uppercase text-sm flex items-center gap-2 shadow-md">
                            Rejoignez KYOU <span className="material-symbols-outlined">add</span>
                        </Link>
                    </div>

                    {/* Projet 2: Système de Quête par Ticket */}
                    <div className="bg-surface-container-high p-8 rounded-lg flex flex-col items-center text-center shadow-md hover:shadow-xl transition-shadow duration-300">
                        <span className="material-symbols-outlined text-secondary text-5xl mb-6">confirmation_number</span>
                        <h3 className="text-3xl font-noto-serif font-bold text-secondary mb-4">Système de Quête par Ticket</h3>
                        <p className="text-white/70 mb-6">Une alliance structurée pour rendre les quêtes accessibles et équitables.</p>
                        <ul className="list-disc list-inside text-white/60 text-left mx-auto max-w-sm">
                            <li>Création libre de quêtes : objectif, date, récompense.</li>
                            <li>Soutien KYOU : accompagnement et conseils.</li>
                            <li>Récompenses équitables et validation.</li>
                        </ul>
                        <Link to="/recrutement" className="mt-8 pebble-button bg-secondary text-black px-8 py-4 rounded-full font-bold uppercase text-sm flex items-center gap-2 shadow-md">
                            Participez <span className="material-symbols-outlined">check_circle</span>
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default HomePage;