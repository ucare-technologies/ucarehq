import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import LatestBlog from '../components/blogs/latest-blog';
import SEO from '../components/seo';
import Layout from '../components/layout';
import PageHeader from '../components/page-header';

const NotFound: React.FC = () => {
	const { file } = useStaticQuery<{ file: { publicURL: string } }>(graphql`
		query FourOhFourImageQuery {
			file(relativePath: { eq: "404.jpg" }) {
				publicURL
			}
		}
	`);
	return (
		<Layout>
			<SEO title='404' />
			<main>
				<PageHeader imageUrl={file.publicURL}>
					<h1>FOUR, OH FOUR.</h1>
				</PageHeader>
				<div className='not-exist'>
					<p className='text-center'>Sorry, but the page you were trying to view does not exist.</p>
				</div>
			</main>
			<LatestBlog />
		</Layout>
	);
};
export default NotFound;
