import React from 'react';

import { Link } from 'gatsby';

import { BlogPageContextType } from '../../templates/posts';
import { trimPTag } from '../../utils/trimTag';
import { ChevronLeft } from '../icons/chevron-left';
import { ChevronRight } from '../icons/chevron-right';
import { Layout } from '../layout';
import { PageHeader } from '../page-header';
import { BlogItem } from './blog-item';
import * as styles from './posts.module.scss';

export const AllPosts: React.FC<BlogPageContextType> = ({ blogsPageData, currentPage, limit }) => {
	const singleBlogs = (blogsPageData?.single_blogs ?? []).filter(isPost);
	const numPages = Math.ceil(singleBlogs.length / limit);
	const isFirst = currentPage === 1;
	const isLast = currentPage === numPages;
	const prevPage = currentPage - 1 <= 1 ? '/blog' : `/blog/page/${currentPage - 1}`;
	const nextPage = `/blog/page/${currentPage + 1}`;
	const start = (currentPage - 1) * limit;
	const pagePosts = singleBlogs.slice(start, start + limit);
	const banner: Queries.AllBlogsBannerSectionFragment | null = blogsPageData.all_blogs_banner_section;
	return (
		<Layout>
			<main>
				<PageHeader
					key={1}
					backgroundImageUrl={banner?.background_image?.file?.url || ''}
					titleHtml={trimPTag(banner?.rich_title?.childMarkdownRemark?.html)}
					subTitleHtml={trimPTag(banner?.description?.childMarkdownRemark?.html)}
				/>

				{pagePosts.map(({ title, long_description, blog_date, card_image, blog_slug }) => (
					<BlogItem
						key={blog_slug}
						title={title || 'Post'}
						date={blog_date || ''}
						slug={blog_slug || ''}
						excerpt={long_description?.childMarkdownRemark?.html || ''}
						imagePath={card_image?.file?.url || null} // TODO: <GatsbyImage
					/>
				))}

				<div className={`container ${styles.main}`}>
					<div className='row'>
						<div className='col-lg-9 mx-auto'>
							<div>
								{!isLast && (
									<Link to={nextPage} rel='next'>
										<button type='button' className={`btn btn-default ${styles.arrowBtn}`}>
											<ChevronLeft className={`mr-2 ${styles.arrowIcon}`} />
											Older
										</button>
									</Link>
								)}
								&nbsp;&nbsp;&nbsp;
								{!isFirst && (
									<Link to={prevPage} rel='prev'>
										<button type='button' className={`btn btn-default ${styles.arrowBtn}`}>
											Newer
											<ChevronRight className={`ml-2 ${styles.arrowIcon}`} />
										</button>
									</Link>
								)}
							</div>
						</div>
					</div>
				</div>
			</main>
		</Layout>
	);
};
function isPost(item: Queries.AllBlogsCardFragment | null): item is Queries.AllBlogsCardFragment {
	return !!item;
}
