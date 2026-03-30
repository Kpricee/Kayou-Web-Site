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
                "primary": "#bdce89",
                "secondary": "#fbbc00",
                "background": "#0e1419",
                "on-background": "#dde3eb",
                "surface": "#0e1419",
                "on-surface": "#dde3eb",
                "surface-container-low": "#161c22",
                "surface-container-high": "#252b30",
                "primary-container": "#505e26",
                "on-primary-container": "#dde3eb",
                "secondary-container": "#693c0e",
                "on-tertiary-container": "#ffdfa0",
                "tertiary": "#fbbc00",
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