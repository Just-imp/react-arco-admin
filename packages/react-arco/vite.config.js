import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { vitePluginForArco } from '@arco-plugins/vite-react'
import path from 'path'
import svgrPlugin from '@arco-plugins/vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgrPlugin({ svgrOptions: {}, }), vitePluginForArco()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    },
    extensions: ['.ts', '.tsx', '.jsx', '.json', '.js', '.svg']
  },
  server:{
    host: true
  }
})
