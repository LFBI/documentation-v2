// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://lfbi.github.io',
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
					label: 'New Student Guide',
					autogenerate: {
						directory: '/getting-started'
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
