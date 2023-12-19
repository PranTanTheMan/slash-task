import { defineConfig } from "astro/config";
import storyblok from "@storyblok/astro";
import { loadEnv } from "vite";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

// import basicSsl from "@vitejs/plugin-basic-ssl";
const env = loadEnv("", process.cwd(), "STORYBLOK");

// https://astro.build/config
export default defineConfig({
  integrations: [
    storyblok({
      //accessToken: env.STORYBLOK_TOKEN,
      accessToken: env.STORYBLOK_TOKEN,
      apiOptions: {
        region: "",
      },
      bridge: {
        customParent: "https://app.storyblok.com",
      },
      components: {
        page: "storyblok/Page",
        navbar: "storyblok/Navbar",
        links: "storyblok/Links",
        hero: "storyblok/Hero",
        footer: "storyblok/Footer",
      },
    }),
    tailwind(),
    react(),
  ],
  // vite: {
  //   plugins: [basicSsl()],
  //   server: {
  //     https: true,
  //   },
  // },
});
