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
        ]
      }
    })
  ],
})
