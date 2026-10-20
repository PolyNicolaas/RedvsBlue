import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Relative asset paths so the build works under any sub-path,
  // e.g. https://polynicolaas.github.io/RedvsBlue/ on GitHub Pages.
  base: './',
  build: {
    // three.js is big; the single bundle is fine for this game.
    chunkSizeWarningLimit: 1000,
  },
})
