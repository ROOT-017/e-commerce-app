// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";


export default defineConfig({
  plugins: [
    tailwindcss(),
    react({
      jsxRuntime: "classic", // Add this if using old JSX transform
    }),
  ],
  css: {
    postcss: "./postcss.config.js", // Explicit path
  },
  resolve: {
    alias: {
      // Add this if using absolute imports
      src: "/src",
    },
  },
});
