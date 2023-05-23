import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: '@components',
        replacement: resolve(__dirname, './src/components'),
      },
      {
        find: '@logic',
        replacement: resolve(__dirname, './src/logic'),
      },
    ],
  },
  test: {
    setupFiles: './src/test/setUpTest.js',
    globals: true,
    environment: 'jsdom',
  },
})
