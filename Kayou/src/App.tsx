// src/App.tsx
import React from 'react';
import logoImage from './assets/logo.png';
import './App.css'; // Nous allons créer ce fichier pour les styles spécifiques à App.tsx

// Composant Header simple
function Header() {
  return (
      <header className="app-header">
        <div className="container">
          <div className="logo-container"> {/* On remplace le div.logo par un conteneur pour l'image */}
            <img src={logoImage} alt="Logo de la guilde" className="logo-img" />
            <a href="/" className="logo-text">NomDeVotreGuilde</a> {/* Le nom textuel à côté du logo */}
          </div>
          <nav>
            <ul>
              <li><a href="/">Accueil</a></li>
              <li><a href="/roster">Roster</a></li>
              <li><a href="/recrutement">Recrutement</a></li>
            </ul>
          </nav>
        </div>
      </header>
  );
}

// Composant Hero simple pour la page d'accueil
function Hero() {
  return (
      <section className="hero">
        <div className="hero-content">
          <h1>Rejoignez Notre Guilde Épique !</h1>
          <p>Découvrez une guilde passionnée et partez à l'aventure ensemble.</p>
          <button className="cta-button">Postuler maintenant !</button>
        </div>
      </section>
  );
}

// Composant Footer simple
function Footer() {
  return (
      <footer className="app-footer">
        <div className="container">
          <p>&copy; 2026 Kayou. Tous droits réservés.</p>
          {/* Ajoutez des liens vers Discord, réseaux sociaux, etc. */}
        </div>
      </footer>
  );
}

function App() {
  return (
      <div className="app-container">
        <Header />
        <main className="app-main">
          {/* Pour l'instant, nous mettons le Hero directement ici. Plus tard, ce sera géré par React Router */}
          <Hero />

          {/* Ici, on affichera le contenu des autres pages avec React Router */}
          <section className="container">
            <h2>À propos de nous</h2>
            <p>Découvrez notre histoire, nos valeurs et pourquoi nous sommes la meilleure guilde du serveur !</p>
          </section>
        </main>
        <Footer />
      </div>
  );
}

export default App;