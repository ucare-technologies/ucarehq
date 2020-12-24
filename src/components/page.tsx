/* eslint-disable camelcase */
/* eslint-disable react/no-danger */
// eslint-disable-next-line no-use-before-define
import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';

import SEO from './seo';
import Layout from './layout';
import PageHeader, { FluidObject } from './page-header';
import UCareEmbed from './ucare-embed';
import YouTube from './youtube';
import LatestBlog from './blogs/latest-blog';
import ThreeUp from './features/three-up';
import FeatureList from './features/feature-list';
import AllFeatures from './features/features';

const shortcodes = {
	ThreeUp,
	UCareEmbed,
	YouTube,
};
interface PageProps {
	pageContext: {
		frontmatter: {
			title: string;
			type: string;
			svg_code: string;
			feature_colour: string;
			featured_image: string;
			header_alignment: string;
		};
	};
	path: string;
}

const Page: React.FC<PageProps> = ({
	children,
	pageContext: {
		frontmatter: { title, type, featured_image, feature_colour, svg_code, header_alignment },
	},
}) => {
	type QueryShape = {
		allImageSharp: {
			edges: {
				node: {
					image: FluidObject & { originalName: string };
				};
			}[];
		};
	};
	const images = useStaticQuery<QueryShape>(graphql`
		query AllImages {
			allImageSharp {
				edges {
					node {
						image: fluid(quality: 100, maxWidth: 1600) {
							...GatsbyImageSharpFluid_withWebp
							originalName
						}
					}
				}
			}
		}
	`);
	const image = featured_image
		? images.allImageSharp.edges.find(edge => featured_image.indexOf(edge.node.image.originalName) >= 0)
		: null;
	const headerImage = image ? { childImageSharp: { fluid: image.node.image } } : null;
	return (
		<Layout>
			<SEO title={title} />
			<main className='page'>
				<PageHeader image={headerImage} align={header_alignment} color={feature_colour}>
					{svg_code && (
						<div className='feature-circle'>
							<div dangerouslySetInnerHTML={{ __html: `${svg_code}` }} />
						</div>
					)}
					<h1>{title}</h1>
				</PageHeader>
				<div className='container pages px-4 pb-5'>
					<div className={`page ${type}`}>
						<MDXProvider components={shortcodes}>{children}</MDXProvider>
					</div>
				</div>
			</main>
			{type === 'feature' && (
				<div className='row m-0 blog-feature-part'>
					<div className='container text-center'>
						<h2>More Features</h2>
						<FeatureList>
							<AllFeatures />
						</FeatureList>
					</div>
				</div>
			)}
			<LatestBlog />
		</Layout>
	);
};
export default Page;
