import React from 'react';

import { Link } from 'gatsby';

import { formatDate } from '../../utils/convertDateToText';
import { CalendarDays } from '../icons/calendar-days';
import { ChevronRight } from '../icons/chevron-right';
import * as styles from './blog-item.module.scss';

export const BlogItem: React.FC<{
	title: string;
	date: string;
	slug: string;
	excerpt: string;
	imagePath: string | null;
}> = ({ title, date, slug, excerpt, imagePath }) => {
	const linkTo = `/blog/${slug}`;
	return (
		<div className={`container ${styles.list}`}>
			<div className='row'>
				<div className='col-lg-9 mx-auto'>
					{imagePath && (
						<div className={styles.image}>
							<Link to={linkTo}>
								<img src={imagePath} className='m-0' alt='img' style={{ width: '100%', height: 'auto' }} />
							</Link>
						</div>
					)}
					<div className={styles.content}>
						<article>
							<Link to={linkTo} className={styles.title}>
								<h2 dangerouslySetInnerHTML={{ __html: title }} />
							</Link>
							<span>
								<CalendarDays className='mr-2' />
								{formatDate(date)}
							</span>
							<div>
								<p dangerouslySetInnerHTML={{ __html: excerpt }} />
							</div>
						</article>
						<div>
							<Link to={linkTo} className={styles.arrowBtn}>
								Read More
								<ChevronRight className='ml-2' />
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
