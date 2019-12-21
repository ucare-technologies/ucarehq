import React from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import FadeIn from '../fade-in';

export default function Management() {
	return (
		<FadeIn as='section' className='container management justify-content-center' fade='up'>
			<h1 className='text-center title'>Easy to use church management software isn’t optional, it’s essential.</h1>
			<h2 className='text-center try-ucare'>
				Try UCare FREE for 21 days.{' '}
				<Link to='/pricing'>
					<button className='try-today align-text-bottom' type='button'>
						try today
						<FontAwesomeIcon icon={faChevronRight} className='ml-2' />
					</button>
				</Link>
			</h2>
		</FadeIn>
	);
}
