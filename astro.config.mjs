import netlify from '@astrojs/netlify';
import react from '@astrojs/react';
import { defineConfig } from 'astro/config';

export default defineConfig({
	site: 'https://ucarehq.com',
	publicDir: 'static',
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					quietDeps: true,
					silenceDeprecations: ['import', 'if-function', 'global-builtin', 'color-functions'],
				},
			},
		},
	},
	image: {
		domains: ['images.ctfassets.net'],
	},
	integrations: [react()],
	prefetch: {
		prefetchAll: true,
		defaultStrategy: 'viewport', // Matches Gatsby's default behavior
	},
	adapter: netlify(),
});
