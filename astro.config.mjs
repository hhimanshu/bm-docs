import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "BetterMenu Docs",
      social: [
        // { name: 'github', url: 'https://github.com/bettermenu/documentation' },
      ],
      editLink: {
        baseUrl: "https://github.com/bettermenu/documentation/edit/main",
      },
      logo: {
        light: "./src/assets/bm-light.svg",
        dark: "./src/assets/bm-dark.svg",
        alt: "BetterMenu Documentation Logo",
        replacesTitle: true,
      },
      sidebar: [
        { label: "Concepts", autogenerate: { directory: "concepts" } },
        {
          label: "Features",
          autogenerate: { directory: "features" },
        },
      ],
      head: [
        {
          tag: "script",
          attrs: {
            src: "https://plausible.io/js/script.js",
            'data-domain': "docs.bettermenu.live",
            async: true,
            defer: true,
          },
        },
      ],
      customCss: [
        "./src/tailwind.css",
      ],
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
