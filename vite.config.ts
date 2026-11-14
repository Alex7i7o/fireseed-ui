import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  // La documentación se publica en GitHub Pages (/fireseed-ui/) y en fireseed.tech/ui/ (DOCS_BASE=/ui/).
  base: process.env.DOCS_BASE ?? '/fireseed-ui/',
  build: {
    outDir: 'dist-docs',
    emptyOutDir: true
  },
  server: {
    port: 5175,
    strictPort: true
  },
  plugins: [
    react(),
    tailwindcss(),
  ],
});
