import react from '@astrojs/react';
import { defineConfig } from 'astro/config';

export default defineConfig({
	site: 'https://ucarehq.com',
	publicDir: 'static',
	image: {
		domains: ['images.ctfassets.net'],
	},
	integrations: [react()],
	prefetch: {
		prefetchAll: true,
		defaultStrategy: 'viewport', // Matches Gatsby's default behavior
	},
});
