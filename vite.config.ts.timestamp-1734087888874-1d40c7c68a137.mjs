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
  base: "/Forgotten-Realms/"
  // Укажи название репозитория
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxJVFxcXFxQcm9qZWN0XFxcXGZvcmdvdHRlbl9yZWFsbXNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXElUXFxcXFByb2plY3RcXFxcZm9yZ290dGVuX3JlYWxtc1xcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovSVQvUHJvamVjdC9mb3Jnb3R0ZW5fcmVhbG1zL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnO1xuXG4vLyBodHRwczovL3ZpdGUuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtyZWFjdCgpXSxcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICAnQEFuaW1hdGVkUGVyc29uJzogJy9zcmMvYXNzZXRzL0hlcm8nLFxuICAgICAgJ0BNYXBzJzogJy9zcmMvYXNzZXRzL01hcHMnLFxuICAgICAgJ0BTdHlsZXMnOiAnL3NyYy9zdHlsZXMnLFxuICAgICAgJ0BBbmltYXRlZEVuZW1pZXMnOiAnL3NyYy9hc3NldHMvRW5lbWllcycsXG4gICAgICAnQEltZyc6ICcvc3JjL2Fzc2V0cycsXG4gICAgICBsb2Rhc2g6ICdsb2Rhc2gnLFxuICAgIH0sXG4gIH0sXG4gIGJhc2U6ICcvRm9yZ290dGVuLVJlYWxtcy8nLCAvLyBcdTA0MjNcdTA0M0FcdTA0MzBcdTA0MzZcdTA0MzggXHUwNDNEXHUwNDMwXHUwNDM3XHUwNDMyXHUwNDMwXHUwNDNEXHUwNDM4XHUwNDM1IFx1MDQ0MFx1MDQzNVx1MDQzRlx1MDQzRVx1MDQzN1x1MDQzOFx1MDQ0Mlx1MDQzRVx1MDQ0MFx1MDQzOFx1MDQ0RlxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQW9SLFNBQVMsb0JBQW9CO0FBQ2pULE9BQU8sV0FBVztBQUdsQixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTLENBQUMsTUFBTSxDQUFDO0FBQUEsRUFDakIsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsbUJBQW1CO0FBQUEsTUFDbkIsU0FBUztBQUFBLE1BQ1QsV0FBVztBQUFBLE1BQ1gsb0JBQW9CO0FBQUEsTUFDcEIsUUFBUTtBQUFBLE1BQ1IsUUFBUTtBQUFBLElBQ1Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxNQUFNO0FBQUE7QUFDUixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
