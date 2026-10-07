import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// The site is served from https://<user>.github.io/<repo>/. The deploy workflow passes the
// repository name in BASE_PATH, so renaming the repository moves the site with it.
const base = process.env.BASE_PATH ?? '/portfolio/'

export default defineConfig({
  base: base.endsWith('/') ? base : `${base}/`,
  plugins: [react()],
})
