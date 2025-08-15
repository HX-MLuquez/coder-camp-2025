import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/ - port 3003
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3003
  }
})
