import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import path from "path";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: 'https://shesmanperfumes.com', 
  integrations: [tailwind(), react(), sitemap()],
  vite: {
    resolve: {
      alias: {
        "@": path.resolve("./src"),
      },
    },
  },
});
