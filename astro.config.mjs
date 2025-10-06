import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightLlmsTxt from "starlight-llms-txt";

// https://astro.build/config
export default defineConfig({
  site: "https://docs.bettermenu.live",
  integrations: [
    starlight({
      title: "BetterMenu Docs",
      plugins: [starlightLlmsTxt()],
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
        "./src/styles/css/tailwind.css",
      ],
    }),
  ],
});
