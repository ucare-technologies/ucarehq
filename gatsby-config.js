/* eslint-disable */
module.exports = {
	siteMetadata: {
		title: `UCare`,
		description: `Church management software simplified`,
		author: `UCare`,
		siteUrl: 'https://ucarehq.com',
	},
	plugins: [
		{
			resolve: `gatsby-plugin-sass`,
			options: {
				useResolveUrlLoader: {
					options: {
						removeCR: true,
						//debug: true,
						sourceMap: true, //default is false
					},
				},
			},
		},
		{
			resolve: `gatsby-plugin-mdx`,
			options: {
				extensions: [`.mdx`, `.md`],
				plugins: [`gatsby-remark-images`],
				defaultLayouts: {
					default: require.resolve(`./src/components/page.tsx`),
				},
				gatsbyRemarkPlugins: [
					{
						resolve: `gatsby-remark-images`,
						options: {
							quality: 90,
							withWebp: { quality: 90 },
							maxWidth: 1200,
							linkImagesToOriginal: false,
						},
					},
					{ resolve: `gatsby-remark-copy-linked-files` },
					{ resolve: `gatsby-remark-numbered-footnotes` },
					{ resolve: `gatsby-remark-smartypants` },
					{ resolve: `gatsby-remark-external-links` },
					{ resolve: `gatsby-remark-responsive-iframe` },
				],
				remarkPlugins: [require(`remark-slug`)],
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `content/posts`,
				name: `content/posts`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `content/assets`,
				name: `content/assets`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `content/assets/favicon`,
				name: `content/assets/favicon`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/src/pages`,
				name: 'pages',
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/src/images`,
				name: `images`,
			},
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `UCare`,
				short_name: `UCare`,
				start_url: `/`,
				background_color: `#fff`,
				theme_color: `#fff`,
				display: `minimal-ui`,
				icon: `content/assets/favicon/icon.png`,
				icons: [
					{
						rel: `apple-touch-icon`,
						src: `/content/assets/favicon/apple-touch-icon.png`,
						sizes: `180x180`,
					},
					{
						src: `/content/assets/favicon/android-chrome-192x192.png`,
						sizes: `192x192`,
						type: `image/png`,
					},
					{
						src: `/content/assets/favicon/android-chrome-512x512.png`,
						sizes: `512x512`,
						type: `image/png`,
					},
				], // Add or remove icon sizes as desired
			},
		},
		{
			resolve: `@rhysforyou/gatsby-plugin-safari-site-icon`,
			options: {
				icon: `${__dirname}/content/assets/favicon/safari-pinned-tab.svg`,
				color: '#e32131',
			},
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-twitter`,
		`gatsby-plugin-emotion`,
		`gatsby-plugin-typescript`,
		`gatsby-plugin-extract-schema`,
		`gatsby-plugin-sitemap`,
		`gatsby-plugin-robots-txt`,
		{
			resolve: `gatsby-plugin-canonical-urls`,
			options: {
				siteUrl: 'https://ucarehq.com',
				stripQueryString: true,
			},
		},
		{
			resolve: `gatsby-plugin-catch-links`,
			options: {
				excludePattern: /(excluded-link|external)/,
			},
		},
		{
			resolve: 'gatsby-plugin-google-tagmanager',
			options: {
				id: 'GTM-KNWKJ4',
				includeInDevelopment: false,
			},
		},
		{
			resolve: `gatsby-plugin-feed`,
			options: {
				query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
				feeds: [
					{
						serialize: ({ query: { site, allBlogPost } }) => {
							return allBlogPost.posts.map(({ post }) => ({
								title: post.title,
								description: post.excerpt,
								date: post.date,
								url: site.siteMetadata.siteUrl + post.slug,
								guid: site.siteMetadata.siteUrl + post.slug,
							}));
						},
						query: `
              {
								allBlogPost(
									sort: { fields: [date, title], order: DESC }
									filter: { type: { eq: "post" } }
								) {
									posts: edges {
										post: node {
											excerpt
											title
											slug
											date(formatString: "D MMMM YYYY")
											type
										}
									}
								}
              }
            `,
						output: '/feed',
						title: "UCare's RSS Feed",
						// optional configuration to insert feed reference in pages:
						// if `string` is used, it will be used to create RegExp and then test if pathname of
						// current page satisfied this regular expression;
						// if not provided or `undefined`, all pages will have feed reference inserted
						match: '^/blog/',
					},
				],
			},
		},
	].filter(Boolean),
};
