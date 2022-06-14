/* eslint-disable camelcase */
// eslint-disable-next-line no-use-before-define
import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import SEO from '../seo';
import Layout from '../layout';
import PageHeader, { FluidImage } from '../page-header';

import BlogItem from './blog-item';
import LatestBlog from './latest-blog';

interface BlogPostNode {
	id: string;
	title: string;
	slug: string;
	date: string;
	excerpt: string;
	body: string;
	type: string;
	categories: string;
	featured_image: {
		publicURL: string;
		relativePath: string;
	} | null;
}
const Posts: React.FC<{
	posts: { post: BlogPostNode }[];
	currentPage: number;
	limit: number;
}> = ({ posts, currentPage, limit }) => {
	const numPages = Math.ceil(posts.length / limit);
	const isFirst = currentPage === 1;
	const isLast = currentPage === numPages;
	const prevPage = currentPage - 1 <= 1 ? '/blog' : `/blog/page/${currentPage - 1}`;
	const nextPage = `/blog/page/${currentPage + 1}`;
	const { file } = useStaticQuery<{ file: FluidImage }>(graphql`
		query PostsQuery {
			file(relativePath: { eq: "page/blog/friends04.jpg" }) {
				childImageSharp {
					fluid(quality: 100, maxWidth: 1600) {
						...GatsbyImageSharpFluid_withWebp
					}
				}
			}
		}
	`);
	const start = (currentPage - 1) * limit;
	const pagePosts = posts.slice(start, start + limit);
	return (
		<Layout>
			<SEO title={currentPage === 1 ? 'Blog' : `Blog | Page ${currentPage}`} />
			<main>
				<PageHeader image={file}>
					<h1>Blog</h1>
					<h3>Latest News &amp; Updates from the UCare Team</h3>
				</PageHeader>
				{pagePosts.map(({ post: { excerpt, title, date, slug, featured_image } }) => (
					<BlogItem
						title={title}
						date={date}
						slug={slug}
						excerpt={excerpt}
						imagePath={featured_image ? featured_image.relativePath : null}
						key={slug}
					/>
				))}
				<div className='container blog-list-main'>
					<div className='row'>
						<div className='col-lg-9 mx-auto'>
							<div className='arrow'>
								{!isLast && (
									<Link to={nextPage} rel='next'>
										<button type='button' className='btn btn-default arrow-btn'>
											<FontAwesomeIcon icon={faChevronLeft} className='arrow-icon mr-2' />
											Older
										</button>
									</Link>
								)}
								&nbsp;&nbsp;&nbsp;
								{!isFirst && (
									<Link to={prevPage} rel='prev'>
										<button type='button' className='btn btn-default arrow-btn'>
											Newer
											<FontAwesomeIcon icon={faChevronRight} className='arrow-icon ml-2' />
										</button>
									</Link>
								)}
							</div>
						</div>
					</div>
				</div>
			</main>
			<LatestBlog />
		</Layout>
	);
};
export default Posts;
