// frontend/vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // THIS IS CRITICAL FOR DEPLOYMENT to resolve the 404/Not Found error
  base: './', 
});