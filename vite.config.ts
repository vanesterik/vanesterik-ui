import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  define: {
    'process.env': process.env,
  },
  plugins: [tailwindcss()],
})
