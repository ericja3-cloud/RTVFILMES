import { defineConfig } from "vite";
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  base: '/',
  plugins: [
    TanStackRouterVite(),
    tsConfigPaths({
      projects: ["./tsconfig.json"],
    }),
    viteReact(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
