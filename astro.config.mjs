import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'BetterMenu Docs',
			social: {
				// github: 'https://github.com/bettermenu/documentation',
			},
			editLink: {
				baseUrl: 'https://github.com/bettermenu/documentation/edit/main/docs/'
			},
			logo: {
				light: './src/assets/bm-light.svg',
				dark: './src/assets/bm-dark.svg',
				alt: 'BetterMenu Docs',
				replacesTitle: true,
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', link: '/guides/example/' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
