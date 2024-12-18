import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@AnimatedPerson': '/src/assets/Hero',
      '@Maps': '/src/assets/Maps',
      '@Styles': '/src/styles',
      '@AnimatedEnemies': '/src/assets/Enemies',
      '@Img': '/src/assets',
      lodash: 'lodash',
    },
  },
  build: {
    outDir: 'dist/Forgotten-Realms', // Папка, куда будет собираться проект
  },
  base: '/Forgotten-Realms/',
  css: {
    preprocessorOptions: {
      scss: {
      },
    },
  },
});
