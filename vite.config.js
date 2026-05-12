import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Cloudflare Pages: static asset deploy (no Workers / no wrangler upload)
export default defineConfig({
  // Use relative asset paths so Workers/Pages subpath deployments don't resolve JS/CSS to wrong absolute URLs.
  base: './',
  plugins: [react()],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
})
