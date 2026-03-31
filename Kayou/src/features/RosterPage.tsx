// src/features/RosterPage.tsx
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'; // Pour le lien de retour

// Importations des images des membres (doivent être dans src/assets/)
import kpricePic from '../assets/kprice.png';
import juliettePic from '../assets/juliette.png';
import leFanalierPic from '../assets/le-fanalier.png';
import dramaQueenPic from '../assets/Drama.png';
import loulousvillePic from '../assets/Enyox.jpg';
import faizoxPic from '../assets/FaizoxTV.jpg';
import shishiPic from '../assets/Shishi.png';
import dieuObitoPic from '../assets/Obito.jpg'; // Assure-toi que le nom est exact
import lamixPic from '../assets/Lamix.png';
import kanashiiPic from '../assets/Kana.png';
import AstryxPic from '../assets/Astryx.png';
import MakiPic from '../assets/Maki.png';

// Importation de notre composant MemberCard
import MemberCard from '../components/MemberCard';

function RosterPage() {
    useEffect(() => {
        document.title = "Guilde KAYOU | Roster";
    }, []);

    // Liste des membres (vous pouvez ajouter/modifier ici)
    const members = [
        { imageUrl: juliettePic, name: 'JulietteNalda', role: 'Chef de Guilde', description: 'La visionnaire qui guide notre destinée.' },
        { imageUrl: kpricePic, name: 'KPrice', role: 'Second', description: 'Le stratège et soutien indispensable.' },
        { imageUrl: leFanalierPic, name: 'LeFanalier', role: 'Second', description: 'Le pilier de notre communauté.' },
        { imageUrl: dramaQueenPic, name: 'DramaQueen', role: 'Membre', description: 'Recruteur Kayou.' },
        { imageUrl: loulousvillePic, name: 'Loulousville', role: 'Membre', description: 'Expert en événements.' },
        { imageUrl: faizoxPic, name: 'Faizox', role: 'Membre', description: 'Maître du farm.' },
        { imageUrl: shishiPic, name: 'ShiShi__', role: 'Membre', description: 'Soutien et diplomate.' },
        { imageUrl: dieuObitoPic, name: 'Dieu_Obito', role: 'Membre', description: 'Puissance brute.' }, // Note: J'ai corrigé le nom pour le chemin d'import. Assure-toi que le nom du fichier est aussi "dieu-obito.png"
        { imageUrl: lamixPic, name: 'Lamix', role: 'Membre', description: 'Explorateur et découvreur.' },
        { imageUrl: kanashiiPic, name: 'Kanashii', role: 'Membre', description: 'Le sauveur né.' },
        { imageUrl: AstryxPic, name: 'Astryx', role: 'Membre', description: 'Le marchand ambulant.' },
        { imageUrl: MakiPic, name: 'Maki', role: 'Membre', description: 'La guide spirituel.' },
    ];

    return (
        <div className="container mx-auto px-8 py-12">
            <h1 className="text-5xl font-noto-serif font-bold text-primary text-center mb-12">Notre Roster</h1>
            <p className="text-lg text-white/70 text-center max-w-3xl mx-auto mb-16">Découvrez les membres qui font la force de la guilde KAYOU. Une équipe soudée, prête à relever tous les défis.</p>

            {/* Grille pour afficher les cartes des membres */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                {members.map((member, index) => (
                    <MemberCard
                        key={index} // Clé unique pour chaque élément dans la liste
                        imageUrl={member.imageUrl}
                        name={member.name}
                        role={member.role}
                        description={member.description}
                    />
                ))}
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

export default RosterPage;