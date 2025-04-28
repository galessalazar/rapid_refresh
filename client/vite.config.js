import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from 'path';
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // means= from the project root, go to the src folder the @ becomes src, its what is referred to as the path alias, a shortcut
      "@": path.resolve(__dirname, "src"),
      // tells vite that @means src
    },
  },
  

  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3001",
        changeOrigin: true,
        secure: false,
        // removes the /api prefix

        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
