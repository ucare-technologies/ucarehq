// eslint-disable-next-line no-use-before-define
import * as React from 'react';

import { FadeIn } from '../fade-in';
import * as styles from './ministry.module.scss';

export const Ministry: React.FC<{
	title: string;
	description: string;
	cards: {
		title: string;
		description: string;
		image: {
			url: string;
		};
	}[];
}> = ({ title, description, cards }) => (
	<section className={`container ${styles.ministry}`}>
		<FadeIn className='row text-center' fade='up'>
			<div className='col-md-12'>
				<h2>{title}</h2>
				<p>{description}</p>
			</div>
		</FadeIn>

		<FadeIn className='row text-center' fade='up'>
			{cards.map((item, index) => (
				<div className={`col-md-4 ${styles.column}`} key={index}>
					<div className={styles.circle}>
						<img src={item.image.url} alt={item.title} />
					</div>
					<h5>{item.title}</h5>
					<h6>{item.description}</h6>
				</div>
			))}
		</FadeIn>
	</section>
);
