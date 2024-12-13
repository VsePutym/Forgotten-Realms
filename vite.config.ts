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
      lodash: 'lodash', // Убираем path.resolve, просто указываем имя пакета
    },
  }
});
