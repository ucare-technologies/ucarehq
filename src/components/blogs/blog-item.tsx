import React from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

import Image from './blog-item-image';

interface BlogItemProps {
	title: string;
	date: string;
	slug: string;
	excerpt: string;
	imagePath: string | null;
}
const BlogItem: React.FC<BlogItemProps> = ({ title, date, slug, excerpt, imagePath }) => {
	const linkTo = `/blog${slug}`;
	return (
		<div className='container blog-list'>
			<div className='row'>
				<div className='col-lg-9 mx-auto'>
					<div className='entry-image'>
						{imagePath && (
							<Link to={linkTo}>
								<Image src={imagePath} className='m-0' alt={title} style={{ width: '100%', height: 'auto' }} />
							</Link>
						)}
					</div>
					<div className='entry-content'>
						<article>
							<h2>
								<Link to={linkTo} className='blog-title'>
									{title}
								</Link>
							</h2>
							<span>
								<FontAwesomeIcon icon={faCalendarAlt} className='mr-2' />
								{date}
							</span>
							<div className='entry-summary'>
								<p>{excerpt}</p>
							</div>
						</article>
						<div>
							<Link to={linkTo} className='readmore'>
								Read More
								<FontAwesomeIcon icon={faChevronRight} className='ml-2' />
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default BlogItem;
