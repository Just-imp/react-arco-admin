import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    host:true,
    port:9898,
  },
  resolve:{
    alias:{
      "@": path.resolve(__dirname,'src')
    }
  }
})
