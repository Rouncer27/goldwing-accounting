// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  vite: {
    css: {
      devSourcemap: true, // ✅ Enables CSS/SCSS source maps for better debugging
    },
  },
  site: "https://goldwingac.com/",
  integrations: [react(), sitemap()],
  image: {
    domains: ["goldwing.swbdatabases3.com/"],
    remotePatterns: [{ protocol: "https" }],
  },
});
