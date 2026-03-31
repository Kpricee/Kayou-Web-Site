// src/components/MemberCard.tsx
import React from 'react';

interface MemberCardProps {
    imageUrl: string; // Chemin vers l'image du membre
    name: string;     // Nom du membre
    role: string;     // Rôle dans la guilde (Chef, Second, etc.)
    description: string; // Courte description
}

function MemberCard({ imageUrl, name, role, description }: MemberCardProps) {
    return (
        <div className="flex flex-col items-center p-6 bg-surface-container-high rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            {/* Photo du membre */}
            <img
    src={imageUrl}
    alt={`Photo de ${name}`}
    className="h-32 w-32 rounded-full object-cover mb-4 border-2
    border-secondary/40
    transition-transform duration-300 hover:scale-110" /* Ajout d'une petite animation */
    />
    {/* Nom du membre */}
    <h3 className="text-3xl font-noto-serif font-bold text-secondary mb-2">{name}</h3>
    {/* Rôle */}
    <p className="text-lg text-secondary/80 mb-2 font-bold uppercase tracking-wide">{role}</p>
    {/* Description */}
    <p className="text-white/70 text-sm">{description}</p>
        </div>
);
}

export default MemberCard;