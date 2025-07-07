import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: 'thoughtgps.local', // 👈 custom local domain
    port: 5173, // optional: you can change this too
  },
})
