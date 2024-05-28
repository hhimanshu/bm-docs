import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "BetterMenu Docs",
      social: {
        // github: 'https://github.com/bettermenu/documentation',
      },
      editLink: {
        baseUrl: "https://github.com/bettermenu/documentation/edit/main",
      },
      logo: {
        light: "./src/assets/bm-light.svg",
        dark: "./src/assets/bm-dark.svg",
        alt: "BetterMenu Docs",
        replacesTitle: true,
      },
      sidebar: [
        { label: "Concepts", autogenerate: { directory: "concepts" } },
        {
          label: "Features",
          autogenerate: { directory: "features" },
        },
      ],
    }),
  ],
});
