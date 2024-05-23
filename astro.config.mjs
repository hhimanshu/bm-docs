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
        { label: "Guides", autogenerate: { directory: "guides" } },
        {
          label: "Data Model",
          autogenerate: { directory: "data-model" },
          items: [
            {
              label: "Search",
              autogenerate: { directory: "data-model/search" },
            },
            {
              label: "BetterMenu",
              autogenerate: { directory: "data-model/bettermenu" },
            },
          ],
        },
      ],
    }),
  ],
});
