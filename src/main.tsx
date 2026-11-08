import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css';

// 🚀 Firma en Consola — FireSeed UI
console.log(
  "%c [FS] %c FireSeed UI — Librería de Componentes Atómicos en React ",
  "background:#FBBF24; color:#120524; font-weight:800; padding:4px 6px; border-radius:4px 0 0 4px; font-family:sans-serif;",
  "background:#241142; color:#FFF6DF; font-weight:600; padding:4px 10px; border-radius:0 4px 4px 0; border-left:2px solid #FBBF24; font-family:sans-serif;"
);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// Sincronizar el meta theme-color con la variable CSS primaria
setTimeout(() => {
  const rootStyle = getComputedStyle(document.documentElement);
  const primaryColor = rootStyle.getPropertyValue('--color-primary-main').trim();
  if (primaryColor) {
    let metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (!metaThemeColor) {
      metaThemeColor = document.createElement('meta');
      metaThemeColor.setAttribute('name', 'theme-color');
      document.head.appendChild(metaThemeColor);
    }
    metaThemeColor.setAttribute('content', primaryColor);
  }
}, 0);

