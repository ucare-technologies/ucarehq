import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import SEO from '../components/seo';
import Layout from '../components/layout';
import PageHeader, { FluidImage } from '../components/page-header';
import LatestBlog from '../components/blogs/latest-blog';
import FeatureList from '../components/features/feature-list';
import AllFeatures from '../components/features/features';

const Features: React.FC = () => {
	const { file } = useStaticQuery<{ file: FluidImage }>(graphql`
		query FeaturesHeroQuery {
			file(relativePath: { eq: "features/hero.jpg" }) {
				childImageSharp {
					fluid(quality: 100, maxWidth: 1600) {
						...GatsbyImageSharpFluid_withWebp
					}
				}
			}
		}
	`);
	return (
		<Layout>
			<SEO title='UCare’s Powerful Features' />
			<main>
				<PageHeader image={file}>
					<h1>UCare’s Powerful Features</h1>
					<h3>Church can be complex, but your software doesn’t need to be.</h3>
				</PageHeader>
				<div className='container-fluid p-0 m-0 feature-page'>
					<div className='container text-center my-4'>
						<div className='row feature-page-body'>
							<p>
								UCare provides effective and easy to use all-in-one church management solution that doesn’t cost the
								world so you can focus on ministry and loving people. Explore each powerful feature to find out how
								UCare handles the simplest to the most complex needs.
							</p>
						</div>
						<div className='feature-body-list mb-5'>
							<FeatureList>
								<AllFeatures />
							</FeatureList>
						</div>
					</div>
				</div>
			</main>
			<div>
				<LatestBlog />
			</div>
		</Layout>
	);
};
export default Features;
