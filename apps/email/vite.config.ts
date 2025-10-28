import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
  server: { port: 5175 },
  plugins: [
    react(),
    federation({
      name: 'email',
      filename: 'remoteEntry.js',
      exposes: {
        './App': './src/App.tsx'
      },
      remotes: {
        host: 'http://localhost:5173/assets/remoteEntry.js'
      },
      shared: {
        react: { singleton: true, eager: true, requiredVersion: false },
        'react-dom': { singleton: true, eager: true, requiredVersion: false },
      },
    })
  ],
  build: {
    target: 'esnext',
    minify: true
  }
})
