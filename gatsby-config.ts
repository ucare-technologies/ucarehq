import type { GatsbyConfig } from 'gatsby';

require('dotenv').config({
	path: `.env.${process.env.NODE_ENV}`,
});

const config: GatsbyConfig = {
	graphqlTypegen: {
		documentSearchPaths: ['./gatsby-node.ts', './plugins/**/gatsby-node.ts', './src/gatsby/create-pages/*.ts'],
	},
	siteMetadata: {
		title: 'UCare',
		description: 'Church management software simplified',
		author: 'UCare',
		siteUrl: 'https://ucarehq.com',
	},
	plugins: [
		'gatsby-transformer-sharp',
		'gatsby-plugin-sharp',
		'gatsby-plugin-image',
		'gatsby-transformer-sharp', // Needed for dynamic images
		'gatsby-plugin-typescript',
		{
			resolve: 'gatsby-plugin-sass',
			options: {
				useResolveUrlLoader: {
					options: {
						removeCR: true,
						precision: 6, // for bootstrap
						//debug: true,
						//sourceMap: true, //default is false
					},
				},
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				path: 'content/assets',
				name: 'content/assets',
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				path: 'content/assets/favicon',
				name: 'content/assets/favicon',
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				path: `${__dirname}/src/images`,
				name: 'images',
			},
		},
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				name: 'UCare',
				short_name: 'UCare',
				start_url: '/',
				background_color: '#fff',
				theme_color: '#fff',
				display: 'minimal-ui',
				icon: 'content/assets/favicon/icon.png',
				icons: [
					{
						src: '/content/assets/favicon/apple-touch-icon.png',
						sizes: '180x180',
						type: 'image/png',
					},
					{
						src: '/content/assets/favicon/android-chrome-192x192.png',
						sizes: '192x192',
						type: 'image/png',
					},
					{
						src: '/content/assets/favicon/android-chrome-512x512.png',
						sizes: '512x512',
						type: 'image/png',
					},
				], // Add or remove icon sizes as desired
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				path: `${__dirname}/src/pages`,
				name: 'pages',
			},
		},
		{
			resolve: 'gatsby-source-contentful',
			options: {
				// Learn about environment variables: https://gatsby.dev/env-vars
				spaceId: process.env.CONTENTFUL_SPACE_ID,
				accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
				host: process.env.CONTENTFUL_HOST,
			},
		},
		'gatsby-transformer-remark',
	],
};

export default config;
