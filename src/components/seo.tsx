// eslint-disable-next-line no-use-before-define
import * as React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

interface SEOProps {
	description?: string;
	lang?: string;
	meta?: { name: string; content: string }[];
	keywords?: string[];
	title: string;
}
const SEO: React.FC<SEOProps> = ({ description, lang, meta, keywords, title }) => {
	const { site } = useStaticQuery(
		graphql`
			query {
				site {
					siteMetadata {
						title
						description
						author
					}
				}
			}
		`
	);
	const metaDescription = description || site.siteMetadata.description;
	const metaArray = [
		{
			name: `description`,
			content: metaDescription,
		},
		{
			property: `og:title`,
			content: title,
		},
		{
			property: `og:description`,
			content: metaDescription,
		},
		{
			property: `og:type`,
			content: `website`,
		},
		{
			name: `twitter:card`,
			content: `summary`,
		},
		{
			name: `twitter:creator`,
			content: site.siteMetadata.author,
		},
		{
			name: `twitter:title`,
			content: title,
		},
		{
			name: `twitter:description`,
			content: metaDescription,
		},
	]
		.concat(
			keywords && keywords.length > 0
				? {
						name: `keywords`,
						content: keywords.join(`, `),
				  }
				: []
		)
		.concat(meta || []) as JSX.IntrinsicElements['meta'][];
	return (
		<Helmet
			htmlAttributes={{ lang: lang || 'en' }}
			title={title}
			titleTemplate={`%s | ${site.siteMetadata.title || 'UCare'}`}
			meta={metaArray}
		/>
	);
};
SEO.defaultProps = {
	lang: `en`,
	meta: [],
	keywords: [],
	description: ``,
};

export default SEO;
