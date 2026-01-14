import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

// https://vite.dev/config/
export default defineConfig({
  // GitHub Pages serves your app from /<repo>/, so we need a matching base path on build.
  // The function does: set the Vite base path. Input: BASE_PATH env var. Returns: correct asset paths on Pages.
  base: process.env.BASE_PATH ?? '/',
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': resolve(fileURLToPath(new URL('./src', import.meta.url))),
    },
  },
})
