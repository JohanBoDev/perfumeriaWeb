import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import path from "path";

import react from "@astrojs/react";

export default defineConfig({
  integrations: [tailwind(), react()],
  vite: {
    resolve: {
      alias: {
        "@": path.resolve("./src"),
      },
    },
  },
});