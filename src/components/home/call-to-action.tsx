// eslint-disable-next-line no-use-before-define
import * as React from 'react';

import { Link } from 'gatsby';

import { FadeIn } from '../fade-in';
import { ChevronRight } from '../icons/chevron-right';
import * as styles from './call-to-action.module.scss';

export const CallToAction: React.FC<{
	title: string | null;
	subTitle: string | null;
	buttonText: string | null;
	linkTo: string | null;
}> = ({ title, subTitle, buttonText, linkTo }) => (
	<FadeIn as='section' className={`container p-0 justify-content-center text-center ${styles.management}`} fade='up'>
		<h1>{title}</h1>
		<h2>
			{subTitle}
			{!!linkTo && (
				<Link to={linkTo} className='ml-2'>
					<button className='align-text-bottom' type='button'>
						{buttonText}
						<ChevronRight className='ml-2' />
					</button>
				</Link>
			)}
		</h2>
	</FadeIn>
);
