// src/main.tsx (ou un fichier dédié)
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

// Importation et initialisation de Supabase
import { createClient } from '@supabase/supabase-js';

// Tes informations de projet Supabase (URL et clé publique)
const supabaseUrl = 'https://rzqoyiocorguwbcxwjgo.supabase.co';
const supabaseKey = 'sb_publishable_cAZ5hab669cSTd3Tg7Sbmg_VW2H_M8b';

// Crée le client Supabase
const supabase = createClient(supabaseUrl, supabaseKey);

// Exporte le client Supabase pour pouvoir l'utiliser dans d'autres composants
export { supabase };

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter basename="/Kayou-Web-Site">
            <App />
        </BrowserRouter>
    </React.StrictMode>,
);