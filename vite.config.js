import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  basename: process.env.NODE_ENV === 'production' ? '/mirintel/' : '/',
  plugins: [react()],
  build: {
    outDir: './build'
  }
})
