import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  build: {
    // Netlify publishes this folder (see netlify.toml); the page generator
    // in scripts/generate-pages.js reads and writes it after the build.
    outDir: "build",
    sourcemap: false,
  },
});
