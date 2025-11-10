import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      components: resolve(__dirname, './src/components'),
      pages: resolve(__dirname, './src/pages'),
      utils: resolve(__dirname, './src/utils'),
      styles: resolve(__dirname, './src/styles'),
    },
  },
  server: {
    port: 5173,
    open: false,
  },
  build: {
    outDir: 'build',
    sourcemap: true,
  },
});
