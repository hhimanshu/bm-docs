import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightLlmsTxt from "starlight-llms-txt";
import starlightSidebarTopics from "starlight-sidebar-topics";

// https://astro.build/config
export default defineConfig({
  site: "https://docs.bettermenu.live",
  integrations: [
    starlight({
      title: "BetterMenu Docs",
      plugins: [
        starlightLlmsTxt(),
        starlightSidebarTopics([
          {
            label: "Concepts",
            link: "/concepts/account/",
            icon: "open-book",
            items: [
              { label: "Concepts", autogenerate: { directory: "concepts" } },
            ],
          },
          {
            label: "Product",
            link: "/product/",
            icon: "rocket",
            items: [
              { label: "Product", autogenerate: { directory: "product" } },
            ],
          },
          {
            label: "API",
            link: "/api/",
            icon: "seti:json",
            items: [
              { label: "API", autogenerate: { directory: "api" } },
            ],
          },
        ]),
      ],
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
