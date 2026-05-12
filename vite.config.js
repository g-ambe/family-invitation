import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Cloudflare Pages: static asset deploy (no Workers / no wrangler upload)
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
})
