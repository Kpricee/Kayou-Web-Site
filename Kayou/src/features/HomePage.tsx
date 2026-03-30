// src/features/HomePage.tsx
import React from 'react';
import { Link } from 'react-router-dom'; // Pour les liens internes

// Assurez-vous d'avoir une image dans src/assets/ nommée hero-background.jpg ou adaptez le chemin
import heroBg from '../assets/hero-background.jpg';

function HomePage() {
    return (
        <div>
            {/* Section Hero */}
        <section className="relative h-[70vh] w-full flex items-center justify-center overflow-hidden group">
    <div className="absolute inset-0">
    <img
        src={heroBg}
    alt="Background Hero"
    className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-[#0e1419] via-[#0e1419]/40 to-transparent"></div>
        </div>
        <div className="relative z-10 text-center px-8">
    <span className="label-sm bg-tertiary-container/80 text-on-tertiary-container px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-[0.2em] backdrop-blur-md inline-block mb-4">Major Discovery Unlocked</span>
    <h1 className="text-6xl font-black font-noto-serif text-white tracking-tight leading-tight mb-6">The Obsidian <br/>Threshold</h1>
    <p className="text-lg text-gray-400 leading-relaxed mb-10 max-w-2xl mx-auto">Ancient volcanic veins have surfaced in the Southern Divide. The Lithic Guild invites all masters of the stone to join the harvest.</p>
    <button className="pebble-button bg-orange-500 text-black px-10 py-5 rounded-full font-black uppercase tracking-widest text-sm flex items-center gap-3 mx-auto">
        Join Expedition <span className="material-symbols-outlined">arrow_forward</span>
        </button>
        </div>
        </section>

    {/* Section "À propos" inspirée de l'exemple généré */}
    <section className="container mx-auto px-8 py-20 space-y-12">
    <div className="text-center">
    <h2 className="text-5xl font-noto-serif font-bold text-purple-700 mb-6">About The Lithic Guild</h2>
    <p className="text-lg text-gray-400 max-w-3xl mx-auto">Founded in the heart of the Shattered Peaks, The Lithic Guild is a brotherhood forged in stone and driven by the pursuit of forgotten knowledge. We delve into the earth's depths, unearthing ancient artifacts and harnessing the raw power of resonance.</p>
    </div>

    {/* Section avec les ressources et quêtes (inspiré du Bento Grid) */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Ressource Tracker */}
        <div className="bg-[#161c22] p-8 rounded-lg border-b-4 border-purple-700/20 flex flex-col justify-between">
    <div className="space-y-6">
    <div className="flex justify-between items-start">
    <span className="text-xs font-black uppercase tracking-[0.3em] text-slate-500">Resource Pool</span>
    <span className="material-symbols-outlined text-purple-700" style={{ fontVariationSettings: "'FILL' 1" }}>waves</span>
    </div>
    <div>
    <p className="text-4xl font-black font-noto-serif text-white">14,280</p>
    <h3 className="text-purple-700 font-bold">Resonance Units</h3>
    </div>
    </div>
    <div className="mt-8 space-y-2">
    <div className="flex justify-between text-xs font-bold uppercase text-slate-500">
        <span>Siphon Rate</span>
    <span>82% capacity</span>
    </div>
    <div className="h-2 w-full bg-gray-700 rounded-full overflow-hidden">
    <div className="h-full bg-purple-700 w-[82%] rounded-full"></div>
        </div>
        </div>
        </div>

    {/* Stone Wealth */}
    <div className="bg-[#252b30] p-8 rounded-lg group flex flex-col justify-between">
    <div className="space-y-6">
    <div className="flex justify-between items-start">
    <span className="text-xs font-black uppercase tracking-[0.3em] text-slate-500">Treasury</span>
        <span className="material-symbols-outlined text-orange-500" style={{ fontVariationSettings: "'FILL' 1" }}>token</span>
    </div>
    <div>
    <p className="text-4xl font-black font-noto-serif text-white">842.50</p>
        <h3 className="text-orange-500 font-bold">Stone Wealth (SW)</h3>
    </div>
    </div>
    <div className="flex items-center gap-2 mt-8 text-emerald-400 text-sm font-bold">
    <span className="material-symbols-outlined text-sm">trending_up</span>
        <span>+12.4% vs last epoch</span>
    </div>
    </div>

    {/* Quest Summary Card */}
    <div className="bg-orange-500/10 p-8 rounded-lg border border-orange-500/10 backdrop-blur-sm relative overflow-hidden">
    <div className="absolute -right-4 -top-4 w-32 h-32 bg-orange-500/20 rounded-full blur-3xl"></div>
        <div className="relative z-10 flex flex-col justify-between h-full">
    <div className="space-y-4">
    <h3 className="font-noto-serif text-2xl font-bold text-orange-500">Active Quest</h3>
    <p className="text-on-tertiary-container/80 text-sm font-medium">Deliver 200kg of Raw Granite to the Lithic Sanctuary Refiner.</p>
    </div>
    <div className="flex items-center justify-between mt-8">
    <div className="flex -space-x-3">
        {/* Ici, vous pourriez ajouter des avatars de membres si vous les avez */}
        <div className="w-8 h-8 rounded-full border-2 border-[#0e1419] bg-slate-700 overflow-hidden"></div>
        <div className="w-8 h-8 rounded-full border-2 border-[#0e1419] bg-slate-600 overflow-hidden"></div>
        <div className="w-8 h-8 rounded-full border-2 border-[#0e1419] bg-surface-container-highest flex items-center justify-center text-[10px] font-bold">+3</div>
        </div>
        <span className="text-xs font-black uppercase text-orange-500">4h 12m Left</span>
    </div>
    </div>
    </div>
    </div>
    </section>
    </div>
);
}

export default HomePage;