import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: true,
    // Add HMR configuration
    hmr: {
      overlay: true
    }
  },
  build: {
    // Output directory for production build
    outDir: 'dist',
    // Generate sourcemaps for better debugging
    sourcemap: true,
    // Optimize chunks
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'chart-vendor': ['recharts']
        }
      }
    }
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'recharts', 'lucide-react']
  },
  // Enable JSX in .js files
  esbuild: {
    jsxInject: `import React from 'react'`
  }
})
