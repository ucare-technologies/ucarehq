import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';

import SEO from './seo';
import Layout from './layout';
import PageHeader from './page-header';
import UCareEmbed from './ucare-embed';
import YouTube from './youtube';
import LatestBlog from './blogs/latest-blog';
import ThreeUp from './features/three-up';
import FeatureLists from './features/feature-lists';
import FeatureList2 from './features/feature-list2';

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
					original: { src: string };
					image: { originalName: string };
				};
			}[];
		};
	};
	const images = useStaticQuery<QueryShape>(graphql`
		query AllImages {
			allImageSharp {
				edges {
					node {
						original {
							src
						}
						image: fluid {
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
	return (
		<Layout>
			<SEO title={title} />
			<main className='page'>
				<PageHeader imageUrl={image ? image.node.original.src : null} align={header_alignment} color={feature_colour}>
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
						<FeatureLists>
							<FeatureList2 />
						</FeatureLists>
					</div>
				</div>
			)}
			<LatestBlog />
		</Layout>
	);
};
export default Page;
