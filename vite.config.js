import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/reactcicd/',
  build: {
    outDir: 'dist', // default is 'dist'
  },
})
