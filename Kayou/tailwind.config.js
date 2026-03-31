// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}", // Assurez-vous que ce chemin est bon
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "primary": "#a7c76d",          // Un vert un peu plus clair et vif
                "secondary": "#ffc857",        // Un jaune/orange plus éclatant
                "background": "#0e1419",       // Fond très sombre (on le garde)
                "on-background": "#ffffff",    // Texte blanc pur pour le contraste maximal
                "surface": "#0e1419",
                "on-surface": "#ffffff",       // Texte blanc sur surface
                "surface-container-low": "#1a2026", // Gris légèrement plus clair pour les cartes
                "surface-container-high": "#252b30", // Gris un peu plus clair
                "primary-container": "#505e26",  // Vert plus foncé
                "on-primary-container": "#ffffff", // Texte blanc sur conteneur primaire
                "secondary-container": "#693c0e",  // Marron/Orange
                "on-tertiary-container": "#ffdfa0",
                "tertiary": "#ffc857",         // Jaune/Orange vif pour les éléments tertiaires
                "tertiary-fixed": "#ffdfa0",
                "outline-variant": "#434843",
            },
            fontFamily: {
                "headline": ["Noto Serif", "serif"],
                "body": ["Manrope", "sans-serif"],
                "label": ["Manrope", "sans-serif"],
            },
            borderRadius: {
                "DEFAULT": "1rem",
                "lg": "2rem",
                "xl": "3rem",
                "full": "9999px",
            },
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
    ],
}