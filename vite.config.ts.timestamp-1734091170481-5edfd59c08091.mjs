// vite.config.ts
import { defineConfig } from "file:///D:/IT/Project/forgotten_realms/node_modules/vite/dist/node/index.js";
import react from "file:///D:/IT/Project/forgotten_realms/node_modules/@vitejs/plugin-react/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@AnimatedPerson": "/src/assets/Hero",
      "@Maps": "/src/assets/Maps",
      "@Styles": "/src/styles",
      "@AnimatedEnemies": "/src/assets/Enemies",
      "@Img": "/src/assets",
      lodash: "lodash"
    }
  },
  build: {
    outDir: "dist"
    // Убедитесь, что сборка идёт в папку dist
  },
  base: "/Forgotten-Realms/"
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxJVFxcXFxQcm9qZWN0XFxcXGZvcmdvdHRlbl9yZWFsbXNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXElUXFxcXFByb2plY3RcXFxcZm9yZ290dGVuX3JlYWxtc1xcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovSVQvUHJvamVjdC9mb3Jnb3R0ZW5fcmVhbG1zL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnO1xuXG4vLyBodHRwczovL3ZpdGUuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtyZWFjdCgpXSxcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICAnQEFuaW1hdGVkUGVyc29uJzogJy9zcmMvYXNzZXRzL0hlcm8nLFxuICAgICAgJ0BNYXBzJzogJy9zcmMvYXNzZXRzL01hcHMnLFxuICAgICAgJ0BTdHlsZXMnOiAnL3NyYy9zdHlsZXMnLFxuICAgICAgJ0BBbmltYXRlZEVuZW1pZXMnOiAnL3NyYy9hc3NldHMvRW5lbWllcycsXG4gICAgICAnQEltZyc6ICcvc3JjL2Fzc2V0cycsXG4gICAgICBsb2Rhc2g6ICdsb2Rhc2gnLFxuICAgIH0sXG4gIH0sXG4gIGJ1aWxkOiB7XG4gICAgb3V0RGlyOiAnZGlzdCcsIC8vIFx1MDQyM1x1MDQzMVx1MDQzNVx1MDQzNFx1MDQzOFx1MDQ0Mlx1MDQzNVx1MDQ0MVx1MDQ0QywgXHUwNDQ3XHUwNDQyXHUwNDNFIFx1MDQ0MVx1MDQzMVx1MDQzRVx1MDQ0MFx1MDQzQVx1MDQzMCBcdTA0MzhcdTA0MzRcdTA0NTFcdTA0NDIgXHUwNDMyIFx1MDQzRlx1MDQzMFx1MDQzRlx1MDQzQVx1MDQ0MyBkaXN0XG4gIH0sXG4gIGJhc2U6ICcvRm9yZ290dGVuLVJlYWxtcy8nXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBb1IsU0FBUyxvQkFBb0I7QUFDalQsT0FBTyxXQUFXO0FBR2xCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVMsQ0FBQyxNQUFNLENBQUM7QUFBQSxFQUNqQixTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxtQkFBbUI7QUFBQSxNQUNuQixTQUFTO0FBQUEsTUFDVCxXQUFXO0FBQUEsTUFDWCxvQkFBb0I7QUFBQSxNQUNwQixRQUFRO0FBQUEsTUFDUixRQUFRO0FBQUEsSUFDVjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLFFBQVE7QUFBQTtBQUFBLEVBQ1Y7QUFBQSxFQUNBLE1BQU07QUFDUixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
