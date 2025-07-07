// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/geoenergia/' // ← cámbialo por el nombre real de tu repositorio
});