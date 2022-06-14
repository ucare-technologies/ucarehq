/* eslint-disable camelcase */
// eslint-disable-next-line no-use-before-define
import * as React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

import PageHeader, { FluidImage } from '../page-header';
import SEO from '../seo';
import Layout from '../layout';
import YouTube from '../youtube';
import UCareEmbed from '../ucare-embed';

import LatestBlog from './latest-blog';

const shortCodes = {
	YouTube,
	UCareEmbed,
};
const BlogPost: React.FC<{
	data: {
		post: {
			id: string;
			title: string;
			date: string;
			excerpt: string;
			body: string;
			featured_image: FluidImage | undefined;
		};
	};
}> = ({ data: { post } }) => {
	const { title, excerpt, date, featured_image, body } = post;
	return (
		<Layout>
			<SEO title={title} description={excerpt} />
			<main className='page'>
				<PageHeader image={featured_image || null}>
					<h1>{title}</h1>
					<span className='date'>
						<FontAwesomeIcon icon={faCalendarAlt} />
						{date}
					</span>
				</PageHeader>
				<div className='container posts px-4 pb-5'>
					<div className='pages post'>
						<MDXProvider components={shortCodes}>
							<MDXRenderer>{body}</MDXRenderer>
						</MDXProvider>
					</div>
				</div>
			</main>
			<LatestBlog />
		</Layout>
	);
};
export default BlogPost;
