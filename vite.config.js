import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()], // Add this to enable the React plugin
  server: {
    port: 5100, // Your custom port
  },
});
