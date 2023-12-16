import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import storyblokIntegration from "@storyblok/astro";

const env = loadEnv("", process.cwd(), "STORYBLOK");

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    tailwind(),
    storyblokIntegration({
      accessToken: env.STORYBLOK_TOKEN,
      components: "",
      apiOptions: {},
    }),
  ],
});
