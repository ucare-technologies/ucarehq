import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import SEO from '../seo';
import Layout from '../layout';
import PageHeader from '../page-header';

import BlogItem from './blog-item';
import LatestBlog from './latest-blog';

interface PostsProps {
	posts: { post: BlogPostNode }[];
	currentPage: number;
	limit: number;
}
const Posts: React.FC<PostsProps> = ({ posts, currentPage, limit }) => {
	const numPages = Math.ceil(posts.length / limit);
	const isFirst = currentPage === 1;
	const isLast = currentPage === numPages;
	const prevPage = currentPage - 1 <= 1 ? '/blog' : `/blog/page/${currentPage - 1}`;
	const nextPage = `/blog/page/${currentPage + 1}`;
	const { file } = useStaticQuery<{ file: { publicURL: string } }>(graphql`
		query PostsQuery {
			file(relativePath: { eq: "page/blog/friends04.jpg" }) {
				publicURL
			}
		}
	`);
	const start = (currentPage - 1) * limit;
	const pagePosts = posts.slice(start, start + limit);
	return (
		<Layout>
			<SEO title={currentPage === 1 ? 'Blog' : `Blog | Page ${currentPage}`} />
			<main>
				<PageHeader imageUrl={file.publicURL}>
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
			</main>
			<LatestBlog />
		</Layout>
	);
};
export default Posts;
