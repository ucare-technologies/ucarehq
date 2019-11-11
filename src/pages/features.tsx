import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import SEO from '../components/seo';
import Layout from '../components/layout';
import PageHeader from '../components/page-header';
import LatestBlog from '../components/blogs/latest-blog';
import FeatureLists from '../components/features/feature-lists';
import FeatureList2 from '../components/features/feature-list2';

const Features: React.FC = () => {
	const data = useStaticQuery(graphql`
		query {
			allFile(filter: { relativePath: { eq: "features/hero.jpg" } }) {
				edges {
					node {
						publicURL
					}
				}
			}
		}
	`);
	const { publicURL } = data.allFile.edges[0].node;
	return (
		<Layout>
			<SEO title='UCare’s Powerful Features' />
			<main>
				<PageHeader imageUrl={publicURL}>
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
							<FeatureLists>
								<FeatureList2 />
							</FeatureLists>
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
