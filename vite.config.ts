import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': '/src/components',
      '@config': '/src/config',
      '@data': '/src/data',
      '@helpers': '/src/helpers',
      '@hooks': '/src/hooks',
      '@pages': '/src/pages',
      '@zod': '/src/zod',
      '@layouts': '/src/layouts',
    },
  },
})
