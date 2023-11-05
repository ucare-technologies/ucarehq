import * as React from 'react';

import { graphql, useStaticQuery } from 'gatsby';

export const HeadTags: React.FC<{ title: string }> = ({ title }) => {
	const { site } = useStaticQuery(graphql`
		query SiteMetadata {
			site {
				siteMetadata {
					title
					description
					author
				}
			}
		}
	`);
	// TODO: add description to each page in contentful
	const metaDescription = site.siteMetadata.description;
	return (
		<>
			<title>
				{title} | {site.siteMetadata.title || 'UCare'}
			</title>
			<meta name='description' content={metaDescription} />
			<meta property='og:title' content={title} />
			<meta property='og:description' content={metaDescription} />
			<meta property='og:type' content='website' />
			<meta name='twitter:card' content='summary' />
			<meta name='twitter:creator' content={site.siteMetadata.author} />
			<meta name='twitter:title' content={title} />
			<meta name='twitter:description' content={metaDescription} />
		</>
	);
};
