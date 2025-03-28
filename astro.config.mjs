import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import path from "path";

export default defineConfig({
  integrations: [tailwind()],
  vite: {
    resolve: {
      alias: {
        "@": path.resolve("./src"),
      },
    },
  },
});
