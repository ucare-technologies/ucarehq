import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { FixedObject } from 'gatsby-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import FadeIn from '../fade-in';

interface LatestBlogPosts {
	posts: {
		edges: {
			node: {
				title: string;
				date: string;
				categories: string;
				slug: string;
				excerpt: string;
				featured_image: {
					childImageSharp: {
						fixed: FixedObject;
					};
				};
			};
		}[];
	};
}
const LatestBlog: React.FC = () => {
	const { posts } = useStaticQuery<LatestBlogPosts>(graphql`
		query LatestBlogPosts {
			posts: allBlogPost(sort: { fields: [date, title], order: DESC }, limit: 3) {
				edges {
					node {
						title
						date(formatString: "D MMMM YYYY")
						categories
						slug
						excerpt(pruneLength: 300)
						featured_image {
							childImageSharp {
								fixed(width: 375, height: 250) {
									src
								}
							}
						}
					}
				}
			}
		}
	`);
	return (
		<div className='container-fluid text-center latest-blog'>
			<FadeIn fade='up'>
				<div className='container latest-blog-wrapper'>
					<h2>Latest From the Blog</h2>
					{posts.edges.map(
						({
							node: {
								title,
								date,
								categories,
								featured_image: { childImageSharp },
								excerpt,
								slug,
							},
						}) => (
							<div className='col-lg-4 pt-3 px-0 align-top blog-out' key={slug}>
								<div className='blogs text-left'>
									<Link to={`/blog${slug}`} className='latest-blog'>
										<div className='thumb'>
											{childImageSharp ? (
												<img
													src={childImageSharp.fixed.src}
													className='m-0'
													alt={title}
													style={{ width: '100%', height: 'auto' }}
												/>
											) : null}
											<span className='cat'>{categories.split(',')[0]}</span>
										</div>
										<div className='content'>
											<h3>{title}</h3>
											<span className='text-left feature-date'>{date}</span>
											<div className='blog-excerpt'>
												<div>{excerpt}</div>
											</div>
											<div className='readmore-link'>
												<span className='read-more'>
													Read More
													<FontAwesomeIcon icon={faChevronRight} className='ml-2' />
												</span>
											</div>
										</div>
									</Link>
								</div>
							</div>
						)
					)}
				</div>
			</FadeIn>
		</div>
	);
};
export default LatestBlog;
