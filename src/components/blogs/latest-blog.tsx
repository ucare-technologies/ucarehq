// eslint-disable-next-line no-use-before-define
import * as React from 'react';

import { formatDate } from '../../utils/convertDateToText';
import { handleLinkClick } from '../../utils/handleLinkClick';
import { FadeIn } from '../fade-in';
import { ChevronRight } from '../icons/chevron-right';
import { Link } from '../link';
import * as styles from './latest-blog.module.scss';

// TODO: query from blogs instead of having a latest blogs section
export const LatestBlog: React.FC<{
	title: string;
	cards: CardData[];
}> = ({ title, cards }) => (
	<div className={`container-fluid text-center ${styles.latestBlog}`}>
		<FadeIn fade='up'>
			<div className={`container ${styles.wrapper}`}>
				<h2>{title}</h2>
				{cards.map(item => (
					<LatestBlogCard key={item.slug} {...item} />
				))}
			</div>
		</FadeIn>
	</div>
);
type CardData = {
	imagePath?: string | null;
	title: string;
	tag: string;
	slug: string;
	date: string;
	html: string;
};
const LatestBlogCard: React.FC<CardData> = ({ imagePath, title, tag, slug, date, html }) => (
	<div className={`col-lg-4 pt-3 px-0 align-top ${styles.blogOut}`} key={slug}>
		<div className={`text-start ${styles.blogs}`}>
			<Link to={`/blog/${slug}`} className={styles.blog}>
				<div className={styles.thumb}>
					{!!imagePath && <img src={imagePath} alt={title || ''} loading='lazy' className='m-0' />}

					<span className={styles.cat}>{tag}</span>
				</div>

				<div className={styles.content}>
					<h3>{title}</h3>
					{!!date && <span className={`text-start ${styles.featureDate}`}>{formatDate(date)}</span>}

					<div className={styles.blogExcerpt}>
						<div dangerouslySetInnerHTML={{ __html: html }} onClick={handleLinkClick} />
					</div>

					<div className={styles.readMore}>
						<span>
							Read More
							<ChevronRight className='ms-2' />
						</span>
					</div>
				</div>
			</Link>
		</div>
	</div>
);
