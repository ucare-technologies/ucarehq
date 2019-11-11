import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

import SEO from '../seo';
import Layout from '../layout';
import PageHeader from '../page-header';
import YouTube from '../youtube';
import UCareEmbed from '../ucare-embed';

import LatestBlog from './latest-blog';

const shortcodes = {
	YouTube,
	UCareEmbed,
};
interface PostProps {
	data: {
		post: {
			id: string;
			title: string;
			date: string;
			excerpt: string;
			body: string;
			featured_image: {
				publicURL: string;
			};
		};
	};
}

const BlogPost: React.FC<PostProps> = ({ data: { post } }) => {
	const { title, excerpt, date, featured_image, body } = post;
	const publicURL = featured_image ? featured_image.publicURL : null;
	return (
		<Layout>
			<SEO title={title} description={excerpt} />
			<main className='page'>
				<PageHeader imageUrl={publicURL}>
					<h1>{title}</h1>
					<span className='date'>
						<FontAwesomeIcon icon={faCalendarAlt} />
						{date}
					</span>
				</PageHeader>
				<div className='container posts px-4 pb-5'>
					<div className='pages post'>
						<MDXProvider components={shortcodes}>
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
