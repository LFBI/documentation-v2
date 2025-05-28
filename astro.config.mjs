// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'LFBI Docs',
			logo: {
				src: './src/assets/logo.svg'
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
		}),
	],
});
