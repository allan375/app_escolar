import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'EduExpert',
        short_name: 'EduExpert',
        description: 'Aplicativo de gestão escolar',
        theme_color: '#ffffff',
        display: 'standalone',
        icons: [
          {
            src: './icon.png',
            sizes: '192x192',
            type: 'image/png'
          }
        ],
        splash_screens: [
          {
            src: '/images/splash.png', // Caminho para a imagem de splash
            sizes: '1080x1920',
            type: 'image/png',
            purpose: 'any' // Pode ser "any" ou "maskable" dependendo do efeito que você quer
          }
        ]
      }
    })
  ],
})
