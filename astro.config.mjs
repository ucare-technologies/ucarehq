import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
	site: 'https://ucarehq.com',
	publicDir: 'static',
	image: {
		domains: ['images.ctfassets.net'],
	},
	integrations: [react()],
});
