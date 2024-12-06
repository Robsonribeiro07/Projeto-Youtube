import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Projeto-Youtube/', // Nome do repositório
  server: {
    port: 5173, // Substitua pelo número da porta desejada
    host: '0.0.0.0', // Permite acesso externo, caso necessário
  },
})
