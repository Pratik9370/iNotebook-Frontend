import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,        // Allows external access
    port: 5173,        // You can change this port if needed
    allowedHosts: [".ngrok-free.app"]
  },
})
