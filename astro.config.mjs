// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  vite: {
    css: {
      devSourcemap: true, // ✅ Enables CSS/SCSS source maps for better debugging
    },
  },

  integrations: [react()],
});