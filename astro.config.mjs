// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://lfbi.pages.github.io',
	base: '/documentation-v2',
	integrations: [
		starlight({
			title: 'LFBI Student Handbook',
			logo: {
				light: './src/assets/logo_type_black.png',
				dark: './src/assets/logo_type_white.png',
				replacesTitle: true
			},
			sidebar: [
				{
					label: 'Guides',
					autogenerate: {
						directory: '/guides'
					}
				},
				{
					label: 'References',
					autogenerate: {
						directory: '/references'
					}
				},
			],
			customCss: [
				'./src/styles/custom.css'
			]
		}),
	],
});
