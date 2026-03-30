// src/components/Footer.tsx
import React from 'react';

function Footer() {
    return (
        <footer className="bg-black/30 py-8 text-center text-sm text-gray-400 border-t border-white/10">
        <div className="container mx-auto">
            <p>&copy; 2026 Kayou. Tous droits réservés.</p>
    {/* Ajoutez des liens vers Discord, réseaux sociaux, etc. */}
    {/* Exemple : <div className="flex justify-center space-x-4 mt-4"><a href="#">Discord</a><a href="#">Twitter</a></div> */}
    </div>
    </footer>
);
}

export default Footer;