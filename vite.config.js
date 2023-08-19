import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

import UnoCSS from 'unocss/vite'
import { presetAttributify, presetUno } from 'unocss';

export default defineConfig({
  plugins: [
    react(),
    UnoCSS({
      presets: [presetAttributify(), presetUno()], // Presets
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
