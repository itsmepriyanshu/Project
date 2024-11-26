import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],  // Excludes lucide-react from dependency optimization
  },
  server: {
    host: '0.0.0.0',   // Exposes the server on all local IP addresses
    port: 5000          // Changes the port to 5000 (not 3000 as the comment suggests)
  }
});
