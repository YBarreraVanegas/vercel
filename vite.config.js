import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default {
  plugins: [react()],
  define: {
    'process.env': import.meta.env,
  },
};