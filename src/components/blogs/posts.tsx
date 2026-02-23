import React from 'react';

import { trimPTag } from '../../utils/trimTag';
import { ChevronLeft } from '../icons/chevron-left';
import { ChevronRight } from '../icons/chevron-right';
import { Layout } from '../layout';
import { Link } from '../link';
import { PageHeader } from '../page-header';
import { BlogItem } from './blog-item';
import * as styles from './posts.module.scss';

export type BlogPageContextType = {
	blogsPageData: {
		all_blog_section: string | null;
		all_blogs_banner_section: {
			rich_title: string | null;
			description: string | null;
			background_image: { file: { url: string | null } | null } | null;
		} | null;
		single_blogs: {
			id: string;
			title: string | null;
			blog_date: string | null;
			blog_slug: string | null;
			card_image: { file: { url: string | null } | null } | null;
			long_description: string | null;
		}[];
	};
	currentPage: number;
	limit: number;
};

export const AllPosts: React.FC<BlogPageContextType> = ({ blogsPageData, currentPage, limit }) => {
	const singleBlogs = blogsPageData.single_blogs ?? [];
	const numPages = Math.ceil(singleBlogs.length / limit);
	const isFirst = currentPage === 1;
	const isLast = currentPage === numPages;
	const prevPage = currentPage - 1 <= 1 ? '/blog' : `/blog/page/${currentPage - 1}`;
	const nextPage = `/blog/page/${currentPage + 1}`;
	const start = (currentPage - 1) * limit;
	const pagePosts = singleBlogs.slice(start, start + limit);
	const banner = blogsPageData.all_blogs_banner_section;

	return (
		<Layout>
			<main>
				<PageHeader
					backgroundImageUrl={banner?.background_image?.file?.url || ''}
					titleHtml={trimPTag(banner?.rich_title)}
					subTitleHtml={trimPTag(banner?.description)}
				/>

				{pagePosts.map(({ title, long_description, blog_date, card_image, blog_slug }) => (
					<BlogItem
						key={blog_slug}
						title={title || 'Post'}
						date={blog_date || ''}
						slug={blog_slug || ''}
						excerpt={long_description || ''}
						imagePath={card_image?.file?.url || null}
					/>
				))}

				<div className={`container ${styles.main}`}>
					<div className='row'>
						<div className='col-lg-9 mx-auto'>
							<div>
								{!isLast && (
									<Link to={nextPage} rel='next'>
										<button type='button' className={`btn ${styles.arrowBtn}`}>
											<ChevronLeft className={`me-2 ${styles.arrowIcon}`} />
											Older
										</button>
									</Link>
								)}
								&nbsp;&nbsp;&nbsp;
								{!isFirst && (
									<Link to={prevPage} rel='prev'>
										<button type='button' className={`btn ${styles.arrowBtn}`}>
											Newer
											<ChevronRight className={`ms-2 ${styles.arrowIcon}`} />
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
